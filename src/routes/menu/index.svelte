<script lang="ts">
  import BottomBarItem from '$lib/components/Bottom/Item.svelte';
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import Highlighed from './_components/Highlighed.svelte';
  import Food from '$lib/foods';
  import Acord from './_components/Acord.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Button from '$lib/components/Button.svelte';
  import type { BaseFood, Mains } from '$lib/interfaces/Foods';

  let selectedMenu: 'Mains' | 'Pupus' = 'Mains';
  let menu: Mains[] | BaseFood[] = Food[selectedMenu];
  $: menu = Food[selectedMenu];

  onMount(() => {
    if (window.innerWidth < 600) {
    }
  });

  let selected = menu[0];
  let _selected = selected; // this is purpley so we can remain the previous selected for highlights
  $: highlight = selected != null ? selected : _selected;

  const select = (order: BaseFood) => () => {
    _selected = selected;
    if (selected?.title === order.title) {
      selected = null;
    } else {
      selected = order;
    }
  };
</script>

<HeroHeader
  header="Menu"
  quote="Filipino favorites like the staple Pork Adobo, Lumpia Shanghai and Pancit, along with Hawaiian classics like Kalua Pork, Chicken Katsu and other sweet savory flavors."
  --url="url('/images/contact.jpg')"
  height="550px"
  button={{ text: 'Order online', url: 'https://over-rice-food-truck.square.site/', newTab: true }}
/>

<main>
  <div class="plates__nav">
    <BottomBarItem
      --cursor="pointer"
      src="/icons/Lunch.svg"
      content="Main Lunch Plates"
      prefix="Mains"
      on:click={() => (selectedMenu = 'Mains')}
    />
    <BottomBarItem
      --cursor="pointer"
      src="/icons/Pupus.svg"
      content="Pupus"
      prefix="Pupus"
      on:click={() => (selectedMenu = 'Pupus')}
    />
  </div>

  <section class="section section--small section--white">
    <div class="menu-container">
      <div class="flex">
        <div class="col col--acord">
          <div class="plates__heading">
            <h1 transition:fade={{ duration: 1500 }}>
              {selectedMenu}
            </h1>
            <p>Please let us know if you have any allergies or dietary restrictions prior to ordering!</p>
          </div>

          {#each menu as food}
            <Acord
              src={food.src}
              desc={food.description}
              price={food?.price}
              title={food.title}
              active={food.includes}
              includes={food.includes}
              on:acord-toggle={select(food)}
            />
          {/each}
        </div>

        <div class="col col--image">
          <Highlighed
            title={highlight.title}
            description={highlight.description}
            price={highlight?.price}
            --url="url('{highlight.src}')"
          />
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;
  @use '../../lib/scss/1-plugins/responsive' as res;

  main {
    position: relative;
  }

  .col--acord::-webkit-scrollbar {
    appearance: none;
    border-radius: 10px;
    width: 10px;
  }
  .col--acord {
    scrollbar-width: thin;
    scrollbar-color: $color-green white;
  }
  .col--acord::-webkit-scrollbar-thumb {
    background-color: $color-green;
    border-radius: 10px;
  }

  .col {
    width: 100%;
    padding: 0 1rem;
    flex-grow: 1;
    flex-basis: 50%;

    &--acord {
      display: flex;
      align-self: flex-end;
      height: 100%;
      flex-direction: column;
      overflow-y: auto;

      @include mq.media('>1000px') {
        max-height: 700px;
      }
    }

    &--image {
      @include mq.media('<1000px') {
        max-height: 350px;
      }
    }
  }

  .menu-container {
    padding: 0 1rem;
    max-width: 1140px;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    // align-items: flex-end;
    flex-wrap: wrap-reverse;
    width: 100%;
  }

  @include mq.media('<1000px') {
    .flex {
      gap: 2.5rem;
    }
    .col {
      padding: 0;
    }
  }

  .plates {
    &__heading {
      position: sticky;
      top: 0;
    }
    &__nav {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      height: 72px;
      background: rgba(0, 0, 0, 0.9);
      padding: 0 22vw;
      @include mq.media('<phone') {
        padding: 0 2em;
      }

      display: flex;
      justify-content: space-around;
      color: white;

      @include res.interpolate(font-size, 320px, 1440px, $fs-nav - 6, $fs-nav);
    }
  }
</style>
