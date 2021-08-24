<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    
    export let header: string
    export let breadcrumbs: string
    export let quote: string
</script>

<Header>
    <div class="hero">
        <h1 class="hero__header">{header}</h1>
        <p class="hero__breadcrumbs">{breadcrumbs}</p>
        <p class="hero__quote">{quote}</p>
    </div>
</Header>

<style lang="scss">
    @use '../scss/0-helpers/vars' as *;
    @use '../scss/1-plugins/mquery' as mq;

    .hero {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, min-content);
        gap: 1.6rem;
        
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        text-align: center;
        color: white;
        transition: gap 0.2s ease-in-out;
        
        
        &__header {
            font-family: 'Le Havre';
            font-weight: normal; 
            font-size: 5.6rem;
            height: min-content;
            line-height: 0.8;
            white-space: nowrap;
            transition: font-size 0.2s ease-in-out;
        }

        &__breadcrumbs {
            font-size: 1.3rem;
            font-weight: normal; 
            color: $color-green;
            height: min-content;
        }
        
        &__quote {
            font-weight: normal; 
            font-size: 1.75rem;
            height: min-content;          
            transition: font-size 0.2s ease-in-out;
        }

        @include mq.media("<tablet") {
            gap: 1rem;

            &__header {
                font-size: 4.5rem;
            }

            &__quote {
                font-size: 1.5rem;     
            }
        }
    }
</style>