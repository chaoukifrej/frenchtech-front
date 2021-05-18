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
          v-for="elem in actors"
          :key="elem.id"
          :lat-lng="[elem.longitude, elem.latitude]"
        >
          <l-tooltip>{{elem.name}}</l-tooltip>
          <l-icon>
          <img class="markerPin" src="img/pin-point.png" />
          </l-icon>
        </l-marker>
      </l-map>

      <div class="blocCards">
        <div class="displayCards" v-for="item in actors" :key="item.id">
            <CardInfo :i="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Importation components */
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "vue2-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
// Import header et footer
import Header from "@/components/Header.vue";
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: "App",
  inject: ["baseUrl"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LIcon,
    Header,
    CardInfo,
  },
  data() {
    return {
      /* url Carte */
      url:
        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png",

      center: [43.70496267989356, 7.271699366104521],
      /* Zoom de la carte*/
      zoom: 11,
    
      /* Centrage Coordonnées*/
      actors: [],
    };
  },

  mounted() {
    /* mounted pour recuperer les infos des Actors depuis la BDD */
    this.axios

      .get(this.baseUrl + "api/GET/actors")

      .then(
        (response) => {
          for (const elem of response.data.body.actors) {
            this.actors.push(elem);            
          }
          console.log(this.actors)
        }
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
      .markerPin{
        height:22px;
        width:22px;
      }
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
