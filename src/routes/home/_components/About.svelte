<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import { to } from '$lib/actions/gsap.ts'
</script>

<section id="moving-images-section" class="section section--white">
    <div class="container">
        <!-- TODO: Could be "flex" or "grid". (Will use flex for now) -->
        <!-- Column Wrapper -->
        <div class="flex">
            <!-- First Columns (Images) -->
            <div class="flex__col">
                <div class="moving-images-wrap">
                    <div 
                        use:to={{
                            yPercent: "-=100",
                            ease: "none",
                            scrollTrigger: {
                              trigger: "#moving-images-section",
                              start: "top center",
                              end: "+=150%",
                              scrub: 1,
                            },
                            duration: 1,
                        }}
                        id="moving-images-1" 
                        class="moving-images"
                    >
                        <img class="moving-images__img" src="images/over_rice_chicken_platter.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_lunch_combo.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_lunch_combo.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_chicken_platter.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_lunch_combo.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_chicken_platter.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_lunch_combo.jpg" alt="">
                    </div>
                    <div 
                        use:to={{
                            yPercent: "+=100",
                            ease: "none",
                            scrollTrigger: {
                                trigger: "#moving-images-section",
                                start: "top center",
                                end: "bottom top",
                                scrub: 1
                            },
                            duration: 1,
                        }}
                        id="moving-images-2" 
                        class="moving-images"
                    >
                        <img class="moving-images__img" src="images/over_rice_chicken_kabab.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_pork_bowl.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_chicken_kabab.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_chicken_kabab.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_pork_bowl.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_chicken_kabab.jpg" alt="">
                        <img class="moving-images__img" src="images/over_rice_pork_bowl.jpg" alt="">
                    </div>
                </div>
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

    .flex {
        display: flex;

        &__col {
            padding: 0 $pd-lg;
            width: 50%;
        }
    }

    .moving-images {
        &-wrap {
            display: flex;
            position: relative;
            width: 50%;
            position: absolute;

        }

        &__img {
            @include mix.card-shadow;
            border-radius: $br-picture;
            margin-bottom: 1.5em;
            
            width:  170px;
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
</style>