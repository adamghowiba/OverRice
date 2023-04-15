<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  interface Reviews {
    review: string;
    name: string;
  }

  const REVIEWS: Reviews[] = [
    {
      review:
        'First time eating from OverRice today!!! WOW!!! DELICIOUS!!! Definitely will be back again. I had the Huli huli chicken. It came with rice, pancit, and lumpia. The chicken was moist and flavorful, the rice was hot and fluffy,',
      name: 'Leilani B.',
    },
    {
      review:
        "I'm always a little put off by food truck food because I always assume portions are small. Over Rice proved me wrong! I did get the two meat option, but it was enough to share with someone else, & we stayed full for a couple of hours.",
      name: 'Alexis T.',
    },
    {
      review:
        "The first time I tried OverRice was at the downtown farmer's market at Lake Eola. The staff was super nice and friendly. I got the pork adobo meal and it was delicious- juicy meat, awesome flavor, and nice crispy lumpia rolls.",
      name: 'Lisa S.',
    },
    {
      review:
        "It's about time I share this truck with the world! My sister introduced me to the Over Rice truck many years ago and even though she's since moved to Chicago this is ALWAYS on the hit list when she comes home.",
      name: 'Sasha S.',
    },
  ];

  let reviewIndex = 0;
  let intervalID: NodeJS.Timer = undefined;
  let currentReview = REVIEWS[0];

  function changeReview(index: number) {
    if (index >= REVIEWS.length) index = 0;

    reviewIndex = index;
    currentReview = REVIEWS[index];
  }

  const onMouseEnter = () => {
    if (!intervalID) return;
    clearInterval(intervalID);
  };

  const onMouseLeave = () => {
    if (!intervalID) return;
    startReviewCycle();
  };

  const startReviewCycle = () => {
    intervalID = setInterval(() => {
      changeReview(++reviewIndex);
    }, 3500);
  };

  onMount(() => {
    startReviewCycle();

    return () => {
      if (intervalID) return clearInterval(intervalID);
    };
  });
</script>

<!-- Review Section -->
<div class="review-wrap" on:mouseleave={onMouseLeave} on:mouseenter={onMouseEnter}>
  <!-- <img class="review__image" src="{image}" alt="Chicken kabab"/> -->

  <div class="review">
    <div class="review__content-wrap">
      <img class="review__icon" src="/icons/quote.svg" alt="Green  quote icon" />
      {#key currentReview}
        <p in:fade={{ duration: 500 }}>
          {currentReview.review}
        </p>
        <span class="review__name">{currentReview.name}</span>
      {/key}
    </div>
    <div class="controls">
      {#each REVIEWS as _, index}
        <div class="controls__circle" class:active={index === reviewIndex} on:click={() => changeReview(index)} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;

  .controls {
    display: flex;
    justify-content: center;
    gap: 1rem;

    &__circle {
      margin-top: 20px;
      width: 40px;
      height: 11px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }

    .active {
      background-color: $color-green;
      border: 1px solid $color-green;
    }
  }

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

    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), var(--review);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: var(--bg-pos, center);
  }
</style>
