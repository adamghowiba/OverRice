<script lang="ts">
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import Card from "./_components/Card.svelte";
  import ScrollBar from "././_components/ScrollBar.svelte";
  import Map from "./_components/Map.svelte";
  import { getContext, onDestroy, onMount, setContext } from "svelte";
  import { scroll } from "$lib/stores";
  import { getPublic, constructExportUrl, parseTime } from "$lib/google";
  import type { Writable } from 'svelte/store';
  import { writable } from "svelte/store";

  let days: Locations[] = [
    {
      day: "monday",
      location: "114 Walker St Daytona Beach, FL 32117",
      times: "00:10AM - 00:06PM",
    },
    {
      day: "tuesday",
      location: "115 Walker St Daytona Beach, FL 32117",
      times: "00:10AM - 00:06PM",
    },
    {
      day: "wednesday",
      location: "St. Walker Street, Florida",
      times: "00:10AM - 00:06PM",
    },
    {
      day: "thursday",
      location: "St. Walker Street, Florida",
      times: "00:10AM - 00:06PM",
    },
    {
      day: "friday",
      location: "St. Walker Street, Florida",
      times: "00:10AM - 00:06PM",
    },
    {
      day: "saturday",
      location: "St. Walker Street, Florida",
      times: "00:10AM - 00:06PM",
    },
    {
      day: "sunday",
      location: "St. Walker Street, Florida",
      times: "00:10AM - 00:06PM",
    },
  ];

  let selected: Locations = days[0];
  const select = (day) => () => {
    selected = day
    const map: HTMLDivElement = document.querySelector('#map')
    map.scrollIntoView()
  };

  let list: HTMLElement;
  let height = 500;

  let showPage = writable(true)

  onMount(async () => {
    height = (list.clientHeight / list.scrollHeight) * list.clientHeight;
    $scroll = list.scrollTop;
    list.addEventListener("scroll", () => {
      $scroll = (list.scrollTop / list.scrollHeight) * list.clientHeight;
    });

    const events = await getPublic(days.length.toString());
    for (const [i, event] of events.items.entries()) {  
      days[i].location = event.location;
      if (event.start.dateTime && event.end.dateTime) {
        days[i].times = parseTime(event.start?.dateTime, event.end?.dateTime);
      }
      if (event.attachments) days[i].src = constructExportUrl(event.attachments[0].fileId)
    }
  });

  
  // if the list is not mounted (ie list will be null if not mounted)
  let opacity = 1;
  $: if (list) {
    $scroll;
    opacity = 1 - $scroll / (list.clientHeight - $scroll);

    list.scrollTo({
      top: ($scroll / list.clientHeight) * list.scrollHeight,
    });
  }
</script>

<HeroHeader
  header="Our Location"
  quote="See where we're at and come stop by for a bite. We'd be happy to see you."
  --url="url('/images/chicken_grill2.jpg')"
  --bg-pos="0 51%"
/>

<main class="location">
  <section class="location__header">
    <IntroHeading
      title="Our Location"
      body="Find Where are we now"
      footer="Using the current calender, You can go through our weekly schedule"
    />
  </section>
{#if $showPage}
  <section class="location__body">
    <div class="location__list">
      <div bind:this={list} class="location__list--container">
        {#each days as day}
          {#if day.location}
            <Card
              alt="flordia"
              active={selected.day === day.day}
              {...day}
              on:click={select(day)}
            />
          {/if}
        {/each}
      </div>

      <div class="location__list--overlay-fade" style="--opacity: {opacity}"/>
    </div>

      <ScrollBar --height="{height}px" />

      <Map address={selected.location} {showPage} />
    </section>
  {:else}
    <section class="section">
      <div class="container">
        <h1>Uh, oh. <br /> Theirs no location data to show right now.</h1>
        <h2 class="subheading">Check back later as we update our schedule regularly.</h2>
      </div>
    </section>
  {/if}
</main>

<style lang="scss">
  @use '../../lib/scss/1-plugins/mquery' as mq;

  .container {
    text-align: center;
  }
  
  .subheading {
    font-size: 2rem;
  }

  .location {
    position: relative;
    min-height: 1125px;
    background: url("/images/background.jpg");
    z-index: 2;
    padding-bottom: 4rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;

    &__header {
      margin: 110px 0;

      @include mq.media("<tablet") {
        margin: 60px 0;
      }
      
    }

    &__body {
      display: grid;
      grid-template-columns: min-content min-content 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "list scroll map";
      gap: 45px;
      justify-self: center;

      @include mq.media("<1200px") {
        gap: 20px;
        grid-template-columns: min-content 1fr min-content;
        grid-template-rows: min-content 1fr;
        grid-template-areas: 
                            "map map"
                            "box box"
                            "list scroll";
      }

      @include mq.media("<tablet") {
        grid-template-columns: min-content;
        grid-template-rows: min-content 1fr;
        grid-template-areas: 
                            "map"
                            "box"
                            "list";
        justify-items: center;
      }
    }

    &__list {
      position: relative;

      background: white;

      width: 100vw;
      min-width: 320px;
      max-width: 500px;
      height: 700px;
      border-radius: 11px;
      overflow: hidden;
      grid-area: list;

      &--container::-webkit-scrollbar {
        display: none;
      }

      &--container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 25px 16px 25px 16px;
        top: 0;
        left: 0;
        overflow-y: scroll;
        scrollbar-width: none;
      }

      &--overlay-fade {
        opacity: var(--opacity);
        pointer-events: none;

        position: absolute;
        left: 0;
        bottom: 0;

        background: linear-gradient(
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.7) 80%,
          rgba(255, 255, 255, 1) 100%
        );

        width: 100%;
        height: 100%;
        max-height: 161px;
      }
    }
  }
</style>
