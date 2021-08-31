<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import { to } from '$lib/actions/gsap'
    import { onMount } from "svelte";

    let gsapConfig = {
        ease: "none",
        scrollTrigger: {
            trigger: "#moving-images-section",
            start: "top center",
            end: "+=150%",
            scrub: 1,
        },
        duration: 1,
    }

    let width: null | number;
    onMount( () => {
        width = window.innerWidth
        window.addEventListener('resize', () => {
            width = window.innerWidth
        } )
    } )

</script>

<section id="moving-images-section" class="section section--white">
    <div class="container">
        <!-- TODO: Could be "flex" or "grid". (Will use flex for now) -->
        <!-- Column Wrapper -->
        <div class="flex">
            <!-- First Columns (Images) -->
            <div class="flex__col flex__col--images">
                {#key width > 768}                    
                    <div class="moving-images-wrap">
                        <div 
                            id="moving-images-1" 
                            class="moving-images"
                            use:to={ width > 768 ? { ...gsapConfig, yPercent: "-=100" } : { ...gsapConfig, xPercent: "-=200" } }
                        >
                            <img class="moving-images__img" src="/images/over_rice_chicken_platter.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_lunch_combo.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_lunch_combo.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_chicken_platter.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_lunch_combo.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_chicken_platter.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_lunch_combo.jpg" alt="">
                        </div>
                        <div 
                            id="moving-images-2" 
                            class="moving-images"
                            use:to={ width > 768 ? { ...gsapConfig, yPercent: "+=100" } : { ...gsapConfig, xPercent: "+=200" } }
                        >
                            <img class="moving-images__img" src="/images/over_rice_chicken_kabab.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_pork_bowl.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_chicken_kabab.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_chicken_kabab.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_pork_bowl.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_chicken_kabab.jpg" alt="">
                            <img class="moving-images__img" src="/images/over_rice_pork_bowl.jpg" alt="">
                        </div>
                    </div>
                {/key}
            </div>

            <!-- Second Column (Text) -->
            <div class="flex__col">
                <h1 class="subtitle">Welcome To</h1>
                <h2>Authentically Delicious Filipino Food</h2>
                <p>
                    Over Rice is a Filipino & Hawaiian food truck that specializes in serving homemade delicious
                    food. We started as a group of friends just wanting the opportunity to share our families'
                    recipes so we can introduce them to the public and hopefully bring joy and comfort to others
                </p>
                <Button outline>Discover More</Button>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/0-helpers/mixins' as mix;
    @use '../../../lib/scss/1-plugins/mquery' as mq;

    .flex {
        display: flex;
        gap: 1rem;

        &__col {
            width: 50%;
        }
        &__col--images {
            width: 65%;
        }
    }

    .moving-images {
        &-wrap {
            display: flex;
            width: 50%;
            position: absolute;

        }

        &__img {
            @include mix.card-shadow;
            border-radius: $br-picture;
            margin-bottom: 1.5em;
            
            max-width: 280px;
            width: 100%;
            height: 200px;
            
            object-fit: cover;
        }
    }

    #moving-images-1 {
        margin-right: 1.5em;
        transform: translateY(-20%);
        left: 0;
    }

    #moving-images-2 {
        transform: translateY(-80%);
        right: 0;
    }

    @include mq.media('<tablet') {
        .flex {
            flex-direction: column;
        }
        .flex__col {
            width: 100%;
        }
        .moving-images {
            display: flex;
            flex-direction: row;
            gap: 2rem;

            &__img {
                min-width: 150px;
                min-height: 150px;
                width: 150px;
                height: 150px;
                
                margin: 0;
            }
        }
        .moving-images-wrap {
            flex-direction: column;
            margin-bottom: $pd-md;
            position: relative;
        }
        #moving-images-2 {
            transform: translateX(-100px);
        }
    }


</style>