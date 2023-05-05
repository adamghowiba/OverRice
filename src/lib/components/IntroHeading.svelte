<script lang="ts">
  export let title: string = undefined;
  export let body: string;
  export let footer: string = null;
</script>

<div>
  {#if title}
    <h2>{title}</h2>
  {/if}
  <h1>{body}</h1>
  {#if footer}
    <p>{footer}</p>
  {/if}
</div>
<slot />

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;
  @use '../scss/1-plugins/mquery' as mq;

  h2,
  h1,
  p {
    --gap: 1;
    text-align: center;
    max-width: 70ch;
    margin: 0 auto;
  }

  h2 {
    font-family: 'Pristina';
    font-size: 2.3rem;
    font-weight: 400;
    line-height: 44px;

    color: $color-green;
    margin-bottom: --gap;
  }

  h1 {
    font-weight: 900;
    font-size: 3.2rem;
    line-height: 57px;
    letter-spacing: 0.02em;
    margin-bottom: calc(10px * var(--gap));
    color: $color-heading;
  }

  p {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: $color-text;
    margin-bottom: calc(23px * var(--gap));
  }

  @include mq.media('<tablet') {
    h2,
    h1,
    p {
      --gap: 0.3;
    }
    h1 {
      font-size: 2.3rem;
    }
  }
</style>
