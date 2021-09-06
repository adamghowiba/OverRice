<script lang="typescript">
    import HeroHeader from './_components/HeroHeader.svelte';
    import Card from './_components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import IntroHeading from '$lib/components/IntroHeading.svelte';
    import About from './_components/About.svelte'
    import BottomBar from '$lib/components/Bottom/Bar.svelte';
    import BottomBarItem from '$lib/components/Bottom/Item.svelte';
    import Review from './_components/Review.svelte';
    import ImageCard from '$lib/components/ImageCard.svelte';
    import ContactSection from '$lib/components/forms/ContactSection.svelte';
    import CallToAction from '$lib/components/CallToAction.svelte';
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
                    src="/images/breaded_chicken.jpg"
                />

                <Card 
                    title = "Chicken Katsu Platter"
                    caption = "Serves with french fries + drink"
                    content = "We are a restaurant on wheels, we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
                    src = "/images/over_rice_lunch_special.jpg"
                />

                <Card 
                    title = "Chicken Katsu Platter"
                    caption = "Serves with french fries + drink"
                    content = "We are a restaurant on wheels, we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
                    src = "/images/over_rice_lunch_combo.jpg"
                />
            </div>

        </div>
    </section>

    <!-- Call To Action Section -->
    <CallToAction />

    <!-- About Section -->
    <About />

    <section class="open__hours section--white">

        <!-- Review Slider Section -->
        <Review --review='url(/images/food_platter.jpg)'/>
    
        <!-- Open Hours Section -->
        <section class="section section--small">
            <IntroHeading title="Our Opening Hours" body= "OPENED FROM 7 AM TO 5 PM" footer= "OverRice is an Filipino, Hawaiian Food Truck and Takeaway in Orlando, FL">
                
                <div class="center">
                <Button href=""> Our Location </Button>
                </div>
            </IntroHeading>
        </section>
    
        <!-- Images Section -->
        <section class="section section--small">
            <div class="container">
                <div class="image-card-wrap">
                    <ImageCard --rotate = "15deg" --url = "url(/images/breaded_chicken.jpg)"/>
                    <ImageCard --rotate = "-15deg" --url = "url(/images/over_rice_chicken_kabab.jpg)"/>
                    <ImageCard --rotate = "15deg" --url = "url(/images/about.jpg)"/>
                    <ImageCard --rotate = "-15deg" --url = "url(/images/food_platter.jpg)"/>
                </div>
            </div>
        </section>

        <section class="section section--small">
            <div class="container">
        
                <div class="contact-wrap">
                    <ContactSection>
                        <Button form> Send </Button>
                    </ContactSection> 
                </div>
            </div>
        </section>

    </section>

</main>

<BottomBar>
    <BottomBarItem 
        src = "/icons/location.svg" 
        content = "Find where we are now"
        prefix = "Location"
    />
    <BottomBarItem 
        src = "/icons/phone.svg" 
        content = "(386) 416-9030"
        prefix = "Call"
    />
    <BottomBarItem 
        src = "/icons/time.svg" 
        content = "9 AM - 5 PM"
        prefix = "Hours"
    />
    <BottomBarItem 
        src = "/icons/shopping-cart.svg"
        content = "Takeout & Catering"
        prefix = "Menu"
    />
</BottomBar>

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

    .contact {
        &-wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 2.5rem;
        }
    }

    .open__hours { position: relative; }

</style>