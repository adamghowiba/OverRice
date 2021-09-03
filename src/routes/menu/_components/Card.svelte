
<script lang="ts">
    import { afterUpdate } from "svelte";
    
    export let src: string;
    export let title: string;
    export let sides: string;
    export let description: string;
    export let price: number;
    export let active = false;

    $: priceFixed = price.toFixed(2)

    let bodyWrapper: HTMLDivElement;
    let head: HTMLDivElement;

    let bodyHeight: number;
    afterUpdate ( () => {
        const { height: HHeight } = getComputedStyle( head );
        const { height: BHeight } = getComputedStyle( bodyWrapper );

        bodyHeight = parseInt( HHeight ) + parseInt( BHeight )
    } )
</script>

<button on:click class="plate__item" class:plate__item--active={active} style="--active-height: {bodyHeight}px">
    <div class="plate__item__head" bind:this={head}>
        <img class="plate__item__head__thumbnail" {src} alt="food thumbnail">
        <div class="plate__item__head--wrapper">
            <h1 class="plate__item__head__title">{title}</h1>
            <p class="plate__item__head__sides">{sides}</p>
            <p class="plate__item__head__description">{description}</p>
            <p class="plate__item__head__price">${priceFixed}</p>

            <button class="plate__item__head__action">
                <slot name="head_action" />
            </button>
        </div>
    </div>

    <div class="plate__item__body--wrapper" bind:this={bodyWrapper}>
        <slot name="body" />
    </div>
</button>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .plate__item {
        display: flex;
        flex-direction: column;

        width: 100%;
        $default-height: 142px;
        height: var(--height, $default-height);
        box-sizing: border-box;

        padding: 0;
        margin: 0;
        
        border: none;
        border-radius: 11px;
        overflow: hidden;

        transition: height 0.2s ease-in-out;

        &__head {
            display: flex;
            gap: 24px;
            height: $default-height;

            transition: gap 0.2s ease-in-out;
            @include mq.media("<400px") { gap: 10px; }

            &__thumbnail {
                width: 117px;
                height: $default-height;
                transition: width 0.2s ease-in-out;

                @include mq.media("<400px") { width: 93px; }
            }

            &--wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                padding: 14px 0;
                text-align: left;
            }

            &__title { 
                font-size: 1.3rem;
                color: $color-green; 
                margin-bottom: 8px;

                @include mq.media("<400px") { font-size: 1.1rem; }
            }
            
            &__sides { 
                @include mq.media("<560px") { display: none; }
                
                font-size: .75rem; 
                font-weight: 400;
                color: $color-text;

                width: 75%;
                margin-bottom: 8px;
            }
            
            &__description {                 
                font-size: 1rem; 
                font-weight: 400;
                color: $color-heading;

                width: 75%;
                margin-bottom: 14px;

                @include mq.media("<400px") { width: 85%; }
            }

            &__price { 
                position: absolute;
                bottom: 10px;
                left: 0;

                font-size: .75rem;
                font-weight: 700;
                color: $color-red;
            }

            &__action {
                display: grid;
                place-content: center;

                position: absolute;
                bottom: 10px;
                right: 10px;

                --action-dimentions: 32px;
                width: var(--action-dimentions);
                height: var(--action-dimentions);

                border-radius: 50%;
                border: none;
                cursor: pointer;

                background: $color-green;
            }
        }

        border: 2px solid rgba($color-green, 0.0);
        &:hover { border-color: rgba($color-green, 0.6); }

        &--active {
            height: var(--active-height, $default-height); 
            border-color: $color-green; 
        }
    }
</style>