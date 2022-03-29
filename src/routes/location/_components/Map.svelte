<script lang="ts">
  import { browser } from '$app/env';
  import type { LatLngExpression, Map } from 'leaflet';
  import { afterUpdate, getContext, onMount, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let address: string;
  export let showPage = true;

  let map: Map;
  let leaflet;
  let markers = [];
  let iconMarker;

  const map_access_token =
    'pk.eyJ1Ijoid2VicmV2aXZlZCIsImEiOiJja3Q5djB4N3ExZm5lMndwbG9mYmw5b28zIn0.tMGZEaDUKymaWr0D28gnVA';

  async function getCordsFromAddress(address: string): Promise<LatLngExpression> {
    let longlat: LatLngExpression = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${map_access_token}&limit=1`
    )
      .then(res => res.json())
      .then(coords => {
        const coord = coords.features[0];
        return [coord.center[1], coord.center[0]];
      });

    return longlat;
  }

  function addTruckMarkerToMap(map: Map, cords: LatLngExpression) {
    // removes previous markers
    if (markers.length >= 1) {
      markers.forEach(marker => map.removeLayer(marker));
      markers = [];
    }

    markers.push(leaflet.marker(cords, { icon: iconMarker }));
    markers.push(
      leaflet.circle(cords, {
        radius: 50,
        color: '#9DC471',
        fill: true,
        fillColor: '#FFFFFF',
        fillOpacity: 0.3,
      })
    );
    markers.forEach(marker => marker.addTo(map));
  }

  function addFooterAttributionToMap(map: Map) {
    leaflet
      .tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        accessToken: map_access_token,
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 18,
      })
      .addTo(map);
  }

  onMount(async () => {
    try {
      if (!leaflet) {
        leaflet = await import('leaflet');

        iconMarker = leaflet.icon({
          iconUrl: '/icons/Marker.png',
          iconSize: [80, 80],
        });
      }

      /* Translate Address to Lat & Long for leaflet */
      let longlat = await getCordsFromAddress(address);

      /* Invalidate current leafletmap to avoid rerendering issues */
      let container = leaflet.DomUtil.get('map');
      if (container != null) {
        container._leaflet_id = null;
      }

      /* Initlize Map Object & Set Location */
      map = leaflet.map('map');
      map.setView(longlat, 13);
      map.setZoom(17);

      /* Add Bottom Right Footer Attribution */
      addFooterAttributionToMap(map);

      /* Add Truck Marker TO map */
      addTruckMarkerToMap(map, longlat);
    } catch (e) {
      console.error(e);
      showPage = false;
    }
  });

  $: if (address && map) {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${map_access_token}&limit=1`)
      .then(res => res.json())
      .then(coords => {
        const coord = coords.features[0];
        let longlat: LatLngExpression = [coord.center[1], coord.center[0]];

        map.setView(longlat, 13);
        map.setZoom(17);
        addTruckMarkerToMap(map, longlat);
      });
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""
  />
</svelte:head>

<div class="map">
  <div class="map__header">
    <img src="/icons/map_location.svg" alt="" />
    <h1>{address}</h1>
  </div>
  <div id="map" />
</div>

<style lang="scss">
  @use '../../../lib/scss/0-helpers/vars' as *;
  @use '../../../lib/scss/1-plugins/mquery' as mq;

  .map {
    position: relative;
    width: 100%;
    min-width: var(--width, 320px);
    max-width: 586px;
    height: var(--height, 516px);
    grid-area: map;

    .map__header {
      position: absolute;
      top: 25px;
      left: 80px;
      max-width: 40ch;

      // map has a rediculous z-indexing number
      z-index: 500;

      @include mq.media('<tablet') {
        top: unset;
        left: unset;
        right: 10px;
        bottom: 50px;
      }

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
        font-family: 'le-havre';
        transform: translateY(1px);
      }

      img {
        margin-right: 11px;
      }
    }
  }

  #map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: var(--width, 320px);
    max-width: 586px;
    height: var(--height, 516px);
    border-radius: 20px;
  }
</style>
