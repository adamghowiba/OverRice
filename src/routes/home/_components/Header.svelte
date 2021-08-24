<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Button from '$lib/components/Button.svelte'
</script>

<header class="hero">
    <div class="overlay"></div>

    <div class="container">
        <!-- Navigation Bar -->
        <NavBar />

        <!-- Hero Heading Wrapper -->
        <div class="hero__headings">
            <h2 class="subtitle">Filipino and Hawaiian food.</h2>
            <h1 class="hero__headings__h1"> Always fresh always <br /> from the heart</h1>
            <p class="hero__headings__p">With passion and the insipration of years living in Hawaii, later on the
                idea of OverRice was born. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, minima.
            </p>
            <div class="hero__headings__button-wrap">
                <Button>Order Online</Button>
                <Button outline href="/menu">View Menu</Button>
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    /* Hero Header */
    .hero {
        height: 100%;
        background-image: url('/images/over_rice_chicken_kabab.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hero__headings {
        color: white;
        position: relative;
        top: 53%;
        transform: translateY(-50%);
        max-width: 70ch;
        
        &__button-wrap {
            height: max-content;
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
        }

        h1 {
            text-transform: uppercase;
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