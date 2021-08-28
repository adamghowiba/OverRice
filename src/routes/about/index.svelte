<script>
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import Header from '$lib/components/HeroHeader.svelte'
    import Button from '$lib/components/Button.svelte'
    import CallToAction from '$lib/components/CallToAction.svelte'
    import IntroHeading from '$lib/components/IntroHeading.svelte'
    import ImageCard from '$lib/components/ImageCard.svelte'
</script>


<HeroHeader 
    header = 'About Us'
    breadcrumbs = "Home > About Us"
    quote = "OverRice is a Filipino & Hawaiian Food Truck that provide quality food in Orlando, Florida"
    --url = "url('/images/about.jpg')"
/>

<section class="section section--white">

    <div class="container">
        <div class="about">
            <div class="about__col about__col--content">
                <h1 class="subtitle">About Us</h1>
                <h2>Over Rice offers Hawaiian and Filipino favorites</h2>
                <p>
                    Food is an important part of everyone’s life, we are the one who provides a part of food and have specialized chefs of Filipino and Hawaiian 
                    Food. Over Rice is a Filipino & Hawaiian food truck that specializes in serving homemade delicious food. We started as a group of friends just 
                    wanting the opportunity to share our families' recipes so we can introduce them to the public and hopefully bring joy and comfort to others
                </p>
                <div class="about__flex">
                    <img src="/images/breaded_chicken.jpg" alt="Chicken comobo meal">
                    <img src="/images/breaded_chicken.jpg" alt="Chicken comobo meal">
                </div>
            </div>
    
            <div class="about__col about__col--img">
                <div class="about__image-wrap">
                    <img class="about__dots" src="/icons/image_dots.svg" alt="Green dots in the background" />
                    <img src="/images/breaded_chicken.jpg"class="about__image" alt="Chicken comobo meal">
                </div>
            </div>
        </div>
    </div>

</section>

    
    <CallToAction />

    <section class="section section--white">

        <IntroHeading title="Our Gallery" footer="We have a variety of food specialized in Filipino and Hawaiian Food" body="Wanna have a look through our Yummy Food?"/>
        <section class="section--small">
            <div class="container">
                <div class="image-card-wrap">
                    <ImageCard --rotate = "15deg" --url = "url(images/breaded_chicken.jpg)"/>
                    <ImageCard --rotate = "-15deg" --url = "url(images/over_rice_chicken_kabab.jpg)"/>
                    <ImageCard --rotate = "15deg" --url = "url(images/about.jpg)"/>
                    <ImageCard --rotate = "-15deg" --url = "url(images/food_platter.jpg)"/>
                </div>
            </div>

            <div class="section__footer">
                <h3> Our Gallery Of Cool Food</h3>
                <p>The great colection of Filipino and Hawaiian food</p>
            </div>
        </section>

    </section>



<style lang="scss">
@use '../../lib/scss/0-helpers/vars' as *;
@use '../../lib/scss/1-plugins/mquery' as mq;

.cta {
    $padding: clamp(1.5em, 5%, 4em);
        // $padding: 2em;

        padding-top: $padding;
        padding-bottom: $padding;
        color: white;
        text-align: center;

        h2 {
            margin-bottom: $pd-sm;
        }
}

.about {
    display: flex;
    gap: 5%;
    
    &__col {
        width: 50%;

    }

    &__flex {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;

        img {
            object-fit: cover;
            width: 100%;
            max-height: 153px;
            border-radius: 5px;
        }
    }

    &__col--img {
        margin-left: 1.2rem;
    }

    &__col

    &__dots {
        position: absolute;
        top: -35px;
        left: -40px;
    }

    p {
        line-height: 1.8;
    }

    &__image {
        position: relative;
        z-index: 10;

        &-wrap {
            position: relative;
            width: 100%;
        }

        width: 100%;
        height: 40em;
        object-fit: cover;
    }
}

@include mq.media('<tablet') {
    .about {
        flex-direction: column-reverse;
        gap: 3rem;

        &__col {
            width: 100%;
        }

        &__image {
            max-height: 300px;
        
        &-wrap {
            height: 100%;
        }

        height: 100%;
        object-fit: cover;
    }
    }

}

</style>