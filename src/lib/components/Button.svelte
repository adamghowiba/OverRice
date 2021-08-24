<script lang="ts">
    export let outline: boolean = false
    export let href = '/'
</script>

<a {href} class="button" class:button--outlined={outline}>
    <slot/>
</a>

<style lang="scss">
    @use '../scss/0-helpers/vars' as *;
    @use '../scss/1-plugins/mquery' as mq;

    .button {
        display: inline-block;
        background-color: $color-green;
        border-radius: $br-button;
        padding: $pd-btn-y $pd-btn-x;
        max-width: 300px;
        height: max-content;
        color: $color-white;
        font-size: $fs-button;
        text-decoration: none;
    
        border: 2px solid $color-green;

        &--outlined {
            background-color: transparent;
            border: 2px solid $color-green;
            color: $color-green;
        }

        @include mq.media("<tablet") {
            padding: 0.35em 1.8em;
            font-size: $fs-nav - 2px;
            margin: 0 !important;
            width: auto;
        }
    }
</style>