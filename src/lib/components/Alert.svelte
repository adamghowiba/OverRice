<script lang="ts">
  import CloseIocn from './CloseIocn.svelte';
</script>

<aside class="alert">
  <p class="alert__content"><slot /></p>

  <div class="close-icon" on:click>
    <CloseIocn />
  </div>
</aside>

<style lang="scss">
  .alert {
    display: flex;
    padding: 4px 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    background-color: #9dc471;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: white;

    p {
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    &__content {
      font-size: 20px;
    }
  }

  .close-icon {
    top: 2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 2px;
    transition: background-color 0.15s linear;
    cursor: pointer;

    &:hover {
      background-color: rgba(211, 211, 211, 0.248);
    }
  }
</style>
