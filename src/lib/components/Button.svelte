<script lang="ts">
  export let outline: boolean = false;
  export let href = '/';
  export let form = false;
  export let newTab = false;
  export let maxWidth: string = '300px';
  export let width: string = 'auto'
</script>

{#if !form}
  <a {href} style="--maxWidth: {maxWidth}; --width: {width};" target={newTab ? '_blank' : ''} class="button" class:button--outlined={outline}>
    <slot />
  </a>
{:else}
  <button style="--maxWidth: {maxWidth}; --width: {width};" class="button" target={newTab ? '_blank' : ''} class:button--outlined={outline}>
    <slot />
  </button>
{/if}

<style lang="scss">
  @use '../scss/0-helpers/vars' as *;
  @use '../scss/1-plugins/mquery' as mq;

  .button {
    display: inline-flex;
    justify-content: center;
    background-color: $color-green;
    border-radius: $br-button;
    padding: $pd-btn-y $pd-btn-x;
    max-width: var(--maxWidth, 300px);
    width: var(--width, auto);
    height: max-content;
    color: $color-white;
    font-size: $fs-button;
    text-decoration: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    z-index: 10;

    border: 2px solid $color-green;
    transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.2s linear, color 0.2s ease-in,
      box-shadow 0.2s ease-out;

    &--outlined {
      background-color: transparent;
      border: 2px solid $color-green;
      color: $color-green;
    }

    &:hover {
      transform: translateY(-3px);
      background-color: $color-green;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 20px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
      color: white;
    }

    @include mq.media('<tablet') {
      padding: 0.35em 1.8em;
      font-size: $fs-nav - 2px;
      margin: 0 !important;
      width: auto;
    }
  }
</style>
