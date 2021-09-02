<div class="bottom__bar">
    <div class="container bottom__bar__wrapper">
        <slot />
    </div>
</div>


<style lang="scss">
    @use '../../scss/0-helpers/vars' as *;
    @use '../../scss/1-plugins/responsive' as res;
    @use '../../scss/1-plugins/mquery' as mq;

    .bottom__bar {
        bottom: 0;
        right: 0;
        color: white;
        width: 100%;
        position: fixed;
        padding: 1em 0;
        background-color: $color-black-opacity;
        
        @include res.interpolate(font-size, 320px, 1440px, $fs-nav - 6, $fs-nav);
        
        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @include mq.media("<tablet") {
            justify-content: space-around;
		    padding: 0.9em 0;

            &__wrapper { justify-content: space-around; }
        }
    }
</style>