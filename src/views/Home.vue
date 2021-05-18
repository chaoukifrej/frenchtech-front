<template>
  <div id="app">
    <Header />

    <div class="mainContainer">
      <!-- Carte Taille et Modif -->
      <l-map class="map" :zoom="zoom" :center="center">
        <!-- Rappel url openstreetmap -->
        <l-tile-layer :url="url"></l-tile-layer>
        <!-- Marqueur Carte-->
        <l-marker
          v-for="marker in markers"
          :key="marker.id"
          :lat-lng="marker.coords"
        >
          <l-popup>
            <h4>{marker.name}</h4>
          </l-popup>
        </l-marker>
      </l-map>

      <div class="blocCards">
        <div class="displayCards" v-for="item in dataTab" :key="item.index">
          <div v-for="index in item" :key="index.id">
            <!-- i correspond a la props / index correspond a l'iteration du 2 Tab -->
            <CardInfo :i="index" />
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
// Import header et CardInfo
import Header from "@/components/Header.vue";
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: "App",
  inject: ["baseUrl"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    Header,
    CardInfo,
  },
  data() {
    return {
      /* url Carte */
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

      center: [43.70496267989356, 7.271699366104521],
      /* Zoom de la carte*/
      zoom: 10,
      /* Centrage Coordonnées*/
      markers: [
        {
          id: 1,
          coords: [43.697019736267464, 7.264447863354882],
          name: "Name 1",
          description: "Description 1",
        },
        {
          id: 2,
          coords: [43.69937769585799, 7.264833645481825],
          name: "Name 2",
          description: "Description 2",
        },
      ],

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

body {
  height: 100vh;
  margin: 0;
  padding: 0;

  .mainContainer {
    display: flex;
    height: 100%;
    margin: 0;

    .map {
      height: calc(100vh - 80px);
      width: 70%;
    }

    .blocCards {
      height: calc(100vh - 80px);
      width: 30%;
      background-color: $BgWhite;
      overflow-y: auto;
      overflow-x: hidden;
      margin: 0;

      .displayCards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
</style>
