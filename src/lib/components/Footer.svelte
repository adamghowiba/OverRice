<script>
</script>

    <div class="footer">
        <div class="container">
            <div class="footer-warp">
                <img src="/images/logo.png" class="footer__logo" alt="Overrice Logo">
                <p class="footer__p">Our passion of serving and sharing food for friends, had move to a next level where we
                    realize how important food is, how creates connection, creates experiences and definitely
                    brings people together.
                    </p>
                    <div class="footer__nav">
                        <div class="footer__nav-wrap">
                            <a href="/contact" class="footer__nav__item">Contact Us</a>
                            <a href="/about" class="footer__nav__item">About Us</a>
                            <a href="/catering" class="footer__nav__item">Catering Services</a>
                        </div>
                        <div class="footer__nav-wrap">
                            <a href="/menu" class="footer__nav__item">Menu</a>
                            <a href="/location" class="footer__nav__item">Our Location</a>
                        </div>
                    </div>
                    <div class="footer__social">
                        <div class="footer__icon"></div>
                        <div class="footer__icon"></div>
                        <div class="footer__icon"></div>
                    </div>
            </div>
        </div>
    
    
    </div>


<style lang='scss'>
    @use '../scss/0-helpers/vars' as *;

    .footer {
        background-color: $color-black;
        color: white;
        padding: 7em 0;
        text-align: center;

        &-warp {
            display: flex;
            flex-direction: column;
            max-width: clamp(200px, 500px, 90%);
            margin: 0 auto;
        }

        &__logo {
            max-width: 70%;
            margin: 0 auto;
        }

        &__p {
            margin: $pd-md + 3px 0;
        }

        &__nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            white-space: nowrap;
            color: $color-green;

            &-wrap {
                display: flex;
                margin-bottom: $pd-sm;
            }

            &__item {
                margin: 0 $pd-sm;
                color: inherit;
                text-decoration: none;

                &:visited { color: inherit; }
            }
        
        }

    }
</style>