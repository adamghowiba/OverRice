
<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    export let href = "/"

    export let title: string;
    export let sides: string;
    export let description: string;
    export let price: number;
</script>

<div class="highlight">
    <div class="highlight__container">
        <h1 class="highlight__title">{title}</h1>
        <h2 class="highlight__sides">{sides}</h2>
        <p class="highlight__description">{description}</p>

        <div class="highlight__buttons">
            <Button {href}>Order Now</Button>
            <a class="highlight__learn" href="/">Learn More</a>
        </div>
    </div>

    <p>{price}</p>
</div>

<style lang="scss">
    .highlight {
        position: relative;
        width: 655px;
        height: 790px;
        border-radius: 11px;
        background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.8) 0%, 
            rgba(0, 0, 0, 0.48) 47.92%, 
            rgba(0, 0, 0, 0) 100%
        ), var(--url);

        padding: 65px 65px;
    }
</style>