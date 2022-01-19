<script lang="ts">
  export let src: string;
  export let content: string;
  export let prefix: string;

  export let href: string = null;
</script>

{#if href === null}
  <div class="bottom__bar__item" on:click>
    <img class="bottom__bar__icon" {src} alt="Green Clock Icon" />
    <span class="text text--nav text--bold">{content}</span>
    <span class="text text--nav text--bold hide--mobile">{prefix}</span>
  </div>
{:else}
  <a {href} class="bottom__bar__item" on:click>
    <img class="bottom__bar__icon" {src} alt="Green Clock Icon" />
    <span class="text text--nav text--bold">{content}</span>
    <span class="text text--nav text--bold hide--mobile">{prefix}</span>
  </a>
{/if}

<style lang="scss">
  @use '../../scss/0-helpers/vars' as *;
  @use '../../scss/1-plugins/mquery' as mq;

  .text {
    position: relative;
    
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      background-color: $color-green;
    
    transition: transform 0.25s ease-out;
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }

  .bottom__bar {
    &__item {
      cursor: var(--cursor, default);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__icon {
      margin-right: $pd-sm;
    }

    @include mq.media("<tablet") {
      &__item {
        flex-direction: column;
      }

      &__icon {
        margin: 0 0 $pd-xs - 3 0;
        max-width: 20px;
      }

      &__item {
        .hide--mobile {
          display: block;
        }

        .text:not(.hide--mobile) {
          display: none;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
