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
        <span class="card__button">Get One Now</span>
    </div>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/0-helpers/mixins' as mix;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .card {
        border-radius: $br-tile;
        height: auto;
        background-color: $color-snow;

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
            display: block;
            margin-top: $pd-md;
            color: $color-red
        }

        /* X, Y, BLUR, SIZE */
        @include mix.card-shadow;
        margin: 0 0.7em;

        @include mq.media("<606px") {
            margin-bottom: $pd-xl;
        }

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