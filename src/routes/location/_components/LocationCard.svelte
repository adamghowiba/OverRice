<script lang="ts">
  export let name: string;
  export let icon: string;
  export let iconYOffset: number = 0;
</script>

<div class="card">
  <img class="card__icon" src={icon} alt="icon" style:top="{iconYOffset}px" />
  <h3 class="card__title">{name}</h3>
  <p><slot /></p>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;

    &__title {
      font-size: 30px;
    }

    &__icon {
        position: relative;
    }

    p {
      max-width: 20ch;
    }
  }
</style>
