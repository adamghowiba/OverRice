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

    <p class="highlight__price">${price}</p>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;

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

        &__container {
            position: absolute;
            bottom: 41px;
            left: 65px;

            color: white;
        }

        &__title {
            color: $color-green;
            font-size: 2.3rem;
            margin-bottom: 6px;
        }

        &__sides {
            font-family: 'Le Havre';
            font-size: 1rem;
            font-weight: 400;
            line-height: 20px;

            margin-bottom: 14px;
            color: #C6C6C6;
        }

        &__description {
            font-family: 'Le Havre';
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 27px;
            width: 45ch;
            margin-bottom: 27px;
        }

        &__buttons {
            display: flex;
            place-items: center;
            gap: 37px;

            a {
                text-decoration: none;
                color: white;
                &:visited { color: inherit; }
            }
        }

        &__price {
            position: absolute;
            bottom: 41px;
            right: 65px;
            color: $color-red;
            font-family: 'Le Havre Bold';
            font-weight: 700;
            font-size: 1.3rem;
            line-height: 27px;
        }
    }
</style>