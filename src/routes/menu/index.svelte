<script lang="ts">
  import BottomBarItem from "$lib/components/Bottom/Item.svelte";
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import Highlighed from "./_components/Highlighed.svelte";
  import Member from "./_components/Member.svelte";
  import Food from "$lib/foods";
  import Card from "./_components/Card.svelte";
  import CardDescription from "./_components/CardDescription.svelte";
  import CardFix from "./_components/CardFix.svelte";
  import Acord from "./_components/Acord.svelte";
  import { fade } from "svelte/transition";

  let selectedMenu: "Mains" | "Sides" | "Pupus" = "Mains";
  let menu: Mains[] | BaseFood[] = Food[selectedMenu];
  $: menu = Food[selectedMenu];

  let selected = menu[0];
  let _selected = selected; // this is purpley so we can remain the previous selected for highlights
  $: highlight = selected != null ? selected : _selected;
  const select = (order: BaseFood) => () => {
    _selected = selected;
    if (selected?.title === order.title) {
      selected = null;
    } else {
      selected = order;
    }
  };
</script>

<HeroHeader
  header="Menu"
  quote="Filipino favorites like the staple adobo pork, pancit, and tchara, along with Hawaiian classics like Kalua pork, katsu chicken and sweet savory flavors."
  --url="url('/images/contact.jpg')"
/>

<main>
  <div class="plates__nav">
    <BottomBarItem
      --cursor="pointer"
      src="/icons/Lunch.svg"
      content="Main Lunch Plates"
      prefix="Mains"
      on:click={() => (selectedMenu = "Mains")}
    />
    <BottomBarItem
      --cursor="pointer"
      src="/icons/Pupus.svg"
      content="Pupus"
      prefix="Pupus"
      on:click={() => (selectedMenu = "Pupus")}
    />
    <BottomBarItem
      --cursor="pointer"
      src="/icons/Sides.svg"
      content="Sides"
      prefix="Sides"
      on:click={() => (selectedMenu = "Sides")}
    />
  </div>

  <section class="section section--small section--white">
    <div class="menu-container">
      <div class="flex">
        <div class="col col--acord">
          <div class="plates__heading">
            <h1 transition:fade={{ duration: 1500 }}>
              {selectedMenu}
            </h1>
            <p>
              Please let us know if you have any allergies or dietary
              restrictions prior to ordering!
            </p>
          </div>
          {#each menu as food}
          <Acord
            src={food.src}
            desc={food.description}
            price={food.price}
            title={food.title}
          />
          {/each}
        </div>
        <div class="col col--image">
          <Highlighed
            title={highlight.title}
            sides={highlight.sides}
            description="We are a restaurant on wheels,  we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
            price={highlight.price}
            --url="url('{highlight.src}')"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="plates">
    <div class="plates__container">
      <div class="plates__heading">
        <h1>
          {selectedMenu}
        </h1>
        <p>
          Please let us know if you have any allergies or dietary restrictions
          prior to ordering!
        </p>
      </div>

      <div class="plates__list">
        {#each menu as food}
          <Card
            {...food}
            active={food.title === selected?.title}
            on:click={select(food)}
          >
            <img
              slot="head_action"
              src={selectedMenu != "Mains"
                ? "/icons/cart.svg"
                : selected?.title === food.title
                ? "/icons/plates_open.svg"
                : "/icons/plates_close.svg"}
              alt=""
            />

            <div slot="body">
              {#if selectedMenu === "Mains"}
                <CardDescription includes={food?.includes} />
              {/if}
            </div>
          </Card>
        {/each}
      </div>
    </div>

    <!-- <Highlighed
      title={highlight.title}
      sides={highlight.sides}
      description="We are a restaurant on wheels,  we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
      price={highlight.price}
      --url="url('{highlight.src}')"
    /> -->
  </section>

  <section class="team">
    <div class="heading">
      <IntroHeading
        title="Our Team"
        body="Most Expert Chefs"
        footer="OverRice have a great team of good chefs. Who provides quality food for about 7 years."
      />
    </div>

    <div class="team__members">
      <Member
        src="/images/owner_headshot.jpg"
        name="Myra J. Ogren"
        title="Chicken Expert"
        description="The special person behind the recipe of Huli Huli Chicken. She loves chicken thats why try her best to make the best of a chicken."
      />
      <Member
        src="/images/owner_headshot_2.jpg"
        name="Joel T. Seay"
        title="Grill Expert"
        description="The special person behind the recipe of Adobo Bowl Platter. He loves grilled chicken thats why try her best to make the best of a chicken."
      />
    </div>
  </section>
</main>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;
  @use '../../lib/scss/1-plugins/responsive' as res;

  main {
    position: relative;
  }
  .item {
    background-color: red;
    width: 100%;
    height: 30px;
  }
  .col--acord::-webkit-scrollbar {
    appearance: none;
    border-radius: 10px;
    width: 10px;
  }
  .col--acord {
    scrollbar-width: thin;
    scrollbar-color: $color-green white;
  }
  .col--acord::-webkit-scrollbar-thumb {
    background-color: $color-green;
    border-radius: 10px;
  }

  .col {
    width: 100%;
    padding: 0 1rem;
    flex-grow: 1;
    flex-basis: 50%;

    &--acord {
      display: flex;
      align-self: flex-end;
      height: 100%;
      flex-direction: column;

      @include mq.media(">1000px") {
        max-height: 700px;
        overflow-y: auto;
      }
    }

    &--image {
      @include mq.media("<1000px") {
        max-height: 350px;
      }
    }
  }

  .menu-container {
    padding: 0 1rem;
    max-width: 1140px;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    // align-items: flex-end;
    flex-wrap: wrap-reverse;
    height: 100;
    width: 100%;
  }

  @include mq.media("<1000px") {
    .flex {
      gap: 2.5rem;
    }
    .col {
      padding: 0;
    }
    .image {
      height: 300px;
    }
  }

  .plates__nav {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 72px;
    background: rgba(0, 0, 0, 0.9);
    padding: 0 22vw;
    @include mq.media("<phone") {
      padding: 0 2em;
    }

    display: flex;
    justify-content: space-between;
    color: white;

    @include res.interpolate(font-size, 320px, 1440px, $fs-nav - 6, $fs-nav);
  }

  .heading {
    margin-bottom: 2rem;
  }

  .plates {
    position: relative;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: min-content 1fr;
    gap: 98px;
    padding: 85px 0 0 13.5vw;

    transition: padding 0.2s ease-in-out, margin 0.2s ease-in-out;
    width: 100%;
    background: url("/images/background.jpg");

    @include mq.media("<1440px") {
      padding: 60px 3em 0 3em;
      gap: 30px;
    }

    &__container {
      min-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__heading {
      max-width: 490px;
      h1 {
        color: $color-heading;
      }
      p {
        color: $color-green;
        font-weight: 400;
        font-size: 1.2rem;
        letter-spacing: 0.02em;
        line-height: 21px;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    @include mq.media("<1100px") {
      padding: 30px 1em;
      grid-template: 1fr / 1fr;
      justify-items: center;

      &__container {
        min-width: 0;
      }

      &__heading {
        h1,
        p {
          text-align: center;
        }
        place-self: center;
      }
    }
  }

  .team {
    position: relative;
    width: 100%;
    padding: 110px 0;
    background: url("/images/background.jpg");

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;

    &__members {
      justify-self: center;
      display: flex;
      gap: 40px;

      @include mq.media("<1200px") {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }

      @include mq.media("<600px") {
        display: flex;
        flex-direction: column;
      }
    }

    @include mq.media("<1200px") {
      padding: 60px 0;
    }
  }
</style>
