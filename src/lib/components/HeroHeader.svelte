<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    
    export let header: string
    export let breadcrumbs: string
    export let quote: string
</script>

<Header>
    <div class="contact">
        <h1 class="contact__header">{header}</h1>
        <p class="contact__breadcrumbs">{breadcrumbs}</p>
        <p class="contact__quote">{quote}</p>
    </div>
</Header>

<style lang="scss">
    @use '../scss/0-helpers/vars' as *;

    .contact {
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
        
        &__header {
            font-family: 'Le Havre';
            font-weight: normal; 
            font-size: 5.6rem;
            height: min-content;
            line-height: 0.8;
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
        }
    }
</style>