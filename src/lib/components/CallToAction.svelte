<script>
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";

  export let title = "Serving love in the form of delicious food";
  export let img = '/images/food_platter.jpg';
  export let button = true;
</script>

<!-- Call To Action  -->
<section class="section section--cta" style="background-image: url('{img}')">
  <!-- <img src={img} alt="Over Rice Platter Of Food" class="background-image"> -->
  <div class="overlay" />

  <div class="flex">
    <h2>{title}</h2>
    {#if button}
      <Button href="/menu" outline>See Our Menu</Button>
    {/if}
  </div>
</section>

<style>
  .flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    position: relative;
    margin: 0;
    padding: 0;
    margin-bottom: 1.5rem;
  }
  .section--cta {
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: center center;
  }
</style>
