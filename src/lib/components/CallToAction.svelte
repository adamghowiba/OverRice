<script>
    import Button from '$lib/components/Button.svelte';

    export let title = "Serving love in the form of delicious food";
    export let button = true;
</script>

<!-- Call To Action  -->
    <section class="section section--cta">
        <img src="/images/food_platter.jpg" alt="" class="background-image">
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
</style>