<script>
    import NavBar from "./NavBar.svelte";
</script>

<section>
    <NavBar />
    <slot/>
</section>

<style lang="scss">
    section {
        position: relative;

        width: 100%;
        min-height: var(--height, 445px);
        
        background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), var(--url);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: var(--bg-pos, center);
    }
</style>