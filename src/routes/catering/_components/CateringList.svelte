<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  export let title;
  export let desc;
  export let sides;
  export let meats;
</script>

<!-- Header -->
<section class="section section--white">
  <header>
    <h2>
      {title} <span class="bold-green">(feeds up to 25)</span>
    </h2>

    <p class="catering-item-desc">
      {desc}
    </p>

    <hr />

    <!-- List Double Coulmns -->
    <div class="columns">
      <div class="col">
        <h4>Includes</h4>
        <ol>
          {#each sides as side}
            <li class="col__li">{side}</li>
          {/each}
        </ol>
      </div>

      <div class="col">
        <h4>Chose Your Meat</h4>
        <ol>
          {#each meats as meat}
            <li>{meat}</li>
          {/each}
        </ol>
      </div>
    </div>
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
    color: #6d6762;

    margin-bottom: 5px;
  }

  h4 {
    display: flex;
    flex-direction: column;
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
    .columns {
      flex-direction: column;
      align-items: center;
    }
    .col {
      margin: 1rem 0;
    }
  }
</style>
