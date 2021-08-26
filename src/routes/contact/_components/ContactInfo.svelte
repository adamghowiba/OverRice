<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<div class="contact__info">
    <img {src} {alt}>
    <h1>
        <slot/>
    </h1>
</div>

<style lang="scss">
    .contact__info {
        display: flex;
        flex-direction: column;
        gap: 30px;

        img {
            height: 50px;
        }

        h1 {
            font-size: 1.3rem;
            letter-spacing: 0.02em;
            line-height: 125%;
            text-align: center;
        }
    }
</style>