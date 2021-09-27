<script>
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import CTA from "$lib/components/CallToAction.svelte";
  import CateringList from "./_components/CateringList.svelte";
  import MenuSnack from "./_components/MenuSnack.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import FaqCard from "./_components/FAQCard.svelte";
  import Button from "$lib/components/Button.svelte";

  let meatItems = [
    {
      title: "Kualua Pig",
      price: "1.22",
      desc: "Pork shoulder seasoned w/ Hawaiian sea salt wrapped in banana leaves and roasted for 9 hrs",
    },
    {
      title: "Huli Huli Chicken",
      price: "1.22",
      desc: "Boneless skinless chicken thigh marinated overnight in our house huli huli sauce, ",
    },
    {
      title: "Papas Filipino Pork Adobo",
      price: "1.22",
      desc: "Bone-in pork spare rib braised in soy, garlic, anise, bay and black pepper braised until pork tender",
    },
  ];
  let sideItems = [
    {
      title: "Pancit Tray",
      price: "60",
      desc: "Pancit is a traditional filipino type of Lo Mien or tossed noodles. This dish is often served during birthdays and special occasions to symbolize long life",
    },
    {
      title: "Garlic Rice Tray",
      price: "30",
      desc: "Delicious buttery tray of our staple garlic rice, the perfect pairing for any dish.",
    },
    {
      title: "Mac Salad Tray",
      price: "40",
      desc: "Creamy, flavor packed classic Hawiian mac salad. A guaranteed crowd favorite. ",
    },
    {
      title: "Frozen Lumpia Shanghia (Dozen)",
      price: "15",
      desc: "Filipino deep-fried appetizer consisting of a mixture of giniling wrapped in a thin egg crêpe",
    },
  ];
</script>

<HeroHeader
  header="Catering"
  quote="Planning a working lunch or an event? We offer full service catering and takeout options. Give us a call for a custom order"
  --url="url('/images/over_rice_chicken_platter.jpg')"
  --bg-pos="0 38%"
/>

<main>
  <CateringList
    title="Hawiian Style Catering"
    desc="An amazing blend of sweet, savory Hawaiian flavors. Includes hawiian classics like our famous Mac salad, and Kula pig. Comes standard with one meat option but can be exchanged for more delicious food."
    sides={["Half Jasmine Rice", "Half Mac Salad", "Your Choice Of Protien"]}
    meats={["Huli Huli Chicken", "Kalua Pig", "Papa's Pork Adobo"]}
  />
  <section class="steps">
    <div class="steps__heading">
      <h1>Catering Options</h1>
      <p>
        Because we want you to enjoy 100% your special day. We have created
        three types of service styles depending on your necessities.
      </p>
    </div>

    <div class="steps__cards">
      <FaqCard
        --icon="url('/icons/work_cursor.svg')"
        title="Easy Pick Up"
        description="This pick up is our location. NO fees for pick up. Your food will be fresh and warm in quality containers able to manage the way to your destiny."
      />
      <FaqCard
        --icon="url('/icons/work_location.svg') "
        title="Drop Off Style"
        description="Bringing the catering straight to the place you need it. Will drop the food and set up. The food will be delivered fresh and warm ready to be served. Minimum delivery charge of $25."
      />
      <FaqCard
        --icon="url('/icons/work_delivery.svg')"
        title="OverRice in the house"
        description="Bring the whole Food Truck experience to your special event. A fee of $200  will be charge for this service plus the Plate Lunch of preference per person. Get your food yummy and fresh straight from the window."
      />
    </div>
  </section>

  <CateringList
    title="Filipino Style Catering"
    desc="A classic take on a traditional Filipino style food. With bold, flavors and a hint of spice. Includes are abundtful portion of filipino's favorite Lumpia Shangahi, rice and your choice of meat."
    sides={["Jasmine Rice", "25 Lumpia Shanghai", "Your Choice Of Protien"]}
    meats={["Huli Huli Chicken", "Kalua Pig", "Papa's Pork Adobo"]}
  />

  <CTA
    button={false}
    title="Real Food, Real People"
    img="/images/over_rice_chicken_platter.jpg"
  />

  <div class="section section--white menu-snack">
    <MenuSnack img="/images/chicken_grill.jpg" menuItems={meatItems} />
    <MenuSnack
      img="/images/noodles_orlando.jpg"
      menuItems={sideItems}
      title="Side items"
    />
  </div>

  <CTA
    button={false}
    title="100% compostable packaging"
    img="/images/envrioment_containers.jpg"
  />

  <section class="section section--white">
    <container class="container">
      <IntroHeading
        title="Catering"
        body="Flavors you gather"
        footer="Take a break from your routine with an invitation to explore new tastes. Whether it's for an event, corporate catering, or if you're just looking for a great place to eat on the go -- we hope you'll stop by!
        "
      />
      <div class="center">
        <Button href="https://over-rice-food-truck.square.site/"
          >Start Order</Button
        >
      </div>
    </container>
  </section>
</main>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;
  @use '../../lib/scss/1-plugins/responsive' as res;

  .center {
    margin-top: 2rem;
  }
  .menu-snack {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .steps {
    position: relative;
    width: 100%;
    padding: 60px 0;
    background: linear-gradient(rgba(black, 0.7), rgba(black, 0.7)),
      url("/images/WorksBackground.png");
    background-repeat: no-repeat;
    background-size: cover;

    display: grid;

    &__heading {
      text-align: center;
      width: 100%;
      max-width: 430px;
      margin-bottom: 2rem;

      justify-self: center;

      h1 {
        color: white;
      }
      p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: 0.02em;
        color: $color-green;
        margin: 0 20px;
      }
    }

    &__cards {
      place-self: center;
      display: flex;
      gap: 50px;

      @include mq.media("<1200px") {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
      }

      @include mq.media("<600px") {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
