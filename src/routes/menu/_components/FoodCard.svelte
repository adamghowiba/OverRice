<script lang="ts">
    export let src: string;
    export let href = "/";

    export let title: string;
    export let sides: string;
    export let description: string;
    export let price: number;
    export let selected = false
</script>


<button on:click class="card" class:card--active={selected}>
    <img {src} alt={title} />

    <h1 class="card__title">{title}</h1>
    <h2 class="card__sides">{sides}</h2>
    <p class="card__description">{description}</p>
    <p class="card__pricing">${price}</p>

    <a class="card__cart" {href}>
        Buy now
    </a>
</button>
    
<style lang="scss">

    @use '../../../lib/scss/0-helpers/vars' as *;

    .card {
        width: 100vw;
        min-width: 300px;
        max-width: 480px;
        height: 142px;

        padding: 0;
        margin: 0;
        overflow: hidden;

        border-radius: 11px;
        border: none;
        text-align: left;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;

        position: relative;
        display: grid;
        grid-template-columns: 117px 1fr;
        grid-template-rows: repeat(4, min-content);
        gap: 0 24px;
        grid-template-areas: 
            "img title"
            "img sides"
            "img description"
            "img pricing";

        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            
        &:hover { outline: 2px solid rgba($color-green, 0.6); }
        &--active { outline: 2px solid $color-green; }

        img {
            grid-area: img;
            width: 100%;  
            height: 100%; 
            object-fit: cover;
        }

        &__title {
            font-family: 'Le Havre Bold';
            margin-top: 14px;
            grid-area: title; 
            font-weight: 700;
            font-size: 1.3rem;
            line-height: 27px;
            letter-spacing: 0.02em;
            color: $color-green;
        }
        
        &__sides { 
            grid-area: sides;
            margin-top: 4px;
            font-weight: 400;
            font-size: .75rem;
            line-height: 15px;
            color: $color-text;
        }
        
        &__description { 
            grid-area: description;
            margin-top: 10px;
            width: 75%;
            font-weight: 400;
            font-size: 1rem;
            line-height: 18px;
            color: $color-heading;
        }
        
        &__pricing { 
            grid-area: pricing;
            margin-top: 8px;
            margin-bottom: 14px;
            font-family: 'Le Havre Bold';
            font-size: .75rem;
            font-weight: 700;
            line-height: 15px;
            color: $color-red;
        }

        &__cart {
             // this is to hide they text, that i placed for accesability reason only
            text-indent: -9999px;

            position: absolute;
            top: 100px;
            right: 22px;

            width: 32px;
            height: 32px;
            background: $color-green var(--icon-url, url('/icons/cart.svg')) no-repeat 50% 50%;
            border-radius: 50%;
        }
    }

</style>

