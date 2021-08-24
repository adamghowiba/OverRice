<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import PerPerson from "./PerPerson.svelte";
</script>

<Header>
    <div>
        <PerPerson 
            price={13}
            content = "Our Standard Catering Include pletiful option of the following:"
            options = {[
                "2 Appetizers",
                "1 Salad",
                "1 Curry (Including brown rice)",
                "1 Noodle Entree"
            ]}
        />
    </div>
</Header>

<style lang="scss">
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    div {
        position: absolute;
        max-width: 1100px;
        width: 100%;
        top: 65%;
        left: 53%;
        transform: translate(-50%, -50%);

        @include mq.media("<900px") {
            left: 50%;
            max-width: max-content;
        }
    }
</style>