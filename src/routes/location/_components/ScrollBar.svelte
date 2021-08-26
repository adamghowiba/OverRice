
<script lang="ts">
    import { Motion, useMotionValue } from 'svelte-motion'
    import { scroll } from '$lib/stores'
    $: _y = useMotionValue($scroll)

    let isDragging = false
    
    const onDrag = () => {
        isDragging = true
        $scroll = $_y
    }

    const onDragEnd = () => isDragging = false
    

</script>

<div 
    class="progress"
    aria-label="scrollbar"
>
    <Motion 
        let:motion 
        drag="y"
        style = {{ y: _y }}
        dragConstraints={{ top: 0, bottom: 300 }} 
        dragMomentum={false}
        dragElastic={false}
        {onDrag}
        {onDragEnd}
    >
        <div use:motion class="progress__bar" class:progress__bar--active={isDragging} />    
    </Motion>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *; 
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .progress {
        position: relative;
        width: 16px;
        height: 700px;
        border-radius: 11px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        background: #F1F1F1;

        &__bar {
            content: '';
            position: absolute;
            width: 6px;
            height: calc(var(--height, 100%) - 12px);
            top: 6px;
            left: 30%;
            background: $color-green;
            border-radius: 11px;
            user-select: none;

            &:hover { background: rgb(142, 177, 101); }
            &--active, &--active:hover { background: rgb(118, 148, 85); }
        }

        @include mq.media("<tablet") {
            display: none;
        }
    }
</style>