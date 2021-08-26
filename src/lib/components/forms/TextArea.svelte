<script lang="ts">
    import Label from "./Label.svelte"
    export let id: string

    export let value: string | null
    export let placeholder: string
    export let rows: number = 10
</script>

<Label {id} {placeholder}>
    <textarea {id} {placeholder} {rows} bind:value />
</Label>

<style lang="scss">
    @use '../../scss/0-helpers/vars' as *;
    textarea {
        background: transparent;
        border: 1px solid $color-text;
        border-radius: 5px;
        padding: 8px;
        resize: vertical;

        &:focus {
            outline: none;
            border-color: $color-green;
        }
    }
</style>