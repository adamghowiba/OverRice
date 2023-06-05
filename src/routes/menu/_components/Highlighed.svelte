<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  export let href = 'https://food.google.com/chooseprovider?restaurantId=/g/11j6bqckc0&g2lbs=ADZRdktiEy5ZSrPJb7yWwcY3BreouLZXAykzRdP5ySxTXrfc99wHhwQ27Y8CzhmpnXB1GUXX-Q0myJZNifEQDEzMFw_OWksD8o83tcNH8tXFU0A2-QPF4Af2DWVBWpvOisWVYQx8R3lfHUO_VB3vKdnk_wNym98GIw%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=5XpBZIqABcOs5NoP08K8wAc&ei=5XpBZIqABcOs5NoP08K8wAc&sei=CXXLEUVtp2KHEQwWy4qJ293W&utm_campaign&utm_source=search&addressId&orderType=2&partnerId=11964329533172037388&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId';

  export let title: string;
  export let sides: string = null;
  export let description: string;
  export let price: number | undefined;

  $: _price = price ? price.toFixed(2) : '';
</script>

<div class="highlight">
  <div class="highlight__container">
    <h1 class="highlight__title">{title}</h1>
    {#if sides}
      <h2 class="highlight__sides">{sides}</h2>
    {/if}
    <p class="highlight__description">{description}</p>

    <div class="highlight__buttons">
      <Button newTab {href}>Order Now</Button>
    </div>
  </div>

  <p class="highlight__price">{_price ? `$${_price}` : ""}</p>
</div>

<style lang="scss">
  @use '../../../lib/scss/0-helpers/vars' as *;
  @use '../../../lib/scss/1-plugins/mquery' as mq;

  .highlight {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    padding: 41px 65px;
    color: white;

    min-width: 100%;
    max-width: 655px;
    // height: 790px;
    max-height: 100%;
    height: 700px;
    border-radius: 11px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.48) 47.92%, rgba(0, 0, 0, 0) 100%),
      var(--url);
    background-size: cover;
    background-position: 50% 50%;

    @include mq.media('<1230px') {
      padding: 41px 35px;
    }

    @include mq.media('<phone') {
      display: none;
    }

    &__title {
      color: $color-green;
      font-size: 2.3rem;
      margin-bottom: 6px;
    }

    &__sides {
      font-family: 'le-havre';
      font-size: 1rem;
      font-weight: 400;
      line-height: 20px;

      margin-bottom: 14px;
      color: #c6c6c6;
    }

    &__description {
      font-family: 'le-havre';
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 27px;
      margin-bottom: 27px;
    }

    &__buttons {
      display: flex;
      place-items: center;
      gap: 37px;
    }

    &__price {
      position: absolute;
      bottom: 41px;
      right: 65px;
      color: $color-red;
      font-family: 'le-havre';
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 27px;
    }
  }
</style>
