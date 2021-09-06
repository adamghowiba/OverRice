<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Header from '$lib/components/Header.svelte'
</script>

<Header>
    <div class="hero__headings">
        <div class="text-mask">
            <h2 class="subtitle subtitle--hero">Filipino and Hawaiian food.</h2>
        </div>
        <div class="text-mask">
            <h1 class="hero__headings__h1"> Always fresh always <br /> from the heart</h1>
        </div>
        <div class="text-mask">
            <p class="hero__headings__p">With passion and the insipration of years living in Hawaii, later on the
                idea of OverRice was born. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, minima.
            </p>
        </div>
        <div class="hero__headings__button-wrap">
            <Button>Order Online</Button>
            <Button outline href="/menu">View Menu</Button>
        </div>
    </div>
</Header>


<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .hero__headings {
        color: white;
        position: absolute;
        top: 53%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 1100px;
        padding: 0 2em;
        

        
        &__button-wrap {
            height: max-content;
            display: flex;
            gap: 20px;
        }

        &__button-wrap :global(.button:nth-child(1)) {
            margin-right: $pd-lg;
        }

        &__h1 {
            text-transform: uppercase;
        }

        &__p {
            margin-bottom: $pd-text-body;
            letter-spacing: 1px;
            line-height: 1.5;
            max-width: 40ch;
        }

        h1 {
            text-transform: uppercase;
        }

        @include mq.media("<tablet") {
            padding: 0 1em;

        }

        @include mq.media("<phone") {
            text-align: center;

            &__button-wrap {
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>

