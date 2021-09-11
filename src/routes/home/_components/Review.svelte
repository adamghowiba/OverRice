<script>
</script>

<!-- Review Section -->
    <div class="review-wrap">
        <!-- <img class="review__image" src="{image}" alt="Chicken kabab"/> -->
        
        <div class="review">
            <div class="review__content-wrap">
                <img class="review__icon" src="/icons/quote.svg" alt="Gree  quote icon">
                <!-- TODO Add Slider -->
                <p>
                    Shannon's new suggestion for the Hawaii Five O bowl is my new favorite after seemingly hundreds
                    of All American bowls!!
                    Good stuff. Ask for their suggestions to have the right bowl made for you!
                </p>
                <span class="review__name">Jeff W.</span>
            </div>
        </div>
    
    </div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;

    .review {

        &__icon {
            max-width: 50px;
            margin: 0 auto;
        }

        &__name {
            font-size: 2.2rem;
            color: $color-green;
            font-family: $font-secondary;
        }
        
        &__content-wrap {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            align-items: center;
            flex-direction: column;
            position: relative;
            z-index: 20;
            color: white;
            gap: 16px;

            text-align: center;
            max-width: 80ch;
        }
    }

.review-wrap {
    // background-image: url('/static/images/over_rice_chicken_platter.jpg');
    position: relative;
    height: 100%;
    padding: clamp(2rem, 6%, 5rem);

            
    background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), var(--review);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: var(--bg-pos, center);
}


</style>