<script setup>
import { ref, onMounted } from "vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getDataFromDatabase, onDatabaseDataChange } from "../firebase";

const databaseData = ref({});
let mapContainer = ref(null);
const map = ref(null);
const mapboxToken =
  "pk.eyJ1IjoibnlqYSIsImEiOiJjbG1pZGRrZmIwbjI2M3JtZTNmYTFraXI4In0.NrAx6lDdsoXIfHg4K41e8w";

mapboxgl.accessToken = mapboxToken;

onMounted(async () => {
  try {
    const paths = [
      "locationCoordinate/latitude",
      "locationCoordinate/longitude",
    ];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData;
      });
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
});

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapContainer.value, // Use the ref here
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [0, 0], // default position
    zoom: 14, // starting zoom
  });

  // Check if the browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Update the map's center and add a marker to the current position
      updateLocation(position.coords.longitude, position.coords.latitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

const updateLocation = (lng, lat) => {
  console.log(`Current Longitude: ${lng}, Current Latitude: ${lat}`);

  new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.value);

  map.value.flyTo({
    center: [lng, lat],
    zoom: 14,
  });

  // firebase location coordinate and put a marker on it
  const firebaseLng = databaseData.value["locationCoordinate/longitude"];
  const firebaseLat = databaseData.value["locationCoordinate/latitude"];
  console.log(`Firebase Longitude: ${firebaseLng}, Firebase Latitude: ${firebaseLat}`);
  
  new mapboxgl.Marker().setLngLat([firebaseLng, firebaseLat]).addTo(map.value);
};
</script>

<template>
  <div ref="mapContainer" style="width: 100%; height: 400px"></div>
</template>
