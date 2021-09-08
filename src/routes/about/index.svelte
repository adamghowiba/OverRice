<script>
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import Header from "$lib/components/HeroHeader.svelte";
  import Button from "$lib/components/Button.svelte";
  import CallToAction from "$lib/components/CallToAction.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import ImageCard from "$lib/components/ImageCard.svelte";
</script>

<HeroHeader
  header="About Us"
  quote="With the belief that good food attracts good people, we're bringing people together over rice"
  --url="url('/images/about.jpg')"
/>

<section class="section section--white">
  <div class="container">
    <div class="about">
      <div class="about__col about__col--content">
        <h1 class="subtitle">Our Story</h1>
        <h2>Real Service. Real People. Real connections.</h2>
        <p>
          OverRice was born in Orlando, Fl in 2011. Offering a combination of
          traditional Filipino and Hawaiian food. Our mission is to bring
          together classic family recipes with our passion for cooking, culture
          and service to parks, street fairs, and special events. Fresh and
          healthy scratch cooking blends classic flavors with ethnic roots to
          deliver a piece home.
        </p>
        <!-- TODO: Change end of sentance -->
      </div>

      <div class="about__col about__col--img">
        <div class="about__image-wrap">
          <img
            class="about__dots"
            src="/icons/image_dots.svg"
            alt="Green dots in the background"
          />
          <img
            src="/images/about.jpg"
            class="about__image"
            alt="Chicken comobo meal"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<CallToAction title="Always fresh always, from the heart" img="/images/IMG_2688.jpg"/>

<section class="section section--white">
  <IntroHeading
    title="Our Gallery"
    footer="We have a variety of food specialized in Filipino and Hawaiian Food"
    body="Wanna have a look through our Yummy Food?"
  />
  <section class="section--small">
    <div class="container">
      <div class="image-card-wrap">
        <ImageCard --rotate="15deg" --url="url(/images/over_rice_chicken_platter.jpg)" />
        <ImageCard
          --rotate="-15deg"
          --url="url(/images/mac_salad.jpg)" 
        />
        <ImageCard --rotate="15deg" --url="url(/images/huli_chicken.jpg)" />
        <ImageCard --rotate="-15deg" --url="url(/images/chicken_grill2.jpg)" />
      </div>
    </div>

    <div class="section__footer">
      <h3>Our Gallery Of Cool Food</h3>
      <p>The great colection of Filipino and Hawaiian food</p>
    </div>
  </section>
</section>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;

  .cta {
    $padding: clamp(1.5em, 5%, 4em);
    // $padding: 2em;

    padding-top: $padding;
    padding-bottom: $padding;
    color: white;
    text-align: center;

    h2 {
      margin-bottom: $pd-sm;
    }
  }

  .about {
    display: flex;
    gap: 5%;

    &__col {
      width: 50%;
    }

    &__flex {
      display: flex;
      gap: 1rem;
      margin: 1rem 0;

      img {
        object-fit: cover;
        width: 100%;
        max-height: 153px;
        border-radius: 5px;
      }
    }

    &__col--img {
      margin-left: 1.2rem;
    }

    &__col--content {
      margin: auto 0;
    }

    &__col &__dots {
      position: absolute;
      top: -35px;
      left: -40px;
    }

    p {
      line-height: 1.8;
    }

    &__image {
      position: relative;

      &-wrap {
        position: relative;
        width: 100%;
      }

      width: 100%;
      height: 40em;
      object-fit: cover;
    }
  }

  @include mq.media("<tablet") {
    .about {
      flex-direction: column-reverse;
      gap: 3rem;

      &__col {
        width: 100%;
      }

      &__image {
        max-height: 300px;

        &-wrap {
          height: 100%;
        }

        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
