<div class="quick-action">
    <div class="container quick-action-wrap">
        <div class="quick-action__block">
            <img class="quick-action__icon" src="/icons/location.svg" alt="Pin Location Icon">
            <span class="text text--nav text--bold">Find where we are now</span>
            <span class="text text--nav text--bold hide--mobile">Location</span>
        </div>
        <div class="quick-action__block">
            <img class="quick-action__icon" src="/icons/phone.svg" alt="Green Phone Icon">
            <span class="text text--nav text--bold">(386) 416-9030</span>
            <span class="text text--nav text--bold hide--mobile">Call</span>
        </div>
        <div class="quick-action__block">
            <img class="quick-action__icon" src="/icons/time.svg" alt="Green Clock Icon">
            <span class="text text--nav text--bold">9 AM - 5 PM</span>
            <span class="text text--nav text--bold hide--mobile">Hours</span>
        </div>
        <div class="quick-action__block">
            <img class="quick-action__icon" src="/icons/shopping-cart.svg" alt="Green Shopping Cart Icon">
            <span class="text text--nav text--bold">Takeout & Catering</span>
            <span class="text text--nav text--bold hide--mobile">Menu</span>
        </div>
    </div>
</div>

<style lang="scss">
    @use '..//scss/0-helpers/vars' as *;
    @use '../scss/1-plugins/responsive' as res;
    @use '../scss/1-plugins/mquery' as mq;

    .quick-action {
        bottom: 0;
        right: 0;
        color: white;
        width: 100%;
        position: fixed;
        padding: 1em 0;
        background-color: $color-black-opacity;

        @include res.interpolate(font-size, 320px, 1440px, $fs-nav - 6, $fs-nav);

        &-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__block {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__icon {
            margin-right: $pd-sm;
        }

        @include mq.media("<tablet") {
            justify-content: space-around;
		    padding: 0.9em 0;

            &__block {
                flex-direction: column;
            }

            &__icon {
                margin: 0 0 $pd-xs - 3 0;
                max-width: 20px;
            }

            &-wrap {
                justify-content: space-around;
            }

            .hide--mobile {
                display: block;
            }

            .text:not(.hide--mobile) {
                display: none;
            }
        } 
    }
</style>