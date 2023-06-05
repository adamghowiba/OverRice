<script lang="ts">
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import IntroHeading from '$lib/components/IntroHeading.svelte';
  import Map from './_components/Map.svelte';
  import { listPublicGCalEvents, parseTime } from '$lib/google';
  import Card from './_components/Card.svelte';
  import { createQuery } from '@tanstack/svelte-query';
  import SpinnerLoader from '$lib/components/SpinnerLoader.svelte';
  import LocationCard from './_components/LocationCard.svelte';

  let selected: Locations = null;
  let locationDIV: HTMLDivElement;

  const select = day => () => {
    selected = day;
  };

  const parseEventTime = (start: Date, end: Date): string => {
    let parsedString: string = '';

    if (start instanceof Date && start.toString() !== 'Invalid Date') {
      parsedString += `${start.toLocaleTimeString('en-us', { timeStyle: 'short' })}`;
    }

    if (end instanceof Date && end.toString() !== 'Invalid Date') {
      parsedString += ` - ${end.toLocaleTimeString('en-us', { timeStyle: 'short' })}`;
    }

    return parsedString;
  };

  /**
   * Transform events to an easier to handle object
   */
  const transformEvents = async () => {
    const events = await listPublicGCalEvents();
    let transformEvents: any[] = [];

    for (const event of events) {
      const startDate = new Date(event?.start?.dateTime || event?.start?.date);
      const endDate = new Date(event?.end?.dateTime);

      if (!event.location) continue;

      transformEvents = [
        ...transformEvents,
        {
          day: startDate.toLocaleDateString('en-us', { weekday: 'long' }),
          location: event.location,
          times: parseEventTime(startDate, endDate) ?? null,
        },
      ];
    }

    return transformEvents;
  };

  const eventsQuery = createQuery({ queryKey: ['locations'], queryFn: () => transformEvents(), staleTime: 1000 * 60 });
</script>

<HeroHeader
  header="Location"
  quote="New location, same great flavors."
  --url="url('/images/chicken_grill2.jpg')"
  --bg-pos="0 51%"
/>

<main class="location">
  <section>
    <IntroHeading
      body="We might be close by!"
      footer="Take a break from your routine with an invitation to explore new tastes."
    />
  </section>

  <section>
    <div class="locations">
      <LocationCard icon="/icons/food_truck.svg" name="Food Truck" iconYOffset={-7}
        >For our food truck we post our schedule every Monday on Social Media
        <a class="link link--green" href="https://www.instagram.com/overricecfl/"> @overricecfl </a>
      </LocationCard>
      <LocationCard icon="/icons/resturant.svg" name="Resturant">
        <div class="resturant-list">
          <span>Wednesday - Friday</span>
          <span>Dinner 5pm-8pm</span>
          <span>Lunch 11am-2:30pm </span>
          <span>Saturday 11am-5pm. </span>
          <a
            class="link link--green"
            target="_blank"
            href="https://www.google.com/maps/dir//1084+Lee+Rd,+Orlando,+FL+32810,+USA/@28.6054115,-81.4009849,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e77093b873714f:0x8d580193ec04fefa!2m2!1d-81.3984046!2d28.6054068"
            >Get Directions</a
          >
        </div>
      </LocationCard>
    </div>
  </section>
</main>

<!-- {#if $eventsQuery.isLoading}
  <section class="section--white loading-container">
    <SpinnerLoader color="#9DC471" />
    <span>Loading location data...</span>
  </section>
{:else if $eventsQuery.isSuccess && $eventsQuery.data?.length}
  <main class="location">
    <section>
      <IntroHeading
        title="Our Location"
        body="We might be close by!"
        footer="Take a break from your routine with an invitation to explore new tastes."
      />
    </section>

    <section class="location__body">
      <div class="location__list" bind:this={locationDIV}>
        {#each $eventsQuery.data as day}
          <Card
            times={day.times}
            location={day.location}
            day={day.day}
            active={selected?.day === day.day}
            on:click={select(day)}
          />
        {/each}
      </div>

      <div class="location__map">
        <Map address={selected?.location || $eventsQuery.data?.[0]?.location || 'Orlando, Florida'} />
      </div>
    </section>
  </main>
{:else}
  <section class="section">
    <div class="container">
      <h1>There's no location data to show right now.</h1>
      <h2 class="subheading">Check back later as we update our schedule regularly.</h2>
    </div>
  </section>
{/if} -->
<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    min-height: 45vh;
    flex-direction: column;
  }

  .link--green {
    color: $color-green;
  }

  .resturant-list {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .locations {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 3rem;
  }

  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 80px 20px;
    background: url('/images/background.jpg');

    &__body {
      width: 90%;
      display: flex;
      margin: 0 auto;
      gap: 40px;

      justify-content: center;

      @include mq.media('<1000px') {
        flex-direction: column-reverse;
        align-items: center;
        gap: 40px;
      }

      @include mq.media('>desktop') {
        width: 60%;
      }
    }

    &__list {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 25px 16px;
      padding-right: 25px;
      gap: 30px;

      width: 100%;
      min-width: 300px;
      max-width: 450px;

      background: white;
      border-radius: 11px;

      height: 570px;
      overflow: hidden scroll;

      scrollbar-width: thin;
      scrollbar-color: $color-green #f1f1f1;

      &::-webkit-scrollbar {
        background: #f1f1f1;
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: $color-green;
        border-radius: 10px;
      }

      @include mq.media('<tablet') {
        height: auto;
        overflow: hidden;

        &--overlay {
          display: none !important;
        }
      }

      &--overlay {
        opacity: var(--opacity);
        pointer-events: none;

        position: absolute;
        bottom: 0;

        background: linear-gradient(
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.7) 80%,
          rgba(255, 255, 255, 1) 100%
        );

        width: 100%;
        transform: translateY(var(--t-y, 0px));
        min-height: var(--overlay-height, 161px);
        transition: min-height 0.2s ease-in-out;
      }
    }

    &__map {
      --width: 480px;
      width: 100%;
      display: flex;
      justify-content: center;

      @include mq.media('<tablet') {
        --height: 300px;
      }
    }
  }

  .container {
    text-align: center;
  }

  .subheading {
    font-size: 2rem;
  }
</style>
