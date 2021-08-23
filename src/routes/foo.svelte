<script lang="typescript" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = () => {
        return {
            status: 301,
            redirect: '/contact',
        }
    }
</script>