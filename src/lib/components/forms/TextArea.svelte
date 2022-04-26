<script lang="ts">
  import Label from './Label.svelte';
  export let id: string;

  export let value: string | null;
  export let placeholder: string;
  export let label = placeholder;
  export let rows: number = 10;
  export let maxWidth: string = 'none';
  export let required: boolean = false;
</script>

<div class="wrapper" style="--maxWidth: {maxWidth}">
  <Label {id} placeholder={label}>
    <textarea {id} {placeholder} {rows} bind:value {required} />
  </Label>
</div>

<style lang="scss">
  @use '../../scss/0-helpers/vars' as *;
  .wrapper {
    display: flex;
    width: 100%;
    gap: 8px;
    flex-direction: column;
    max-width: var(--maxWidth, 'none');
  }

  textarea {
    background: transparent;
    border: 1px solid $color-text;
    border-radius: 5px;
    padding: 8px;
    resize: vertical;
    width: 100%;

    &:focus {
      outline: none;
      border-color: $color-green;
    }
  }
</style>
