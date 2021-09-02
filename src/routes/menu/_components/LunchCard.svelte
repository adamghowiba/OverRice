<script lang="ts">
    export let src: string;
    export let href = "/";

    export let title: string;
    export let sides: string;
    export let description: string;
    export let price: number;
    export let duelprice: number = 2;
    export let includes: string[] = []
    export let meats: Meats[] = [
        {
            title: "Kalua Pig",
            description: "Pork Shoulder Seasoned w/ Hawaiian sea salt wrapped in banana leaves and roasted for 9 hours."
        },
        {
            title: "Huli Huli Chicken",
            description: "Boneless skinless chicken thigh marinated overnight in our house huli huli sauce, and grilled to perfection."
        },
        {
            title: "Papa's Filipino Pork Adobo",
            description: "Bone in pork spare rib braised in Soy, Garlic, Ainse, Bay and Black pepper, braised until pork tender."
        },
    ]
    export let selected = false
</script>


<button on:click class="card" class:card--active={selected}>
    <div class="card__head">
        <img {src} alt={title} />
    
        <h1 class="card__title">{title}</h1>
        <h2 class="card__sides">{sides}</h2>
        <p class="card__description">{description}</p>
        <p class="card__pricing">${price}</p>
    
        <button class="card__cart">
            Find more
        </button>
    </div>

    <div class="card__body">
        <div class="card__body__included">
            <h1>Included</h1>
            <ul>
                {#each includes as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </div>

        <div class="card__body__meats">
            <h1>
                Choice of Meat
                <span>+ ${duelprice} for Duel Meat</span>
            </h1>

            <ul>
                {#each meats as item}
                    <li>
                        {item.title}
                        <span>Test</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</button>
    
<style lang="scss">

    @use '../../../lib/scss/0-helpers/vars' as *;

    .card {
        width: 100vw;
        min-width: 300px;
        max-width: 480px;
        --min-height: 140px;
        --max-height: 419px;
        --height: var(--min-height);
        height: var(--height);
        transition: height 0.2s ease-in-out;

        padding: 0;
        margin: 0;
        overflow: hidden;

        border-radius: 11px;
        border: none;
        text-align: left;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;

        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            
        &:hover { outline: 2px solid rgba($color-green, 0.6); }
        &--active { 
            --height: var(--max-height);
            outline: 2px solid $color-green;
        }

        &__head {
            position: relative;
            display: grid;
            grid-template-columns: 117px 1fr;
            grid-template-rows: repeat(4, min-content);
            gap: 0 24px;
            grid-template-areas: 
                "img title"
                "img sides"
                "img description"
                "img pricing";
        }

        &__body {
            padding: 20px 40px;

            & > div {
                h1 {
                    color: $color-heading; 
                    margin-bottom: 12px; 
                    letter-spacing: 0.02em;
                }

                ul { margin-left: 16px; }
                ul li { 
                    position: relative;
                    margin-bottom: 8px;
                    $list-dot-dimentions: 4px;
                    $list-gap: 6px;
                    transform: translateX( $list-dot-dimentions + $list-gap );

                    color: $color-text;
                    font-family: 'Le Havre';
                    font-weight: normal;
                    font-size: 1rem;
                    line-height: 20px;
                    letter-spacing: 0.02em;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translate( $list-dot-dimentions * -1 - $list-gap, -50%);
                        width: $list-dot-dimentions;
                        height: $list-dot-dimentions;
                        border-radius: 50%;
                        background: $color-text;
                    }
                }
            }

            &__included {
                margin-bottom: 18px;
                h1 { 
                    font-family: 'Le Havre';
                    font-size: 1.3rem;
                    font-weight: 400;
                    line-height: 125.5%;
                }
            }

            &__meats {
                h1 { 
                    font-family: 'Le Havre';
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 125.5%;

                    span { color: $color-red; }
                }
            }
        }

        img {
            grid-area: img;
            width: 100%;  
            height: 100%; 
            object-fit: cover;
        }

        &__title {
            font-family: 'Le Havre Bold';
            margin-top: 14px;
            grid-area: title; 
            font-weight: 700;
            font-size: 1.3rem;
            line-height: 27px;
            letter-spacing: 0.02em;
            color: $color-green;
        }
        
        &__sides { 
            grid-area: sides;
            margin-top: 4px;
            font-weight: 400;
            font-size: .75rem;
            line-height: 15px;
            color: $color-text;
        }
        
        &__description { 
            grid-area: description;
            margin-top: 10px;
            width: 75%;
            font-weight: 400;
            font-size: 1rem;
            line-height: 18px;
            color: $color-heading;
            white-space: nowrap;
        }
        
        &__pricing { 
            grid-area: pricing;
            margin-top: 8px;
            margin-bottom: 14px;
            font-family: 'Le Havre Bold';
            font-size: .75rem;
            font-weight: 700;
            line-height: 15px;
            color: $color-red;
        }

        &__cart {
             // this is to hide they text, that i placed for accesability reason only
            text-indent: -9999px;

            position: absolute;
            top: 100px;
            right: 22px;

            width: 32px;
            height: 32px;
            background: $color-green var(--icon-url, url('/icons/cart.svg')) no-repeat 50% 50%;
            border-radius: 50%;
            border: none;

            cursor: pointer;
        }
    }
</style>