<script lang="ts">
    export let href = "/"
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
</script>

<div class="card__description">
    <div class="card__description__included">
        <h1>Included</h1>
        <ul>
            {#each includes as item}
                <li>{item}</li>
            {/each}
        </ul>
    </div>

    <div class="card__description__meats">
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

    <a class="card__description__action" {href}>Order now</a>
</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;
    @use '../../../lib/scss/1-plugins/mquery' as mq;
    
    .card__description {
        position: relative;
        padding: 20px 40px;
        text-align: left;

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
                font-family: 'le-havre';
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
                font-family: 'le-havre';
                font-size: 1.3rem;
                font-weight: 400;
                line-height: 125.5%;
            }
        }

        &__meats {
            h1 { 
                font-family: 'le-havre';
                font-size: 1rem;
                font-weight: 400;
                line-height: 125.5%;

                span { color: $color-red; }
            }
        }

        &__action {
            display: none;
            position: absolute;
            right: 30px;
            bottom: 25px;
            
            color: white;
            text-decoration: none;
            background: $color-green;
            
            padding: 5px 16px;
            border-radius: 5px;

            font-size: .75rem;
            
            @include mq.media("<1100px") { display: inline; }
            @include mq.media("<400px") { top: 25px; bottom: inherit; }
        }
    }

</style>