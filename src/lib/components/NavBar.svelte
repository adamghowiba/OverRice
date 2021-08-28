<nav class="nav">
    <div class="nav-wrap">
        <div class="nav__items nav__items--right">
            <a class="nav__link" href="/home">Home</a>
            <a class="nav__link" href="/contact">Contact</a>
            <a class="nav__link" href="/about">About Us</a>
        </div>

        <a class="nav__logo" href="https://www.webrevived.com">
            <img 
                class="logo"
                src="/images/logo_trans.png" 
                alt="OverRice logo of hawaiian woman"
            />
        </a>

        <div class="nav__items nav__items--left">
            <a class="nav__link" href="/menu">Menu</a>
            <a class="nav__link" href="/location">Our Location</a>
            <a class="nav__link" href="/catering">Catering Info</a>
        </div>

        <div id="hamburger">
            <span class="hamburer__line"></span>
            <span class="hamburer__line"></span>
            <span class="hamburer__line"></span>
        </div>
    </div>
</nav>

<style lang="scss">
    @use '../scss/0-helpers/vars' as *;
    @use '../scss/1-plugins/mquery' as mq;

    .nav {
        position: fixed;
        right: 0;
        left: 0;
        
        &-wrap {
            max-width: 1100px;
            padding: 1.5em 0;
            margin: 0 auto;
            display: grid;
            align-items: center;
            justify-content: center;
            grid-template-columns: 1fr auto 1fr;
            margin-left: auto;

        }

        &__logo {
            // width: 100%;
            display: flex;
            justify-content: center;

            .logo {
                width: 90%;
            }
        }

        /* Navbar Menu Links */
        &__items {
            text-align: center;
            width: 100%;
            display: flex;
            justify-content: space-around;

            a {
                color: white;
                text-decoration: none;
                font-size: $fs-nav;
                padding: 0 $pd-lg;
                white-space: nowrap;
            }
        
        }

        @include mq.media("<desktop") {
            &__link {
                padding-left: 0.6em !important;
                padding-right: 0.6em !important;
                color: red;
            }
        }

        @include mq.media("<tablet") {
            &__items {
		    	display: none;
	    	}

            &-wrap {
                padding-right: 1em;
                padding-left: 1em;
                width: 100%;
            }

            &__logo {
                width: 120px;
            }
            
            #hamburger {
                display: flex;
            }
        }
    }

    #hamburger {
        width: 25px;
        height: 25px;
        display: none;
        justify-content: space-between;
        flex-direction: column;
        grid-area: 1/4;

        span {
            width: 100%;
            height: 3px;
            background-color: white;
        }
    }
</style>