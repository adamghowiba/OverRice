<script lang="ts">
    export let title: string
    export let caption: string
    export let content: string
    export let src: string
</script>

<div class="card">
    <img class="card__image" {src} alt={caption}>

    <div class="card__content">
        <h4 class="card__heading">{title}</h4>
        <span class="card__caption">{caption}</span>
        <p class="card__p">{content}</p>
        <a href="/" class="card__button">Get One Now</a>
    </div>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/0-helpers/mixins' as mix;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .card__button:before {
        content: '';
        background-color: red;
        width: 0%;
        height: 1px;
        bottom: 0;
        position: absolute;
        display: block;
        
        transition: width 0.35s ease-out;
    }

    .card {
        border-radius: $br-tile;
        height: auto;
        background-color: $color-snow;
        transition: transform 0.55s cubic-bezier(0.23, 1, 0.320, 1), box-shadow 0.2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
        // margin: 0 0.7em;

        &__image {
            width: 100%;
            height: 15em;
            object-fit: cover;
            border-radius: $br-tile $br-tile 0 0;
        }

        &__content {
            padding: clamp(1.5em, 7%, 3em);
        }

        &__heading {
            color: $color-green;
            font-size: $heading-5;
        }

        &__p {
            color: $color-heading;
        }

        &__caption {
            display: block;
            font-weight: 300;
            // font-size: $fs-caption;
            margin: $pd-xs 0 $pd-md - 2 0;
        }

        &__button {
            display: inline-block;
            position: relative;
            margin-top: $pd-md;
            color: $color-red;

            &:hover:before {
                width: 100%;
            }
        }

        a {
            text-decoration: none;
        }

        &:hover {
            transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 20px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

        }


        /* X, Y, BLUR, SIZE */

        @include mq.media("<phone") {
            &__image {
                height: 10em;
            }

            &__content {
                padding: 1.3em;
            }
        }
    }

</style>