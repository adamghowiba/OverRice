<script>
  import Footer from '$lib/components/Footer.svelte';
  import { afterUpdate, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { RouteHistory } from '$lib/stores';
  import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
  import Alert from '$lib/components/Alert.svelte';

  const PREVIOUS_NOTFICATION_LOCAL_KEY = 'NOTFICATION-CLOSE-COUNT';
  const NOTFICATION_LOCAL_KEY = 'NOTFICATION-CLOSE-COUNT-v2';
  const MAX_NOTFICATION_CLOSED_COUNT = 5;
  let notficationClosed = true;

  afterUpdate(() => {
    $RouteHistory = { prev: $RouteHistory.curr, curr: $page.url.pathname };
  });

  const handleCloseNotfication = () => {
    const notficationCloseCount = +localStorage.getItem(NOTFICATION_LOCAL_KEY);

    localStorage.setItem(NOTFICATION_LOCAL_KEY, JSON.stringify(notficationCloseCount + 1));

    notficationClosed = true;
  };

  onMount(() => {
    localStorage.removeItem(PREVIOUS_NOTFICATION_LOCAL_KEY)
    const notficationCloseCount = +localStorage.getItem(NOTFICATION_LOCAL_KEY);

    if (notficationCloseCount <= MAX_NOTFICATION_CLOSED_COUNT) notficationClosed = false;
  });

  const queryClient = new QueryClient();
</script>

<svelte:head>
  <title>Over Rice Food Truck</title>
  <link rel="stylesheet" href="https://use.typekit.net/ofn2ttu.css" />
  <link href="https://fonts.cdnfonts.com/css/pristina" rel="stylesheet" />
</svelte:head>

{#if !notficationClosed}
  <Alert on:click={handleCloseNotfication}
    >See our updated
    <a class="link" href="http://overricecfl.com/location">location & hours</a>
  </Alert>
{/if}

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

  .link {
    color: white;
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
