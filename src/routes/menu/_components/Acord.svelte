<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  export let desc: string;
  export let src: string;
  export let title: string;
  export let active: boolean;
  export let includes: string[] = [];
  export let price: number | string | undefined;
  export let link =
    'https://food.google.com/chooseprovider?restaurantId=/g/11j6bqckc0&g2lbs=ADZRdktiEy5ZSrPJb7yWwcY3BreouLZXAykzRdP5ySxTXrfc99wHhwQ27Y8CzhmpnXB1GUXX-Q0myJZNifEQDEzMFw_OWksD8o83tcNH8tXFU0A2-QPF4Af2DWVBWpvOisWVYQx8R3lfHUO_VB3vKdnk_wNym98GIw%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=5XpBZIqABcOs5NoP08K8wAc&ei=5XpBZIqABcOs5NoP08K8wAc&sei=CXXLEUVtp2KHEQwWy4qJ293W&utm_campaign&utm_source=search&addressId&orderType=2&partnerId=11964329533172037388&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId';

  let acordOpen: boolean = !!includes?.length;

  const mainIcon = 'plus_button.svg';
  const sideIcon = 'cart.svg';

  const dispatch = createEventDispatcher();

  const toggleAcordDropdown = (event: MouseEvent) => {
    if (!includes?.length) return;
    dispatch('acord-toggle');
    acordOpen = !acordOpen;
  };

  const handleAcordButtonCLick = () => {
    if (active) return;
    window.open(link, '_blank');
  };
</script>

<!-- Accordian -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="acord" on:click={toggleAcordDropdown}>
  <!-- Mask -->
  <div class="mask">
    <!-- Acord Head -->
    <div class="acord__head">
      <div class="acord__img-wrap">
        <img class="acord__img" {src} alt="" />
      </div>

      <div class="acord__head-content">
        <h4 class="acord__h4">{title}</h4>

        <p class="acord__span">
          {desc}
        </p>
      </div>

        <div
          class="acord__button"
          style="content: url(/icons/{active ? mainIcon : sideIcon})"
          on:click={handleAcordButtonCLick}
        />
    </div>

    {#if active && includes && acordOpen}
      <!-- Dropdown  -->
      <div class="dropdown" transition:slide={{ duration: 250 }}>
        <div class="wrap">
          <ul>
            {#if includes?.length}
              <h1>Included</h1>
              {#each includes as item}
                <li>{item}</li>
              {/each}
            {/if}
          </ul>
          {#if title !== 'Chicken Katsu' && title !== 'Soy Ginger Salmon' && title !== 'Sisig'}
            <ul>
              <h1>Choice Of Meat <span class="red">Single Meat & Mixed Plates Available</span></h1>
              <li>Kalua Pig</li>
              <li>Huli Huli Chicken</li>
              <li>Papa's Filipino Pork Adobo</li>
              <li>Chicken Katsu</li>
              {#if title == 'Filipino Style Plate Lunch'}
                <li>Contact us for more options</li>
              {/if}
            </ul>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use '../../../lib/scss/0-helpers/vars' as *;
  @use '../../../lib/scss/1-plugins/mquery' as mq;

  .acord {
    display: flex;
    background-color: white;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    transition: height 0.55s linear;
    border-radius: 10px;
    border: 1px solid $color-green;
    margin: 1rem 0;

    &__img-wrap {
      position: relative;
      width: 100%;
      flex-basis: 50%;
      min-height: 150px;

      @include mq.media('<phone') {
        height: 100%;
        width: 100%;
      }
    }

    &__img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px 0px 0px 10px;

      /* Max The Image Out While Maintaing Responsive */
      // @include mq.media('>laptop') {
      //   max-height: 150px;
      // }
      @include mq.media('<phone') {
        border-radius: 10px 10px 0px 0px;
      }
    }

    &__h4 {
      color: $color-green;
      font-size: 1.3rem;
    }
    .mask {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    &__button {
      display: flex;
      justify-content: center;
      position: absolute;
      right: 7px;
      bottom: 7px;
      align-items: center;
      background-color: $color-green;
      border-radius: 50%;
      z-index: 10;

      width: 30px;
      height: 30px;
      padding: 6px;
    }

    &__button::after {
      // content: url("/icons/plus_button.svg");
      display: block;
      width: 100%;
      height: 100%;
    }

    &__head {
      display: flex;
      z-index: 10;
      overflow: hidden;
      position: relative;

      &-content {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        flex-basis: 100%;

        @include mq.media('<phone') {
          margin: 1rem 2rem 1rem 0.5rem;
        }
      }

      @include mq.media('<phone') {
        flex-direction: column;
      }
    }

    // &__price {
    //   display: block;
    //   margin-top: auto;
    //   color: $color-red;
    // }

    &__span {
      margin-bottom: 0.3rem;
      font-size: 18px;
    }
  }
  .dropdown {
    flex-direction: column;
    transition: height 0.25s ease-out;
    z-index: 0;
    margin-left: 5%;
    max-width: 50%;
    position: relative;

    h1 {
      font-size: 1.3rem;
      margin-bottom: 0.4rem;
    }

    @include mq.media('<phone') {
      max-width: 100%;
    }
  }

  ul {
    list-style-type: disc;
  }
  li {
    margin-left: 2rem;
    margin-bottom: 0.4rem;
  }
  /* This is inteded to add padding due to weird behvior adding margin alone will cause */
  .wrap {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
  }

  .red {
    font-size: 0.8rem;
    color: $color-red;
    display: inline-block;
    margin-left: 0.2rem;
  }
</style>
