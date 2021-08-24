<script>
    import NavBar from "./NavBar.svelte";
</script>

<header>
    <NavBar />
    <slot/>
</header>

<style lang="scss">
    header {
        position: relative;

        width: 100%;
        min-height: var(--height, 445px);
        
        background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), var(--url);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: var(--bg-pos, center);
    }
</style>