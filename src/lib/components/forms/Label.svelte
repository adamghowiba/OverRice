<script lang="ts">
    export let id: string
    export let placeholder: string
</script>

<label for={id}>{placeholder}</label>
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

        &::after {
            position: absolute;
            top: 0;
            right: -1ch;
            content: '*';
            color: $color-green;

            width: min-content;
            height: min-content;
        }
    } 
</style>