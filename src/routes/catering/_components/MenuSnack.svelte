<script>
  export let quote = null;
  export let menuItems;
  export let title = 'Meat by the pound';
  export let img = '/images/over_rice_lunch_combo.jpg';
</script>

<!-- <section class="section section--white"> -->
<div class="container">
  <header>
    <img src={img} alt="Chicken on grill" />

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
            <h4>
              {menuItem.title}
              {#if menuItem?.note}
                <i>({menuItem?.note})</i>
              {/if}
            </h4>
            <span>{menuItem.price}</span>
          </div>

          <p>
            {menuItem.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- </section> -->
<style lang="scss">
  @use '../../../lib/scss/0-helpers/vars' as *;
  @use '../../../lib/scss/1-plugins/mquery' as mq;

  header {
    position: relative;
    display: block;
    height: 200px;
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
    background-color: #faf3ed;
    border-radius: 10px;
    padding: 3rem 5rem;

    &__items {
      max-width: 600px;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    @include mq.media('<tablet') {
      padding: 3rem 1.5rem;
    }
  }

  .item {
    border-bottom: 1px solid black;
    padding-bottom: 1.3rem;

    h4 {
      font-size: 20px;
      letter-spacing: 2.2px;

      i {
        font-size: 16px;
        color: $color-green;
      }
    }

    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      gap: 1rem;
    }

    span {
      color: $color-green;
      align-self: flex-start;
    }
  }

  @include mq.media('<phone') {
    header {
      height: 150px;
    }
  }
</style>
