<template>
  <div id="app">
    <Header />

    <div class="mainContainer">
      <!-- Carte Taille et Modif -->
      <l-map class="map" :zoom="zoom" :center="center">
        <!-- Rappel url openstreetmap -->
        <l-tile-layer :url="url"></l-tile-layer>
        <!-- Marqueur Carte-->
        <l-marker :lat-lng="markerLatLng">
          <l-popup :Entreprises="Entreprises"></l-popup>
        </l-marker>
      </l-map>

      <div class="blocCards">
        <div v-for="item in dataTab" :key="item">
          <div v-for="index in item" :key="index.id">
            <!-- i correspond a la props / index correspond a l'iteration du 2 Tab -->
            <Info :i="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Importation components */
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

// Import header et footer
import Header from "@/components/Header.vue";
import Info from "@/components/Info.vue";

export default {
  name: "App",
  inject: ["baseUrl"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    Header,
    Info,
  },
  data() {
    return {
      /* url Carte */
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      /* Zoom de la carte*/
      zoom: 10,
      /* Centrage Coordonnées*/
      center: [43.6961, 7.27178],
      /* Marqueur Coordonnées*/
      markerLatLng: [43.6961, 7.27178],

      Entreprises: ["Bocal", "Start-up"],

      dataTab: [],
    };
  },

  mounted() {
    /* mounted pour recuperer les infos des Actors depuis la BDD */
    this.axios

      .get(this.baseUrl + "api/GET/actors")

      .then(
        (response) => (
          this.dataTab.push(response.data.body.actors),
          console.log(this.dataTab)
        )
      );
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.mainContainer {
  display: flex;

  .map {
    height: 700px;
    width: 60%;
    margin-left: 5px;
  }

  .blocCards {
    height: 700px;
    width: 40%;
    background-color: $BgWhite;
    overflow: scroll;
    overflow-x: hidden;
  }
}
</style>
