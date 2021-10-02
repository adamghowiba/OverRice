
<script lang="ts">
    export let src: string 
    export let alt = ""

    export let name: string
    export let title: string
    export let description: string
</script>

<div class="member">
    <img {src} {alt}>
    
    <div class="member__content">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>

<style lang="scss">
    @use '../../lib/scss/0-helpers/vars' as *;

    .member {
        width: 260px;
        display: flex;
        flex-direction: column;
        gap: 19px;
    
        img {
            height: 331px;
            border-radius: 5px;
            object-fit: cover;
            object-position: left;
        }

        &__content {
            display: flex;
            flex-direction: column;
            
            h1 {
                font-family: 'le-havre';
                font-size: 1.4rem;
                line-height: 125%;
                letter-spacing: 0.02em;
                font-weight: 700;
                
                color: $color-green;
                margin-bottom: 10px;
            }
            
            h2 {
                font-size: 1.2rem;
                font-weight: 400;
                color: $color-text;
                margin-bottom: 15px;
            }

            p {
                color: $color-heading;
                font-size: 1.2rem;
                font-weight: 400;
                letter-spacing: 0.02em;
                line-height: 125%;
            }
        }
    }
</style>