<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Header from '$lib/components/Header.svelte';

  export let height = '500px';
</script>

<Header {height}>
  <div class="hero__headings">
    <div class="text-mask">
      <h2 class="subtitle subtitle--hero">Filipino and Hawaiian food.</h2>
    </div>
    <div class="text-mask">
      <h1 class="hero__headings__h1">
        Always fresh always <br /> from the heart
      </h1>
    </div>
    <div class="text-mask">
      <p class="hero__headings__p">
        A big, bold truck with all the comforts of home. OverRice is a food truck that brings traditional Filipino and
        Hawaiian favorites together. Sharing authentic family recipes, genuine smiles, and soulful conversation.
      </p>
    </div>
    <div class="hero__headings__button-wrap">
      <Button
        href="https://food.google.com/chooseprovider?restaurantId=/g/11j6bqckc0&g2lbs=ADZRdktiEy5ZSrPJb7yWwcY3BreouLZXAykzRdP5ySxTXrfc99wHhwQ27Y8CzhmpnXB1GUXX-Q0myJZNifEQDEzMFw_OWksD8o83tcNH8tXFU0A2-QPF4Af2DWVBWpvOisWVYQx8R3lfHUO_VB3vKdnk_wNym98GIw%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=5XpBZIqABcOs5NoP08K8wAc&ei=5XpBZIqABcOs5NoP08K8wAc&sei=CXXLEUVtp2KHEQwWy4qJ293W&utm_campaign&utm_source=search&addressId&orderType=2&partnerId=11964329533172037388&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId"
        newTab
        >Order Online</Button
      >
      <Button outline href="/menu">View Menu</Button>
    </div>
  </div>
</Header>

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;
  @use '../scss/1-plugins/mquery' as mq;

  .hero__headings {
    color: white;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1100px;
    padding: 0 2em;

    &__button-wrap {
      height: max-content;
      display: flex;
      gap: 20px;
    }

    &__button-wrap :global(.button:nth-child(1)) {
      margin-right: $pd-lg;
    }

    &__h1 {
      text-transform: uppercase;
    }

    &__p {
      margin-bottom: $pd-text-body;
      letter-spacing: 1px;
      line-height: 1.5;
      max-width: 40ch;
    }

    h1 {
      text-transform: uppercase;
    }

    @include mq.media('<tablet') {
      padding: 0 1em;
    }

    @include mq.media('<phone') {
      text-align: center;

      &__button-wrap {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
