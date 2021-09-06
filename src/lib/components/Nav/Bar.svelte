<script lang="ts">
  import NavMenu from "./Menu.svelte";
  import HamBurger from "./HamBurger.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let menu = false;
  const toggleMenu = () => (menu = !menu);

  const resize = () => {
    if (window.innerWidth >= 768) menu = false;
  };

  onMount(() => {
    resize();
    window.addEventListener("resize", resize);
  });
</script>

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

    <HamBurger on:click={toggleMenu} show={menu} />
  </div>

  <NavMenu show={menu} />
</nav>

<style lang="scss">
  @use '../../scss/0-helpers/vars' as *;
  @use '../../scss/1-plugins/mquery' as mq;

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
      transition: transform 0.25s ease-out;

      .logo {
        width: 90%;
      }

      &:hover {
        transform: scale(1.15) rotate(4deg);
      }
    }

    /* Navbar Menu Links */
    &__items {
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    &__link {
      color: white;
      display: block !important;
      position: relative;
      text-decoration: none;
      font-size: $fs-nav;
      padding: 0 $pd-lg;
      white-space: nowrap;
      padding-left: 0.6em;
      padding-right: 0.6em;

      transition: transform 0.55s cubic-bezier(0.23, 1, 0.320, 1), background-color 0.2s linear, color 0.2s ease-in;
      &:hover {
          color: $color-green;
          transform: translateY(-3px);
      }
    }

    @include mq.media("<tablet") {
      z-index: 4;

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
    }
  }

</style>
