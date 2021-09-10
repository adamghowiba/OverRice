<script lang="ts">
    export let price: number
    export let content: string
    export let options: string[] = []

    $: _options = options.join(', ')
</script>

<div>
    <h2>Catering</h2>
    <h1>{price}$ Per Person</h1>
    <p class="content">{content}</p>
    <p class="options">{_options}</p>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/_vars.scss' as *;

    div {
        max-width: 420px;
        padding: 43px 35px 43px 37px;
        font-size: 1.3rem;
        background: white;
        border-radius: 11px;
        letter-spacing: 0.02em;

        display: flex;
        flex-direction: column;
        gap: 20px;
        
        h2 {
            font-family: 'Pristina';
            color: $color-green;
            font-size: 1.3rem;
            font-weight: 400;
        }

        h1 {
            font-family: 'le-havre', sans-serif;
            font-size: 37.9px;
            color: $color-heading;
            line-height: 37.9px;
        }

        p { 
            font-family: 'le-havre', sans-serif;
            line-height: 24px;
            font-weight: 400;
            
            &.options {
                font-size: 1rem;
                line-height: 18px;
                color: #A1A1A1;
            }
        }
    }
</style>