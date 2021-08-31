<script lang="ts">
    import { fly, fade } from 'svelte/transition'
    export let show = false

    const durations = {
        container: 300,
        a: 300,
    }
</script>

{#if show}
    <div 
        transition:fly|local = {{ x: 400, duration: durations.container }} 
        class="nav__menu"
    >
        <a in:fade = {{ delay: durations.a * 1,   duration: durations.a }} class="nav__menu__item" href="/home">Home</a>
        <a in:fade = {{ delay: durations.a * 1.3, duration: durations.a }} class="nav__menu__item" href="/contact">Contact Us</a>
        <a in:fade = {{ delay: durations.a * 1.6, duration: durations.a }} class="nav__menu__item" href="/about">About Us</a>
        <a in:fade = {{ delay: durations.a * 1.9, duration: durations.a }} class="nav__menu__item" href="/menu">Menu</a>
        <a in:fade = {{ delay: durations.a * 2.1, duration: durations.a }} class="nav__menu__item" href="/location">Our Location</a>
        <a in:fade = {{ delay: durations.a * 2.4, duration: durations.a }} class="nav__menu__item" href="/catering">Catering Info</a>
    </div>
{/if}

<style lang="scss">
    @use '../../scss/0-helpers/vars' as *;

    .nav__menu {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 3;

        display: flex;
        flex-direction: column;
        gap: 14px;

        width: 177px;
        height: 100vh;
        padding: 85px 30px;

        background: rgba($color-green, .9);

        &__item {
            position: relative;
            width: max-content;
            z-index: 5;


            font-family: 'Le Havre';
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.2rem;
            
            color: white;
            text-decoration: none;
            &:visited { color: white; }

            &::after {
                content: '';
                position: absolute;
                bottom: -10%;
                left: 50%;
                
                width: 100%;
                height: 2px;
                background: white;
                
                transform: translateX(-50%) scaleX(var(--scale-x));
                transition: transform 0.2s ease-in-out;
            }

            --scale-x: 0%;
            &:hover { --scale-x: 100%; }
        }
    }
</style>