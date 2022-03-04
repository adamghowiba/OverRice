<script>
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";

  const REVIEWS = [
    "First time eating from OverRice today!!! WOW!!! DELICIOUS!!! Definitely will be back again. I had the Huli huli chicken. It came with rice, pancit, and lumpia. The chicken was moist and flavorful, the rice was hot and fluffy,",
    "I'm always a little put off by food truck food because I always assume portions are small. Over Rice proved me wrong! I did get the two meat option, but it was enough to share with someone else, & we stayed full for a couple of hours.",
    "Extremely good. I had the chicken with noodles and rice. I wish I could buy their egg rolls by the dozen.",
    "I am so happy to have found OverRice at the Lake Eola Farmer's Market, because my wife and I were looking for something delicious; but, different; and, OverRice delivered!",
  ];

  let currentReview = REVIEWS[0];
  let intervalID;
  let reviewIndex = 0;

  function resizeHeight() {

  }

  function changeReview(max = REVIEWS.length) {
    if (reviewIndex >= max) reviewIndex = 0;

    currentReview = REVIEWS[reviewIndex];

    reviewIndex += 1;
  }

  onMount(() => {
    intervalID = setInterval(() => {
      changeReview();
    }, 2500);

  });

  onDestroy(() => {
    if (intervalID) return clearInterval(intervalID);
  });
</script>

<!-- Review Section -->
<div class="review-wrap">
  <!-- <img class="review__image" src="{image}" alt="Chicken kabab"/> -->

  <div class="review">
    <div class="review__content-wrap">
      <img
        class="review__icon"
        src="/icons/quote.svg"
        alt="Green  quote icon"
      />
      <!-- TODO Add Slider -->
      {#key currentReview}
        <p in:fade={{ duration: 500 }}>
          {currentReview}
        </p>
      {/key}
      <span class="review__name">Jeff W.</span>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;

  .review {
    max-height: 300px;

    &__icon {
      max-width: 50px;
      margin: 0 auto;
    }

    &__name {
      font-size: 2.2rem;
      color: $color-green;
      font-family: $font-secondary;
    }

    &__content-wrap {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      align-items: center;
      flex-direction: column;
      position: relative;
      z-index: 20;
      color: white;
      gap: 16px;

      text-align: center;
      max-width: 80ch;
    }
  }

  .review-wrap {
    // background-image: url('/static/images/over_rice_chicken_platter.jpg');
    position: relative;
    height: 100%;
    padding: clamp(2rem, 6%, 5rem);

    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
      var(--review);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: var(--bg-pos, center);

  }
</style>
