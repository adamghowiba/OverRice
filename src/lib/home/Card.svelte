<script lang="ts">
  export let title: string;
  export let caption: string = null;
  export let content: string;
  export let src: string;
  export let href: string = 'https://food.google.com/chooseprovider?restaurantId=/g/11j6bqckc0&g2lbs=ADZRdktiEy5ZSrPJb7yWwcY3BreouLZXAykzRdP5ySxTXrfc99wHhwQ27Y8CzhmpnXB1GUXX-Q0myJZNifEQDEzMFw_OWksD8o83tcNH8tXFU0A2-QPF4Af2DWVBWpvOisWVYQx8R3lfHUO_VB3vKdnk_wNym98GIw%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=5XpBZIqABcOs5NoP08K8wAc&ei=5XpBZIqABcOs5NoP08K8wAc&sei=CXXLEUVtp2KHEQwWy4qJ293W&utm_campaign&utm_source=search&addressId&orderType=2&partnerId=11964329533172037388&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId';
</script>

<a {href} target="__blank" class="card">
  <img class="card__image" {src} alt={caption} />

  <div class="card__content">
    <header>
      <h4 class="card__heading">{title}</h4>
      {#if caption}
        <span class="card__caption">{caption}</span>
      {/if}
    </header>
    <p class="card__p">{content}</p>
    <!-- <a {href} target="_blank" class="card__button">Get One Now</a> -->
  </div>
</a>

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;
  @use '../scss/0-helpers/mixins' as mix;
  @use '../scss/1-plugins/mquery' as mq;

  .card__button:before {
    content: '';
    background-color: red;
    width: 0%;
    height: 1px;
    bottom: 0;
    position: absolute;
    display: block;

    transition: width 0.35s ease-out;
  }

  .card {
    border-radius: $br-tile;
    height: auto;
    max-width: 400px;
    background-color: $color-snow;
    transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s ease-out;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    // margin: 0 0.7em;
    text-decoration: none;
    

    &__image {
      width: 100%;
      height: 15em;
      object-fit: cover;
      border-radius: $br-tile $br-tile 0 0;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: clamp(1.5em, 7%, 3em);
    }

    &__heading {
      color: $color-green;
      font-size: $heading-5;
    }

    &__p {
      color: $color-heading;
    }

    &__caption {
      display: block;
      font-weight: 300;
      color: $color-heading;
      font-style: italic;
      // font-size: $fs-caption;
    }

    &__button {
      display: inline-block;
      position: relative;
      color: $color-red;

      &:hover:before {
        width: 100%;
      }
    }

    a {
      text-decoration: none;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 20px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    }

    /* X, Y, BLUR, SIZE */

    @include mq.media('<phone') {
      &__image {
        height: 10em;
      }

      &__content {
        padding: 1.3em;
      }
    }
  }
</style>
