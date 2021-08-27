<script>
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import IntroHeading from '$lib/components/IntroHeading.svelte';
    import Member from './_components/Member.svelte';
</script>

<HeroHeader 
    header = 'Menu'
    quote = "With the passion and the inspiration of his years living in Hawaii."
    --url = "url('/images/menu.jpg')"
/>

<main>
    <section class="team">
        <div>
            <IntroHeading
                title = "Our Team"
                body = "Most Expert Chefs"
                footer = "OverRice have a great team of good chefs. Who provides quality food for about 7 years."
            />
        </div>

        <div class="team__members">
            <Member 
                src = "/images/Member1.png"
                name = "Jodi J. Ogren"
                title = "Chicken Expert"
                description = "The special person behind the recipe of Huli Huli Chicken. She loves chicken thats why try her best to make the best of a chicken."
            />
            <Member 
                src = "/images/Member2.png"
                name = "Teddy T. Seay"
                title = "Grill Expert"
                description = "The special person behind the recipe of Adobo Bowl Platter. He loves grilled chicken thats why try her best to make the best of a chicken."
            />
            <Member 
                src = "/images/Member3.png"
                name = "Jeffrey J. Billings"
                title = "Fillipino Food Expert"
                description = "The special person behind the recipe of Fillipino Food. He is from Phillippines and love the food of Phillippines."
            />
            <Member 
                src = "/images/Member4.png"
                name = "Joe V. Nash"
                title = "Hawaain Food Expert"
                description = "The special person behind the recipe of Hawaiian Food. He loves local food and likes to study more about Ancient Hawaii."
            />
        </div>
    </section>
</main>

<style lang="scss">
    @use '../../lib/scss/0-helpers/vars' as *;
    @use '../../lib/scss/1-plugins/mquery' as mq;

    .team {
        position: relative;
        width: 100%;
        min-height: 960px;
        padding: 110px 0;
        background: url('/images/background.jpg');

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
        
        &__members {
            margin-top: 110px;
            justify-self: center;
            display: flex;
            gap: 40px;

            @include mq.media ("<1200px") {
                margin-top: 60px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }

            @include mq.media ("<600px") {
                display: flex;
                flex-direction: column;
            }
        }

        @include mq.media("<1200px") {
            padding: 60px 0 ;
        }

    }


</style>
