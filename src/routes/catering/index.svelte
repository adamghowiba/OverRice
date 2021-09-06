<script>
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import CTA from "$lib/components/CallToAction.svelte";
  import CateringList from "./_components/CateringList.svelte";
  import MenuSnack from "./_components/MenuSnack.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<HeroHeader
  header="Catering"
  quote="OverRice team is always available to answer your questions"
  --url="url('/images/contact.jpg')"
  --bg-pos="0 38%"
/>

<main>
  <CateringList />

  <CTA button={false} title="Authentic" />

  <CateringList />

  <CTA button={false} title="Authentic" />

  <MenuSnack />
  <MenuSnack />

  <CTA button={false} title="Authentic" />
  <section class="section section--white">
    <container class="container">
      <IntroHeading
        title="Catering"
        body="Flavors you gather"
        footer="Food is an important part of everyone’s life, we are the one who provides a part of food and have specialized chefs of Filipino and Hawaiian Food. Over Rice is a Filipino & Hawaiian food truck that specializes in serving homemade delicious food. "
      />
      <div class="center">
          <Button>Start Order</Button>
      </div>
    </container>
  </section>
</main>

<style lang="scss">
    .center {
        margin-top: 2rem;
    }
</style>
