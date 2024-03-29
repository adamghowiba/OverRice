<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { RouteHistory } from '$lib/stores';
  import Button from './Button.svelte';

  interface ButtonText {
    text: string;
    url: string;
    newTab: boolean;
  }

  export let header: string;
  export let quote: string;
  export let button: ButtonText = null;
  export let height = '500px';
</script>

<Header --bg-pos="center" {height}>
  <div class="hero">
    <h1 class="hero__header">{header}</h1>
    <div class="hero__breadcrumbs">
      {#if $RouteHistory.prev != null && $RouteHistory.curr != null}
        <a href={$RouteHistory.prev}>{$RouteHistory.prev.substring(1, $RouteHistory.prev.length)}</a>
        <span>></span>
        <a href={$RouteHistory.curr}>{$RouteHistory.curr.substring(1, $RouteHistory.curr.length)}</a>
      {/if}
    </div>
    <p class="hero__quote">{quote}</p>
    {#if button}
      <div class="button">
        <Button newTab={button?.newTab} href={button.url}>{button.text}</Button>
      </div>
    {/if}
  </div>
</Header>

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;
  @use '../scss/1-plugins/mquery' as mq;

  .hero {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    gap: 0.5rem;

    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    color: white;
    max-width: 500px;

    span {
      margin: 0 0.3rem;
    }

    .button {
      margin-top: 0.5rem;
    }

    &__header {
      font-family: 'le-havre';
      font-weight: normal;
      font-size: 5.6rem;
      height: min-content;
      line-height: 0.8;
      transition: font-size 0.2s ease-in-out;
    }

    &__breadcrumbs {
      font-size: 1.3rem;
      font-weight: normal;
      color: $color-green;
      height: min-content;

      a {
        color: inherit;
        text-decoration: none;
        text-transform: capitalize;

        &:visited {
          color: inherit;
        }
      }
    }

    &__quote {
      font-weight: normal;
      font-size: 1.75rem;
      height: min-content;
      transition: font-size 0.2s ease-in-out;
    }

    @include mq.media('<tablet') {
      gap: 1rem;

      &__header {
        font-size: 4.5rem;
      }

      &__quote {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 424px) {
    .hero {
      width: 300px;
    }
  }
</style>
