<script lang="ts">
  import HeroHeader from '$lib/home/HeroHeader.svelte';
  import Button from '$lib/components/Button.svelte';
  import IntroHeading from '$lib/components/IntroHeading.svelte';
  import Card from '$lib/home/Card.svelte';
  import About from '$lib/home/About.svelte';
  import Review from '$lib/home/Review.svelte';
  import BottomBar from '$lib/components/Bottom/Bar.svelte';
  import BottomBarItem from '$lib/components/Bottom/Item.svelte';
  import ImageCard from '$lib/components/ImageCard.svelte';
  import ContactSection from '$lib/components/forms/ContactSection.svelte';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import { onMount } from 'svelte';
  import * as an from '$lib/animation';

  onMount(() => {
    /* Currently disabled */
    // an.setupHeaderAnimation();
  });
</script>

<HeroHeader height="100%" --url="url('/images/over_rice_chicken_kabab.jpg')" --bg-pos="top" />

<main>
  <!-- Our Favorites (Card Section) -->
  <section class="section section--white">
    <div class="container">
      <header class="con-head">
        <IntroHeading title="Flavorful & Authentic" body="Our Favorites" />
      </header>

      <!-- Cards Wrapper -->
      <div class="card-wrap">
        <Card
          title="Filipino Huli Huli Chicken"
          content="Boneless skinless chicken thighs marinated overnight in our house huli huli sauce,
            grilled to perfection. Served over jasmine rice, pancit & lumpia shanghai."
          src="/images/over_rice_lunch_special.jpg"
        />

        <Card
          title="Hawaiian Chicken Katsu"
          caption="Served with rice & one side"
          content="Deep fried to golden brown perfection. A combination of a sweet and salty sauce with a crispy fried chicken cutlet. Served over white rice paired with our Ono Mac Salad"
          src="/images/breaded_chicken_over_rice.jpg"
        />

        <Card
          title="Filipino Mixed Plates"
          content="Huli Huli chicken & Papa's Filipino pork Adobo. Served over jasmine rice, pancit & lumpia shanghai"
          src="/images/catering_food.jpg"
        />
      </div>
      <div class="button">
        <Button width="400px" href="/menu" outline>Explore Menu</Button>
        <Button width="400px" href="https://food.google.com/chooseprovider?restaurantId=/g/11j6bqckc0&g2lbs=ADZRdktiEy5ZSrPJb7yWwcY3BreouLZXAykzRdP5ySxTXrfc99wHhwQ27Y8CzhmpnXB1GUXX-Q0myJZNifEQDEzMFw_OWksD8o83tcNH8tXFU0A2-QPF4Af2DWVBWpvOisWVYQx8R3lfHUO_VB3vKdnk_wNym98GIw%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=5XpBZIqABcOs5NoP08K8wAc&ei=5XpBZIqABcOs5NoP08K8wAc&sei=CXXLEUVtp2KHEQwWy4qJ293W&utm_campaign&utm_source=search&addressId&orderType=2&partnerId=11964329533172037388&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId" newTab>Order Online</Button>
      </div>
    </div>
  </section>

  <!-- Call To Action Section -->
  <CallToAction img="/images/customer_ordering.jpg" />

  <!-- About Section -->
  <About />

  <section class="open__hours section--white">
    <!-- Review Slider Section -->
    <Review --review="url(/images/chicken_on_grill.jpg)" />

    <!-- Open Hours Section -->
    <section class="section section--small">
      <header class="intro-wrap">
        <IntroHeading
          title="Our Schedule"
          body="We might be close by"
          footer="Since we're a resturant on wheels, we move around allot. We've made it easy to see our schedule."
        >
          <div class="center">
            <Button href="/location">Our Location</Button>
          </div>
        </IntroHeading>
      </header>
    </section>

    <!-- Images Section -->
    <section class="section section--small">
      <div class="container">
        <div class="image-card-wrap">
          <ImageCard --rotate="15deg" --url="url(/images/breaded_chicken.jpg)" />
          <ImageCard --rotate="-15deg" --url="url(/images/over_rice_chicken_kabab.jpg)" />
          <ImageCard --rotate="15deg" --url="url(/images/about.jpg)" />
          <ImageCard --rotate="-15deg" --url="url(/images/food_platter.jpg)" />
        </div>
      </div>
    </section>

    <section class="section section--small">
      <div class="container">
        <div class="contact-wrap">
          <ContactSection />
        </div>
      </div>
    </section>
  </section>
</main>

<BottomBar>
  <BottomBarItem
    src="/icons/location.svg"
    content="Find where we are now"
    --cursor="pointer"
    prefix="Location"
    href="/location"
  />
  <BottomBarItem
    src="/icons/phone.svg"
    content="(386) 416-9030"
    --cursor="pointer"
    prefix="Call"
    href="tel: 3864169030"
  />
  <BottomBarItem src="/icons/shopping-cart.svg" content="Menu" --cursor="pointer" prefix="Menu" href="/menu" />
</BottomBar>

<style lang="scss">
  @use '../lib/scss/0-helpers/vars' as *;
  @use '../lib/scss/1-plugins/mquery' as mq;

  .button {
    display: flex;
    gap: 2rem;
    margin-top: 4em;
    justify-content: center;
  }

  .card-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 2rem;

    @include mq.media('<800px') {
      grid-template-columns: 1fr;
      padding-left: $pd-md;
      padding-right: $pd-md;
    }

    @include mq.media('<phone') {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .contact {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 2.5rem;
    }
  }

  .open__hours {
    position: relative;
  }

  .intro-wrap {
    max-width: 90ch;
    margin: 0 auto;
  }
</style>
