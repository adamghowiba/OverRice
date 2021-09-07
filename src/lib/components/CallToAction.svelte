<script>
    import Button from '$lib/components/Button.svelte';

    export let title = "Serving love in the form of delicious food";
    export let img = "/images/food_platter.jpg";
    export let button = true;
</script>

<!-- Call To Action  -->
    <section class="section section--cta">
        <!-- <img src={img} alt="Over Rice Platter Of Food" class="background-image"> -->
        <div class="overlay"></div>
        
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
    }
    .section--cta {
        background-image: url("/images/owner_serving_customer.jpg");
        border: 1px solid --color;
        background-size: cover;
        background-attachment: fixed;
        background-position-y: bottom;
    }
</style>