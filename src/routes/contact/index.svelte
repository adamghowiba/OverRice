<script>
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import IntroHeading from '$lib/components/IntroHeading.svelte';
</script>

<HeroHeader 
    header = 'Contact Us'
    breadcrumbs = "Home > Contact Us"
    quote = "OverRice team is always available to answer your questions"
    --url = "url('/images/contact.jpg')"
    --bg-pos = "0 38%"
/>

<main class="contact">
    <IntroHeading 

    />

</main>

<style lang="scss">
    .contact {
        width: 100%;
        min-height: 1060px;
    }
</style>