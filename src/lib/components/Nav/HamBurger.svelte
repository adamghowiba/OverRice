
<script>
    import { fly } from 'svelte/transition'
    export let show = false
</script>

<button on:click class="hamburger">
    <span class="hamburger__line" class:hamburger__line--active={show}></span>
    <span class="hamburger__line" class:hamburger__line--active={show}></span>
    {#if !show}
        <span transition:fly={{ x: -25 }} class="hamburger__line"></span>
    {/if}
</button>

<style lang="scss">
    @use '../../scss/1-plugins/mquery' as mq;

    .hamburger {
        width: 25px;
        height: 25px;
        display: none;
        flex-direction: column;
        gap: 6px;
        grid-area: 1/4;
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;

        &__line {
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 14px;
            transition: transform 0.2s ease-in-out;

            &--active:nth-child(1) {
                transform: translateY(150%) rotate(45deg);
            }

            &--active:nth-child(2) {
                transform: translateY(-150%) rotate(-45deg);
            }
        }

        @include mq.media("<tablet") {
            display: flex;
            z-index: 4;
        }
    }
</style>