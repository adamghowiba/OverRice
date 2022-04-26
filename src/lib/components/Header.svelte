<script>
    import NavBar from "./Nav/Bar.svelte";
    export let height = '500px';
</script>

<header style="--height: {height}">
    <NavBar />
    <slot/>
</header>

<style lang="scss">
    header {
        position: relative;

        width: 100%;
        min-height: var(--height, 500px);
        
        background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), var(--url);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: var(--bg-pos, center);
        // background-attachment: fixed;
    }
</style>