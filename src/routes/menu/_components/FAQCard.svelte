
<script lang="ts">
    export let title: string
    export let description: string
</script>

<div class="card">
    <div class="card__icon" />
    <h1 class="card__heading">{title}</h1>
    <p class="card__description">{description}</p>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;

    .card {
        display: flex;
        flex-direction: column;
    
        width: var(--width, 246px);
        height: var(--height, 307px);

        padding: 37px 26px;
        background: #DFE9D4;
        border-radius: 11px;
        place-items: center;

        &__icon {
            width: 56px;
            min-height: 56px;
            border-radius: 50%;
            background: $color-green var(--icon);
            background-position: center;
            background-repeat: no-repeat;
            margin-bottom: 27px;
        }

        &__heading {
            font-weight: 700;
            color: $color-heading;
            text-align: center;
            font-size: 1.3rem;
            line-height: 28px;
            letter-spacing: 0.02;
            margin-bottom: 14px;       
        }

        &__description {
            font-weight: 400;
            color: $color-text;
            font-size: 1rem;
            line-height: 24px;
            text-align: center;
        }
    }
</style>