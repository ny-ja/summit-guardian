<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  data() {
    return {
      map: null,
      mapboxToken:
        "pk.eyJ1IjoibnlqYSIsImEiOiJjbG1pZGRrZmIwbjI2M3JtZTNmYTFraXI4In0.NrAx6lDdsoXIfHg4K41e8w",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.mapboxToken;
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [0, 0], // default position
      zoom: 14, // starting zoom
    });

    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Update the map's center and add a marker to the current position
        this.updateLocation(
          position.coords.longitude,
          position.coords.latitude
        );
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    updateLocation(lng, lat) {
      console.log(`Current Longitude: ${lng}, Current Latitude: ${lat}`); // This line will print the current longitude and latitude

      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(this.map);

      this.map.flyTo({
        center: [lng, lat],
        zoom: 14, // adjust the zoom level as needed
      });
    },
  },
};
</script>

<template>
  <div ref="map" style="width: 100%; height: 400px"></div>
</template>
