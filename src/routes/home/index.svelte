<script lang="typescript">
    import HeroHeader from './_components/HeroHeader.svelte';
    import Card from './_components/Card.svelte'
    import Button from '$lib/components/Button.svelte'
    import About from './_components/About.svelte'
    import BottomBar from './_components/BottomBar.svelte';
    import Footer from '../../lib/components/Footer.svelte';
</script>

<HeroHeader 
    --height = "100%"
    --url = "url('/images/over_rice_chicken_kabab.jpg')"
    --bg-pos = "top"
/>

<main>
    <!-- Our Favorites (Card Section) -->
    <section class="section section--white">
        <div class="container">

            <header class="con-head">
                <h1 class="subtitle">Flavorful & Authentic</h1>
                <h2>Our Favorites</h2>
            </header>

            <!-- Cards Wrapper -->
            <div class="card-wrap">
                <Card 
                    title = "Chicken Katsu Platter"
                    caption = "Serves with french fries + drink"
                    content= "We are a restaurant on wheels, we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
                    src="images/breaded_chicken.jpg"
                />

                <Card 
                    title = "Chicken Katsu Platter"
                    caption = "Serves with french fries + drink"
                    content = "We are a restaurant on wheels, we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
                    src = "images/over_rice_lunch_special.jpg"
                />

                <Card 
                    title = "Chicken Katsu Platter"
                    caption = "Serves with french fries + drink"
                    content = "We are a restaurant on wheels, we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
                    src = "images/over_rice_lunch_combo.jpg"
                />
            </div>

        </div>
    </section>

    <!-- Call To Action  -->
    <section class="section section--cta">
        <img src="images/food_platter.jpg" alt="" class="background-image">
        <div class="overlay"></div>
        
        <div class="container">
            <h2>Serving love in the form of delicious food</h2>
            <Button href="/menu" outline>See Our Menu</Button>
        </div>
    </section>

    <!-- About Section -->
    <About />

    <!-- Review Slider Section -->
    <section class="section section--small">
        <div class="review-wrap">
            <div class="review">
                <img src="" alt="Green Quote Icon">
                <p>
                    Shannon's new suggestion for the Hawaii Five O bowl is my new favorite after seemingly hundreds
                    of All American bowls!!
                    Good stuff. Ask for their suggestions to have the right bowl made for you!
                </p>
                <span class="review__name"></span>
            </div>
        </div>
    </section>
</main>

<BottomBar />
<Footer />

<style lang="scss">
    @use '../../lib/scss/0-helpers/vars' as *;
    @use '../../lib/scss/1-plugins/mquery' as mq;
    
    .card-wrap {
        display: flex;
        flex-direction: row;
    
        @include mq.media("<606px") {
            flex-direction: column;
            padding-left: $pd-md;
            padding-right: $pd-md;
        }
        
        @include mq.media("<phone") {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
</style>