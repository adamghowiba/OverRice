<script>
  import Footer from '$lib/components/Footer.svelte';
  import { afterUpdate } from 'svelte';
  import { page } from '$app/stores';
  import { RouteHistory } from '$lib/stores';
  import { QueryClientProvider, QueryClient } from '@sveltestack/svelte-query';

  afterUpdate(() => {
    $RouteHistory = { prev: $RouteHistory.curr, curr: $page.url.pathname };
  });

  const queryClient = new QueryClient();
</script>

<svelte:head>
  <title>Over Rice Food Truck</title>
  <link rel="stylesheet" href="https://use.typekit.net/ofn2ttu.css" />
  <link href="https://fonts.cdnfonts.com/css/pristina" rel="stylesheet" />
</svelte:head>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
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

  @include mq.media('<tablet') {
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
