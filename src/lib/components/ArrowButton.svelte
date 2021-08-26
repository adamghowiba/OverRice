
<script>
    export let dark = false
    export let flipped = false
</script>

<button 
    class:dark={dark} 
    class:light={!dark} 
    class:flipped
    on:click
>
</button>

<style lang="scss">
    @use '../scss/0-helpers/vars' as *;

    button {
        width: var(--width, 40px);
        height: var(--height, 40px);
        border-radius: 50%;
        border: none;
        transform: rotate( var(--rotate, 0deg) );
        cursor: pointer;
    }

    .light { 
        background: white url('/icons/grey-arrow.svg') no-repeat; 
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-position: 60% 50%;

        &.flipped {
            filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25))
        }
    }

    .dark { background: $color-heading url('/icons/green-arrow.svg') no-repeat center; }
    
    .flipped { --rotate: 180deg }
</style>