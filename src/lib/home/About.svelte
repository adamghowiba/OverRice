<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { onMount, tick } from "svelte";

  let gsapConfig = {
    ease: "none",
    scrollTrigger: {
      trigger: "#moving-images-section",
      start: "top bottom-=20%",
      end: "bottom-=20% top+=20%",
      scrub: 1,
    },
    duration: 1,
  };

  interface Moves {
    left: HTMLDivElement;
    right: HTMLDivElement;
  }

  let moves: Moves = {
    left: null,
    right: null,
  };

  let update;

  let refresh = false;
  onMount(async () => {
    const { gsap, ScrollTrigger } = await import("gsap/all");
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ force3D: true });

    update = async () => {
      refresh = !refresh;
      await tick();
      if (window.innerWidth <= 768) {
        gsap.to(moves.left, { ...gsapConfig, xPercent: -200 });
        gsap.to(moves.right, { ...gsapConfig, xPercent: 200 });
      } else {
        gsap.to(moves.left, { ...gsapConfig, yPercent: -50 });
        gsap.to(moves.right, { ...gsapConfig, yPercent: 50 });
      }
    };


    update();
  });


</script>
  <svelte:window on:resize={update}/>


<section id="moving-images-section" class="section section--white">
  <div class="container">
    <!-- TODO: Could be "flex" or "grid". (Will use flex for now) -->
    <!-- Column Wrapper -->
    <div class="flex">
      <!-- First Columns (Images) -->
      <div class="flex__col flex__col--images">
        {#key refresh}
          <div class="moving-images-wrap">
            <div
              id="moving-images-1"
              class="moving-images"
              bind:this={moves.left}
            >
              <img
                class="moving-images__img"
                src="/images/noodles_orlando.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/catering_food.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/food_being_plated.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/chicken_on_grill.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/best_food_orlando.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/beautfy_shot_egg_rolls.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/chicken_grill2.jpg"
                alt=""
              />
            </div>
            <div
              id="moving-images-2"
              class="moving-images"
              bind:this={moves.right}
            >
              <img
                class="moving-images__img"
                src="/images/orlando_food.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/IMG_2688.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/over_rice_chicken_kabab.jpg"
                alt=""
              />
              <img
                class="moving-images__img"
                src="/images/best_filipino_food_over_rice.jpg"
                alt=""
              />
            </div>
          </div>
        {/key}
      </div>

      <!-- Second Column (Text) -->
      <div class="flex__col">
        <h1 class="subtitle">Our Mission</h1>
        <h2>Bringing people together with great food</h2>
        <p>
          We're bringing you the best of both worlds—Hawaiian and Filipino
          street food mixed together in one food truck! Our menu is filled with
          tasty classics like huli huli chicken, pancit, and ono mac salad.
          Whether it's for an event, corporate catering, or if you're just
          looking for a great place to eat on the go -- we hope you'll stop by!
        </p>
        <Button href="/about" outline>Discover More</Button>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;
  @use '../scss/0-helpers/mixins' as mix;
  @use '../scss/1-plugins/mquery' as mq;

  p {
    margin-top: $pd-sm;
    margin-bottom: $pd-md;
    line-height: 1.5;
  }

  h2 {
    text-transform: capitalize;
  }

  #moving-images-section {
    overflow: hidden;
  }

  .flex {
    display: flex;
    gap: 3rem;

    &__col {
      width: 50%;
    }
    &__col--images {
      width: 65%;
      position: relative;
    }
  }

  .moving-images {
    &-wrap {
      display: flex;
      width: auto;
      position: absolute;
    }

    &__img {
      @include mix.card-shadow;
      border-radius: $br-picture;
      margin-bottom: 1.5em;

      max-width: 280px;
      width: 100%;
      height: 200px;

      object-fit: cover;
    }
  }

  #moving-images-1 {
    margin-right: 1.5em;
    transform: translateY(-200px);
    left: 0;
  }

  #moving-images-2 {
    transform: translateY(-600px);
    right: 0;
    top: 0;
  }

  @include mq.media("<tablet") {
    .flex {
      flex-direction: column;
    }
    .flex__col {
      width: 100%;
    }
    .moving-images {
      display: flex;
      flex-direction: row;
      gap: 2rem;

      &__img {
        min-width: 150px;
        min-height: 150px;
        width: 150px;
        height: 150px;

        margin: 0;
      }
    }
    .moving-images-wrap {
      flex-direction: column;
      margin-bottom: $pd-md;
      width: 100%;
      position: relative;
    }
    #moving-images-2, #moving-images-1 {
      transform: none;
    }
    #moving-images-2 {
      transform: translateX(-700px);
      margin-top: 2rem;
    }
  }
</style>
