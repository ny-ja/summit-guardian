<template>
  <div ref="mapContainer" style="width: 100%; height: 400px;" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';

const mapContainer = ref(null);

onMounted(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibnlqYSIsImEiOiJjbG1pZGRrZmIwbjI2M3JtZTNmYTFraXI4In0.NrAx6lDdsoXIfHg4K41e8w';

  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [120.9842, 14.5995], // Longitude and latitude of Manila, Philippines
    zoom: 10,
  });
});
</script>