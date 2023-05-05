<script lang="ts">
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import IntroHeading from '$lib/components/IntroHeading.svelte';
  import Map from './_components/Map.svelte';
  import { listPublicGCalEvents, parseTime } from '$lib/google';
  import Card from './_components/Card.svelte';
  import { createQuery } from '@tanstack/svelte-query';
  import SpinnerLoader from '$lib/components/SpinnerLoader.svelte';

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
   * Transform events to easier to handle object
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
  header="Our Location"
  quote="Get ready for our new location! 1084 Lee Rd, Orlando Fl, 32810"
  --url="url('/images/chicken_grill2.jpg')"
  --bg-pos="0 51%"
/>

{#if $eventsQuery.isLoading}
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
{/if}

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
