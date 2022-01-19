<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let desc;
  export let src;
  export let title = 'Filipino Style Plate Lunch';
  export let price: number | string;
  export let active;
  export let includes: string[] = null;
  let s = 100;
  $: s += 100;
  let open;

  const dispatcher = createEventDispatcher();
  const mainIcon = 'plus_button.svg',
    sideIcon = 'cart.svg';

  const openAcord = (event: MouseEvent) => {
    dispatcher('acord-toggle');
    if (!active) return;

    const acord = event.currentTarget as HTMLElement;
    const acordDropdown = acord.querySelector('.dropdown') as HTMLElement;
    const acordScrollWrap = document.querySelector('.col--acord') as HTMLElement;

    if (open) {
      open = false;
      acordDropdown.style.height = `0px`;
      return;
    }

    open = true;
    acordDropdown.style.height = `${acordDropdown.scrollHeight}px`;

    if (window.innerWidth < 760) {
      acordDropdown.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };
</script>

<!-- Accordian -->
<div class="acord" on:click={openAcord}>
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

      <div class="acord__button" style="content: url(/icons/{active ? mainIcon : sideIcon})" />
    </div>

    {#if active && includes}
      <!-- Dropdown  -->
      <div class="dropdown">
        <div class="wrap">
          <ul>
            <h1>Included</h1>
            {#each includes as item}
              <li>{item}</li>
            {/each}
          </ul>
          <ul>
            <h1>Choice Of Meat <span class="red">Single Meat & Mixed Plates Available</span></h1>
            <li>Kalua Pig</li>
            <li>Huli Huli Chicken</li>
            <li>Papa's Filipino Pork Adobo</li>
            <li>Chicken Katsu</li>
          </ul>
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

    &__price {
      display: block;
      margin-top: auto;
      color: $color-red;
    }

    &__span {
      margin-bottom: 0.3rem;
      font-size: 18px;
    }
  }
  .dropdown {
    flex-direction: column;
    transition: height 0.25s ease-out;
    height: 0px;
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
