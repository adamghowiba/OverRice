<script lang="ts">
  import Label from './Label.svelte';

  type InputType = 'text' | 'date' | 'time' | 'email' | 'phone';

  export let id: string;
  export let value: string | null;
  export let placeholder: string = null;
  export let label: string = placeholder;
  export let maxWidth: string = 'none';
  export let type: InputType = 'text';
  export let required: boolean = false;
</script>

<div class="wrapper" style="--maxWidth: {maxWidth}">
  <Label {id} placeholder={label} {required}>
    {#if type == 'text'}
      <input {placeholder} {id} type="text" {required} bind:value />
    {/if}

    {#if type == 'date'}
      <input {placeholder} {id} type="date" {required} bind:value />
    {/if}

    {#if type == 'time'}
      <input {placeholder} {id} type="time" {required} bind:value />
    {/if}

    {#if type == 'email'}
      <input {placeholder} {id} type="email" {required} bind:value />
    {/if}

    {#if type == 'phone'}
      <input {placeholder} {id} type="tel" {required} bind:value />
    {/if}
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

  input {
    background: transparent;
    border: 1px solid $color-text;
    border-radius: 5px;
    padding: 8px;

    &:focus {
      outline: none;
      border-color: $color-green;
    }
  }
</style>
