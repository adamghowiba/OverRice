<script lang="ts">
    import HeroHeader from '$lib/components/HeroHeader.svelte'
    import IntroHeading from '$lib/components/IntroHeading.svelte';
    import Card from './_components/Card.svelte'
    import Map from './_components/Map.svelte';
    import { getPublic, constructExportUrl, parseTime } from "$lib/google";
    import { writable } from 'svelte/store'
    import { onMount } from 'svelte';

    let days: Locations[] = [
        {
        day: "monday",
        location: "114 Walker St Daytona Beach, FL 32117",
        times: "00:10AM - 00:06PM",
        },
        {
        day: "tuesday",
        location: "115 Walker St Daytona Beach, FL 32117",
        times: "00:10AM - 00:06PM",
        },
        {
        day: "wednesday",
        location: "St. Walker Street, Florida",
        times: "00:10AM - 00:06PM",
        },
        {
        day: "thursday",
        location: "St. Walker Street, Florida",
        times: "00:10AM - 00:06PM",
        },
        {
        day: "friday",
        location: "St. Walker Street, Florida",
        times: "00:10AM - 00:06PM",
        },
        {
        day: "saturday",
        location: "St. Walker Street, Florida",
        times: "00:10AM - 00:06PM",
        },
        {
        day: "sunday",
        location: "St. Walker Street, Florida",
        times: "00:10AM - 00:06PM",
        },
    ];

    let selected: Locations = days[0];
    const select = (day) => () => {
        selected = day
        const map: HTMLDivElement = document.querySelector('#map')
        map.scrollIntoView()
    };

    let showPage = writable(true)

    let locationDIV: HTMLDivElement
    let scrollPercentage = 1
    let scrollTop = 0
    onMount( async () => {
        scrollPercentage = locationDIV.scrollTop / (locationDIV.scrollHeight - locationDIV.clientHeight)
        scrollTop = locationDIV.scrollTop
        locationDIV.onscroll = () => {
            scrollTop = locationDIV.scrollTop
            
            scrollPercentage = locationDIV.scrollTop / (locationDIV.scrollHeight - locationDIV.clientHeight)
        }

        const events = await getPublic(days.length.toString());
        for (const [i, event] of events.items.entries()) {  
            days[i].location = event.location;
            if (event.start.dateTime && event.end.dateTime) {
                days[i].times = parseTime(event.start?.dateTime, event.end?.dateTime);
            }
            if (event.attachments) days[i].src = constructExportUrl(event.attachments[0].fileId)
        }
    } )
</script>

<HeroHeader
  header="Our Location"
  quote="Come stop by for a bite. We'd be happy to see you."
  --url="url('/images/chicken_grill2.jpg')"
  --bg-pos="0 51%"
/>

{#if showPage}
    <main class="location">
        <section>
            <IntroHeading
                title="Our Location"
                body="We might be close by!"
                footer="Take a break from your routine with an invitation to explore new tastes."
            />
        </section>

        <section class="location__body">
            <div class="location__list" bind:this={locationDIV}>
                {#each days as day}
                    {#if day.location}
                        <Card
                            alt="flordia"
                            active={selected.day === day.day}
                            {...day}
                            on:click={select(day)}
                        />
                    {/if}
                {/each}

                <div class="location__list--overlay" style="--opacity: {1 - scrollPercentage}; --t-y: {scrollTop}px;" />
            </div>

            <div class="location__map">
                <Map address={selected.location} {showPage} />
            </div>
        </section>
    </main>
{:else}
    <section class="section">
        <div class="container">
            <h1>Uh, oh. <br /> Theirs no location data to show right now.</h1>
            <h2 class="subheading">Check back later as we update our schedule regularly.</h2>
        </div>
    </section>
{/if}

<style lang="scss">
    @use '../../lib/scss/0-helpers/vars' as *;
    @use '../../lib/scss/1-plugins/mquery' as mq;

    .location {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 84px;
        padding: 110px 20px;
        background: url("/images/background.jpg");

        &__body {
            width: 80%;
            display: flex;
            margin: 0 auto;
            gap: 90px;
            
            justify-content: center;
            align-items: center;

            @include mq.media("<1000px") {
                flex-direction: column-reverse;
                gap: 40px;
            }

            @include mq.media(">desktop") {
                width: 60%
            }
        }

        &__list {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 25px 16px;
            padding-right: 25px;
            gap: 30px;

            width: 100%;
            min-width: 300px;
            max-width: 450px;
            
            background: white;
            border-radius: 11px;

            height: 700px;
            overflow: hidden scroll;

            scrollbar-width: thin;
            scrollbar-color: $color-green #F1F1F1;

            &::-webkit-scrollbar {
                background: #F1F1F1;
                width: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background: $color-green;
                border-radius: 10px;
            }

            @include mq.media("<tablet") {
                height: auto;

                &--overlay {
                    display: none !important;
                }
            }

            &--overlay {
                opacity: var(--opacity);
                pointer-events: none;

                position: absolute;
                bottom: 0;

                background: linear-gradient(
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.7) 80%,
                    rgba(255, 255, 255, 1) 100%
                );

                width: 100%;
                transform: translateY( var(--t-y, 0px) );
                min-height: var(--overlay-height, 161px);
                transition: min-height 0.2s ease-in-out;
            }
        }

        &__map {
            --width: 280px;
            width: 100%;
            display: flex;
            justify-content: center;

            @include mq.media("<tablet") {
                --height: 300px
            }
        }
    }

    .container {
        text-align: center;
    }
    
    .subheading {
        font-size: 2rem;
    }

</style>