<script>
  export let quote = null;
  export let menuItems;
  export let title = "Meat by the pound";
  export let img = "/images/over_rice_lunch_combo.jpg"
</script>

<section class="section section--white">
  <div class="container">
    <header>
      <img src="{img}" alt="Chicken on grill" />

      {#if quote}
        <p>{quote}</p>
      {/if}
    </header>

    <div class="card">
      <div class="card__items">
        <h2>{title}</h2>
        {#each menuItems as menuItem}
        <div class="item">
          <div class="item__head">
            <h4>{menuItem.title}</h4>
            <span>${menuItem.price}</span>
          </div>

          <p>
            {menuItem.desc}
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

  .section {
    padding: 4rem 0;
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
