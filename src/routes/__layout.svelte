<script>
    import Footer from '$lib/components/Footer.svelte';
</script>

<slot />
<Footer />

<style global lang="scss">
    @use '../lib/scss/2-base/reset';
    @use '../lib/scss/2-base/global';
    @use '../lib/scss/2-base/typography';
    @use '../lib/scss/1-plugins/mquery' as mq;

    .overlay {
        background-color: rgba(0, 0, 0, 0.404);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .hide {
        &--mobile {
            display: none;
        }
    }

    @include mq.media("<tablet") {
        .flex {
            &__col {
			    padding: 0;
		    }
        }

        .container {
            padding: 0em 1em;
        }
    }
</style>