<script lang="ts">
  import Button from "$lib/components/Button.svelte";
</script>

<!-- Header -->
<section class="section section--white">
    
    <header>
      <h2>
        Hawiian Style Plate Lunch <span class="bold-green">(feeds up to 25)</span>
      </h2>
    
      <p class="catering-item-desc">
        An amaxing beld of hawian and fliopan flavors . Comes standard with one meat
        option but can be exhacnged for more delcious food.
      </p>
    
      <hr />
    
      <!-- List Double Coulmns -->
      <div class="columns">
        <div class="col">
          <h4>Includes</h4>
          <ol>
            <li class="col__li">Jasmin rice</li>
            <li class="col__li">Jasmin Pancit</li>
            <li class="col__li">Lumpia Shanghai</li>
          </ol>
        </div>
    
        <div class="col">
          <h4>Chose Your Meat</h4>
          <ol>
            <li>Jasmin rice</li>
            <li>Jasmin Pancit</li>
            <li>Lumpia Shanghai</li>
          </ol>
        </div>
      </div>
    
      <Button>Order Online</Button>
    </header>

</section>

<style lang="scss">
  @use '../../../lib/scss/0-helpers/vars' as *;
  @use '../../../lib/scss/1-plugins/mquery' as mq;

  .columns {
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style-type: disc;
    font-size: 20px;
    color: #6D6762;

    margin-bottom: 5px;
  }

  h4 {
      font-size: 30px; 
      font-weight: normal;
      margin-bottom: $pd-xs;
      color: #413934;
  }

  .col {
    text-align: left;
    margin-top: $pd-md;
    margin-bottom: $pd-lg;
  }

  header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 min(10px, 20px);
  }
  h2 {
    font-size: 40px;
  }
  .bold-green {
    font-weight: 400;
    color: $color-green;
    font-size: 25px;
  }
  .catering-item-desc {
    margin-top: $pd-sm;
    margin-bottom: $pd-md;
  }

  @include mq.media('<tablet') {

    li {
        text-align: center;
        list-style-type: none;
    }

  }

</style>
