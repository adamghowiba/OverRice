<script>
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import CTA from '$lib/components/CallToAction.svelte';
  import CateringList from './_components/CateringList.svelte';
  import MenuSnack from './_components/MenuSnack.svelte';
  import IntroHeading from '$lib/components/IntroHeading.svelte';
  import FaqCard from './_components/FAQCard.svelte';
  import Button from '$lib/components/Button.svelte';

  let meatItems = [
    {
      title: 'Kalua Pig',
      price: 'Contact us for price',
      desc: 'Pork shoulder seasoned w/ Hawaiian sea salt wrapped in banana leaves and roasted for 9 hrs',
    },
    {
      title: 'Huli Huli Chicken',
      price: 'Contact us for price',
      desc: 'Boneless skinless chicken thigh marinated overnight in our house Huli Huli sauce',
    },
    {
      title: 'Papas Filipino Pork Adobo',
      price: 'Contact us for price',
      desc: 'Bone-in pork spare rib braised in soy, garlic, anise, bay and black pepper braised until fork tender',
    },
  ];
  let sideItems = [
    {
      title: 'Pancit Tray',
      price: '$60',
      desc: 'Rice & wheat noodles sauteed in garlic with mixed vegetables.',
      note: 'Feeds 15 people',
    },
    {
      title: 'Garlic Rice Tray',
      price: '$30',
      desc: 'Delicious buttery tray of our staple garlic rice, the perfect pairing for any dish.',
      note: 'Feeds 15 people',
    },
    {
      title: 'Mac Salad Tray',
      price: '$40',
      desc: 'Elbow noodles smothered with mayonaisse, eggs, carrots, potato, seasoned to perfection',
      note: 'Feeds 15 people',
    },
    {
      title: 'Frozen Lumpia Shanghia (Dozen)',
      price: '$15',
      desc: 'Enjoy our hand rolled lumpias from the comfort of your home.',
    },
  ];
</script>

<HeroHeader
  header="Catering"
  quote="Planning a working lunch or an event? We offer full service catering and takeout options. Give us a call for a custom order"
  --url="url('/images/over_rice_chicken_platter.jpg')"
  --bg-pos="0 38%"
  height="560px"
  button={{ text: 'Place Your Order', url: '/catering/order', newTab: false }}
/>

<main>
  <CateringList
    title="Hawaiian Style Catering"
    desc="Influenced by global cultures. Hawaiian food offers fresh and delicious flavors that are settled in the islands from generations. With the Ohana spirit, Hawaiian food has grown its own roots and we're happy to share some of those roots with you. "
    sides={['Jasmine Rice', 'Ono Mac Salad', 'Your Choice Of Protien']}
    meats={['Huli Huli Chicken', 'Kalua Pig', "Papa's Pork Adobo", 'Contact Us For More Options']}
  />
  <section class="steps">
    <div class="steps__heading">
      <h1>Catering Options</h1>
      <p>
        We understand each customer has different needs, for that reason we customize our catering. Reach us and we'll
        be more than happy to assist you.
      </p>
      <Button href="/catering/order">Place Your Order</Button>
    </div>
  </section>

  <CateringList
    title="Filipino Style Catering"
    desc="A hidden Asian gem, Filipino food has so much to offer; sweet, salty, sour are just s few of the components that you'll find on Filipino Food. 
    From Adobo to Halo Halo there's an immense variety of flavorful dishes to be explored. "
    sides={['Jasmine Rice', '25 Lumpia Shanghai', 'Your Choice Of Protien']}
    meats={['Huli Huli Chicken', 'Kalua Pig', "Papa's Pork Adobo"]}
  />

  <CTA button={false} title="Real Food, Real People" img="/images/over_rice_chicken_platter.jpg" />

  <div class="section section--white menu-snack">
    <MenuSnack title="Meat By The Pound" img="/images/chicken_grill.jpg" menuItems={meatItems} />
    <MenuSnack img="/images/noodles_orlando.jpg" menuItems={sideItems} title="Pupu Items" />
  </div>

  <CTA button={false} title="100% compostable packaging" img="/images/envrioment_containers.jpg" />

  <section class="section section--white">
    <container class="container">
      <IntroHeading
        title="Catering"
        body="Flavors you gather"
        footer="Take a break from your routine with an invitation to explore new tastes. Whether it's for an event, corporate catering, or if you're just looking for a great place to eat on the go -- we hope you'll stop by!
        "
      />
    </container>
  </section>
</main>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;
  @use '../../lib/scss/1-plugins/responsive' as res;

  .menu-snack {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .steps {
    position: relative;
    width: 100%;
    padding: 60px 0;
    background: linear-gradient(rgba(black, 0.7), rgba(black, 0.7)), url('/images/papa_pork.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;

    &__heading {
      text-align: center;
      width: 100%;
      max-width: 430px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      justify-self: center;

      h1 {
        line-height: 25px;
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
  }
</style>
