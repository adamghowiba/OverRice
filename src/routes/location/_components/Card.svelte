
<script lang="ts">
    export let src = "/images/Stock-flordia.png";
    export let alt: string;
    export let active = false

    export let day: string
    export let location: string
    export let times: string = "Call for time"

    const onError = () => {
        src = "/images/Stock-flordia.png"
    }
</script>

<div 
    on:click 
    class="card" 
    class:card--active={active}
>

    <!-- <img on:error={onError} class="card__thumbnail" {src} {alt}> -->

    <div class="card__content">
        <h1>{day}</h1>
        
        <ul>
            <li style="--url: url('/icons/small_location.svg');">{location}</li>
            <li style="--url: url('/icons/small_clock.svg');">{times}</li>
        </ul>

        <a href="https://maps.google.com/?q={location}" style="--url: url('/icons/small_compass.svg');">
            Get Direction
        </a>
    </div>

    <button class="heart" />

</div>

<style lang="scss">
    
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .card {
        position: relative;
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: 1fr;
        padding: 16px 0 16px 17px;
        gap: 30px;

        @include mq.media ( "<tablet" ) {
            gap: 15px;
        }
        
        width: 100%;
        // height: min-content;
        
        border: 2px solid white;
        border-radius: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        
        
        background: white;
        transition: border-color 0.1s ease-in-out;

        &__thumbnail {
            width: 112px;
            height: 108px;
            border-radius: 10px;
            place-self: center;
        }

        &:hover { border-color: rgba($color-green, 0.6); }

        &--active, &--active:hover { border-color: $color-green; }

        &__content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: min-content 1fr min-content;
            height: 100%;

            h1, li, a { text-align: left; }

            h1 {
                color: $color-green;
                font-size: 1.3rem;
                text-transform: capitalize;
            }

            ul {
                align-self: center;
                display: flex;
                flex-direction: column;
                gap: 13px;
            }

            li {
                position: relative;
                color: $color-text; 
                font-size: 1rem;
                font-weight: 400;
                
                margin-left: 15px;
                &::before {
                    content: '';
                    position: absolute;
                    top: 45%;
                    left: -15px;
                    transform: translateY(-50%);
                    background: var(--url);
                    background-repeat: no-repeat;
                    background-position: center;

                    width: 12px;
                    height: 12px;
                }
            }

            a {
                position: relative;
                color: $color-green;
                font-size: 0.9rem;
                background: none;
                border: none;
                cursor: pointer;
                font-weight: 400;
                text-decoration: none;
                width: max-content;

                $space: 20px;
                transform: translateX($space);
                &::before {
                    content: '';
                    position: absolute;
                    top: 40%;
                    left: -1 * $space;
                    transform: translateY(-50%);
                    background: var(--url);
                    background-repeat: no-repeat;
                    background-position: center;

                    width: 12px;
                    height: 12px;
                }
            }
        }

        .heart {
            position: absolute;
            right: 18px;
            top: 10px;

            width: 23px;
            height: 23px;
            border: none;
            border-radius: 50%;

            background: $color-green url('/icons/small_heart.svg');
            background-repeat: no-repeat;
            background-position: center;

            cursor: pointer;
        }
    }

</style>