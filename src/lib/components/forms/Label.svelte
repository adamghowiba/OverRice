<script lang="ts">
  export let id: string;
  export let placeholder: string;
  export let required: boolean = false;
</script>

<label for={id}>
  {placeholder}
  {#if required}
    <span>*</span>
  {/if}
</label>
<slot />

<style lang="scss">
  @use '../../scss/0-helpers/vars' as *;

  label {
    position: relative;
    font-family: 'le-havre';
    font-size: 1.3rem;
    font-weight: 400;

    width: max-content;
    line-height: 1.3rem;
    color: $color-heading;
    transform: translateX(10px);

    span {
      color: $color-green;
    }
  }
</style>
