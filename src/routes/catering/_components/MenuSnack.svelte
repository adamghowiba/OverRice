<script>
  export let quote = null;
</script>

<section class="section section--white">
  <div class="container">
    <header>
      <img src="/images/over_rice_lunch_combo.jpg" alt="Chicken on grill" />

      {#if quote}
        <p>{quote}</p>
      {/if}
    </header>

    <div class="card">
      <div class="card__items">
        <h2>Meat By the pound</h2>
        {#each Array(4) as item}
        <div class="item">
          <div class="item__head">
            <h4>Huli Huli Chicken</h4>
            <span>$10.99</span>
          </div>

          <p>
            An amaxing beld of hawian and fliopan flavors . Comes standard with
            one meat option but can be exhacnged for more delcious food.
          </p>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../../lib/scss/0-helpers/vars' as *;

  header {
    display: block;
    height: max(100px, 250px);
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .card {
    background-color: #FAF3ED;
    border-radius: 10px;
    padding: 3rem 0;

    &__items {
      max-width: 60%;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    
  }

  .item {
    border-bottom: 1px solid black;
    padding-bottom: 1.3rem;

    h4 {
        font-size: 20px;
        letter-spacing: 2.2px;
    }

    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    span {
      color: $color-green;
    }
  }
</style>
