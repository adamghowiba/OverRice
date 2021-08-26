
<script context="module">
    const map_access_token = 'pk.eyJ1IjoieW9mb3UiLCJhIjoiY2tzczJqb280MGxhbTJwcG45cWc0NHlwZCJ9.2hKVc9lmM44IEYkntKo1zQ'
    const location_access_token = 'pk.7fef55da73caed030a10d6ef78275084'
</script>

<script lang="ts">
    import { afterUpdate } from 'svelte';

    export let address: string

    let map;
    let leaflet;
    let markers = [];
    let iconMarker; 
    afterUpdate ( async () => {
        // we have to import leaflet this way, as leaflet uses they window object
        // on import, which is only available after we mounted.
        if (!leaflet) {
            leaflet = await import( 'leaflet/dist/leaflet' )
            
            iconMarker = leaflet.icon({
                iconUrl: '/icons/Marker.png',
                iconSize: [80, 80]
            })
        }
        
        let longlat = await fetch(`https://us1.locationiq.com/v1/search.php?key=${location_access_token}&q=${address}&format=json`)
            .then( res => res.json() )
            .then( coords => {
                const coord = coords[0]
                return [coord.lat, coord.lon]
            })

        if (!map) map = leaflet.map("map") 
        map.setView(longlat, 13);
        map.setZoom(17)
        
        leaflet.tileLayer(
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
            {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/streets-v11',
                accessToken: map_access_token,
                tileSize: 512,
                zoomOffset: -1,
                maxZoom: 18,
            }
        )
        .addTo(map)
        
        // removes previous markers
        if (markers.length >= 1) {
            markers.forEach( marker => map.removeLayer( marker ) )
            markers = []
        }

        markers.push( leaflet.marker(longlat, { icon: iconMarker }) )
        markers.push( leaflet.circle(longlat, { 
            radius: 50, 
            color: '#9DC471', 
            fill: true, 
            fillColor: '#FFFFFF', 
            fillOpacity: 0.3 
        }) )
        markers.forEach( marker => marker.addTo(map) );
    } )
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
</svelte:head>

<div class="map">
    <div class="map__header">
        <img src="/icons/map_location.svg" alt="">
        <h1>{address}</h1>
    </div>
    <div id="map" />
</div>

<style lang="scss">

    @use '../../../lib/scss/0-helpers/vars' as *;

    .map {
        position: relative;

        .map__header {
            position: absolute;
            top: 25px;
            left: 80px;

            // map has a rediculous z-indexing number
            z-index: 500;

            background: rgba(white, 0.3);
            border-radius: 11px;
            border: 2px solid $color-green;
            
            display: flex;
            width: max-content;
            padding: 8px;

            h1 {
                font-size: 1rem;
                color: $color-text;
                align-self: center;
                font-weight: 400;
                font-family: 'Le Havre';
                transform: translateY(1px);
            }

            img { margin-right: 11px; }
        }
    }

    #map {
        position: absolute;
        top: 0;
        left: 0;
        width: var(--width, 586px);
        height: var(--height, 516px);
        border-radius: 20px;
    }
</style>
