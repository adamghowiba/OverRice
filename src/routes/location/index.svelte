<script lang="ts">
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import IntroHeading from '$lib/components/IntroHeading.svelte';
  import Map from './_components/Map.svelte';
  import { getPublic, constructExportUrl, parseTime } from '$lib/google';
  import { onMount } from 'svelte';
  import Card from './_components/Card.svelte';

  let days: Locations[] = [];

  let selected: Locations = null;
  let showPage: boolean = true;
  let locationDIV: HTMLDivElement;
  let scrollPercentage = 1;
  let scrollTop = 0;

  const select = day => () => {
    selected = day;
  };

  const parseEventTime = (start: Date, end: Date): string => {
    let parsedString: string = '';

    if (start instanceof Date && start.toString() !== 'Invalid Date') {
      console.log(start);
      parsedString += `${start.toLocaleTimeString('en-us', { timeStyle: 'short' })}`;
    }

    if (end instanceof Date && end.toString() !== 'Invalid Date') {
      console.log(end);
      parsedString += ` - ${end.toLocaleTimeString('en-us', { timeStyle: 'short' })}`;
    }

    return parsedString;
  };

  onMount(async () => {
    scrollPercentage = locationDIV.scrollTop / (locationDIV.scrollHeight - locationDIV.clientHeight);
    scrollTop = locationDIV.scrollTop;
    locationDIV.onscroll = () => {
      scrollTop = locationDIV.scrollTop;
      scrollPercentage = locationDIV.scrollTop / (locationDIV.scrollHeight - locationDIV.clientHeight);
    };

    /* Get the GCAL Events */
    const events = await getPublic();
    console.log(events);

    /* Show no events section */
    if (events.items.length === 0) {
      showPage = false;
      return;
    }

    for (const [i, event] of events.items.entries()) {
      const startDate = new Date(event?.start?.dateTime || event?.start?.date);
      const endDate = new Date(event?.end?.dateTime);

      days[i] = {
        day: startDate.toLocaleDateString('en-us', { weekday: 'long' }),
        location: event.location,
        times: parseEventTime(startDate, endDate) ?? null,
      };
    }

    days = days;
  });
</script>

<HeroHeader
  header="Our Location"
  quote="Come stop by for a bite. We'd be happy to see you."
  --url="url('/images/chicken_grill2.jpg')"
  --bg-pos="0 51%"
/>

{#if showPage}
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
        {#each days as day}
          {#if day?.location}
            <Card
              times={day.times}
              location={day.location}
              day={day.day}
              active={selected?.day === day.day}
              on:click={select(day)}
            />
          {/if}
        {/each}

        <div class="location__list--overlay" style="--opacity: {1 - scrollPercentage}; --t-y: {scrollTop}px;" />
      </div>

      <div class="location__map">
        <Map address={selected?.location || days[0]?.location || 'florida'} />
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
