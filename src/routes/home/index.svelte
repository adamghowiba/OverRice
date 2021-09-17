<script lang="typescript">
  import HeroHeader from "./_components/HeroHeader.svelte";
  import Card from "./_components/Card.svelte";
  import Button from "$lib/components/Button.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import About from "./_components/About.svelte";
  import BottomBar from "$lib/components/Bottom/Bar.svelte";
  import BottomBarItem from "$lib/components/Bottom/Item.svelte";
  import Review from "./_components/Review.svelte";
  import ImageCard from "$lib/components/ImageCard.svelte";
  import ContactSection from "$lib/components/forms/ContactSection.svelte";
  import CallToAction from "$lib/components/CallToAction.svelte";
  import { onMount } from "svelte";
  import * as an from "$lib/animation";

  onMount(() => {
    an.setupHeaderAnimation();
  });
</script>

<HeroHeader
  --height="100%"
  --url="url('/images/over_rice_chicken_kabab.jpg')"
  --bg-pos="top"
/>

<main>
  <!-- Our Favorites (Card Section) -->
  <section class="section section--white">
    <div class="container">
      <header class="con-head">
        <IntroHeading title="Falvorful & Authentic" body="Our Favorites" />
      </header>

      <!-- Cards Wrapper -->
      <div class="card-wrap">
        <Card
          title="Huli Huli Chicken Platter"
          caption="Served with rice & one side"
          content="Boneless skinless chicken thighs marinated overnight in our house huli huli sauce,
          grilled to perfection. Served over a bed of white rice paired with our Mac Salad"
          src="/images/chicke_over_rice.jpg"
        />

        <Card
          title="Chicken Katsu Platter"
          caption="Served with rice & one side"
          content="Deep fried to golden brown perfection. A combination of a sweet and salty sauce with a crispy fried chicken cutlet. Served over a bed of white rice paired with our Mac Salad"
          src="/images/breaded_chicken_over_rice.jpg"
        />

        <Card
          title="Kalua Pig Platter"
          caption="Served with rice & one side"
          content="Pork shoulder seasoned w/ hawaiian sea salt wrapped in banana leaves and roasted for 9 hrs. Served over a bed of white rice paired with our Mac Salad"
          src="/images/pork_over_rice.jpg"
        />
      </div>
    </div>
  </section>

  <!-- Call To Action Section -->
  <CallToAction img="/images/owner_serving_customer.jpg"/>

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
          footer="Since we're a resturant on wheels, we move around alot. We've made it easy to see our schedule."
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
          <ImageCard
            --rotate="15deg"
            --url="url(/images/breaded_chicken.jpg)"
          />
          <ImageCard
            --rotate="-15deg"
            --url="url(/images/over_rice_chicken_kabab.jpg)"
          />
          <ImageCard --rotate="15deg" --url="url(/images/about.jpg)" />
          <ImageCard --rotate="-15deg" --url="url(/images/food_platter.jpg)" />
        </div>
      </div>
    </section>

    <section class="section section--small">
      <div class="container">
        <div class="contact-wrap">
          <ContactSection>
            <Button form>Send</Button>
          </ContactSection>
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
  <BottomBarItem
    src="/icons/time.svg"
    content="9 AM - 5 PM"
    prefix="Hours"
    href="/contact"
  />
  <BottomBarItem
    src="/icons/shopping-cart.svg"
    content="Menu"
    --cursor="pointer"
    prefix="Menu"
    href="/menu"
  />
</BottomBar>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;

  .card-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 2rem;

    @include mq.media("<800px") {
      grid-template-columns: 1fr;
      padding-left: $pd-md;
      padding-right: $pd-md;
    }

    @include mq.media("<phone") {
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
