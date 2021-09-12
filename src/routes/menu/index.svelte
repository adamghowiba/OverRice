<script lang="ts">
    import BottomBarItem from '$lib/components/Bottom/Item.svelte'
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import IntroHeading from '$lib/components/IntroHeading.svelte';
    import Highlighed from './_components/Highlighed.svelte';
    import Member from './_components/Member.svelte';
    import Food from '$lib/foods'
    import Card from './_components/Card.svelte'
    import CardDescription from './_components/CardDescription.svelte'

    let selectedMenu: "Mains" | "Sides" | "Pupus" = "Mains"
    let menu: Mains[] | BaseFood[] = Food[selectedMenu]
    $: menu = Food[selectedMenu]

    let selected = menu[0];
    let _selected = selected // this is purpley so we can remain the previous selected for highlights
    $: highlight = selected != null ? selected : _selected
    const select = (order: BaseFood) => () => {
        _selected = selected
        if (selected?.title === order.title) {
            selected = null
        } else {
            selected = order
        }
    }
</script>

<HeroHeader 
    header = 'Menu'
    quote = "Filipino favorites like the staple adobo pork, pancit, and tchara, along with Hawaiian classics like Kalua pork, katsu chicken and sweet savory flavors."
    --url = "url('/images/contact.jpg')"
/>

<main>
    <section class="plates__nav">
        <BottomBarItem
            --cursor="pointer"
            src = "/icons/Lunch.svg"
            content = "Main Lunch Plates"
            prefix = "Mains"
            on:click = { () => selectedMenu = "Mains" }
        />
        <BottomBarItem 
            --cursor="pointer"
            src = "/icons/Pupus.svg"
            content = "Pupus"
            prefix = "Pupus"
            on:click = { () => selectedMenu = "Pupus" }
        />
        <BottomBarItem 
            --cursor="pointer"
            src = "/icons/Sides.svg"
            content = "Sides"
            prefix = "Sides"
            on:click = { () => selectedMenu = "Sides" }
        />
    </section>

    <section class="plates">
        <div class="plates__container">
            <div class="plates__heading">
                <h1>
                    {selectedMenu}
                </h1>
                <p>Please let us know if you have any allergies or dietary restrictions prior to ordering!</p>
            </div>
    
            <div class="plates__list">
                {#each menu as food}
                        <Card 
                            { ...food }
                            active = { food.title === selected?.title }
                            on:click = { select(food) }
                        >
                            <img 
                                slot = "head_action" 
                                src = {selectedMenu != "Mains" ? '/icons/cart.svg' : selected?.title === food.title ? '/icons/plates_open.svg' : '/icons/plates_close.svg'} 
                                alt = ""
                            />    

                            <div slot="body">
                                {#if selectedMenu === "Mains"}
                                    <CardDescription includes = { food?.includes } />
                                {/if}
                            </div>
                        </Card>
                {/each}
            </div>
        </div>

        <Highlighed 
            title = {highlight.title}
            sides = {highlight.sides}
            description = "We are a restaurant on wheels,  we offer Filipino and Hawaiian food. We start our business 10 years ago and most of the food we serve is the food and recipes wegrew with."
            price = {highlight.price}
            --url = "url('{highlight.src}')"
        />
    </section>

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
    @use '../../lib/scss/1-plugins/responsive' as res;

    .plates__nav {
        position: sticky;
        width: 100%;
        height: 72px;
        background: black;
        padding: 0 22vw;
        @include mq.media("<phone") { padding: 0 2em; }
        
        display: flex;
        justify-content: space-between;
        color: white;
        
        @include res.interpolate(font-size, 320px, 1440px, $fs-nav - 6, $fs-nav);
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
        background: url('/images/background.jpg');

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
            h1 { color: $color-heading }
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
                h1, p { text-align: center; }
                place-self: center;
            }
        }
    }

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
