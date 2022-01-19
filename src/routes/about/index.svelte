<script>
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import Header from "$lib/components/HeroHeader.svelte";
  import Button from "$lib/components/Button.svelte";
  import Member from "./Member.svelte";
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
            alt="Chicken combo meal"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<CallToAction
  title="Always fresh always from the heart"
  img="/images/IMG_2688.jpg"
/>


<section class="section section--small section--white">
  
  <div class="team">
    <div class="heading">
      <IntroHeading
        title="Our Team"
        body="The OverRice Family"
        footer="Meet the owners, Mayra and Joel. A husband and wife team dedicated to serving up some of the most delicious Fillipno and Hawaiian food they grew up with."
      />
    </div>
  
    <div class="team__members">
      <Member
        src="/images/owner_headshot.jpg"
        name="Mayra Paoner"
        title="Manager"
        description="Person behind the scene, Mayra takes care of all the little details. Making sure Joel is able to continue serving his delicious food to our customers."
      />
      <Member
        src="/images/owner_headshot_2.jpg"
        name="Joel Paoner"
        title="Kitchen Expert"
        description="Founder of OverRice, Joel started out by sharing the food he grew up with. Bringing many of the great memories, and flavors in his life into his food. Now he shares all his recpies with he's customers. Everyone has a seat at our table. "
      />
    </div>
  </div>


  <section class="section--small">
    <div class="container">
      <div class="heading-wrap">
        <IntroHeading
          title="See us grow"
          footer="Follow us on instagram to be along the tasty journey. We're always cooking up something new."
          body="Check Out Our Instagram"
        />
      </div>
      <div class="image-card-wrap">
        <ImageCard
          --rotate="15deg"
          --url="url(/images/over_rice_chicken_platter.jpg)"
        />
        <ImageCard --rotate="-15deg" --url="url(/images/mac_salad.jpg)" />
        <ImageCard --rotate="15deg" --url="url(/images/huli_chicken.jpg)" />
        <ImageCard --rotate="-15deg" --url="url(/images/chicken_grill2.jpg)" />
      </div>
      
    </div>
    <div class="section__footer">
      <h3>Support your local business by dropping us a like</h3>
      <p class="bottom-margin">I mean who doesn't enjoy seeing good food? Right</p>
      <Button href="https://www.instagram.com/overricecfl/">Follow Us</Button>
    </div>

  </section>
</section>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;
  .bottom-margin {
    margin-bottom: 1rem;
  }

  .heading {
    margin-bottom: 3rem;
    padding: 0 1rem;
  }

  .heading-wrap {
    margin-bottom: 3rem;
  }
  .about {
    display: flex;
    gap: 5%;

    &__col {
      width: 50%;
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
      gap: 0;

      &__col {
        width: 100%;
      }

      &__image {
        max-height: 300px;
        margin-bottom: 2rem;

        &-wrap {
          height: 100%;
        }

        height: 100%;
        object-fit: cover;
      }
    }
  }

  .team {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;

    &__members {
      justify-self: center;
      display: flex;
      gap: 40px;

      @include mq.media("<1200px") {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }

      @include mq.media("<600px") {
        display: flex;
        flex-direction: column;
      }
    }

    @include mq.media("<1200px") {
      margin: 0 auto;
      justify-content: center;
    }
  }
</style>
