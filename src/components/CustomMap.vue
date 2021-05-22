<template>
  <div>
    <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:center="centerUpdated"
      @update:zoom="zoomUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.coords"
      >
        <l-popup
          ><strong>{{ marker.name }}</strong>
          <p>{{ marker.description }}</p></l-popup
        >
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";

export default {
  inject: ["baseUrl"],
  component: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },

  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [43.73107027605512, 7.421107368028565],
      zoom: 24,
      markers: [
        {
          name: "Entreprise 1",
          description: "Une description",
          id: 1,
          coords: [43.73107027605512, 7.421107368028565],
        },
        {
          name: "Entreprise 2",
          description: "Une description",
          id: 2,
          coords: [43.730744765625076, 7.423296078075408],
        },
      ],
    };
  },

  // mounted() {
  //   /* mounted pour recuperer les infos des Actors depuis la BDD */
  //   this.axios

  //     .get(this.baseUrl + "api/GET/actors")

  //     .then(
  //       (response) => (
  //         this.markers.push(response.data.body.actors),
  //         console.log(this.markers)
  //       )
  //     );
  // },
  methods: {
    centerUpdated(center) {
      this.center = center;
      console.log(this.center);
    },

    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.zoom);
    },
  },
};
</script>

<style scoped>
.icon {
  width: 40px;
}
.map {
  height: calc(100vh - 80px);
  width: 70%;
}
</style>
