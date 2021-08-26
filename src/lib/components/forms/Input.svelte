
<script lang="ts">
    import Label from "./Label.svelte"
    export let id: string

    export let value: string | null
    export let placeholder: string
</script>

<Label {id} {placeholder}>
    <input {placeholder} {id} type="text" bind:value>
</Label>

<style lang="scss">
    @use '../../scss/0-helpers/vars' as *;

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