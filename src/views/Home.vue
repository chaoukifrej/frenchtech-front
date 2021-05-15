<template>
  <div id="app">
        <Header/>
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
      <div v-for="i in item" :key="i.id">
        <Info :i="i" />
      </div>
    </div>
  </div>
    <Footer/>
  </div>
</template>

<script>
/* Importation components */
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
// Import header et footer
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Info from "@/components/Info.vue";

export default {
  name: "App",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    Header,
    Footer,
    Info
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

    name: "",
    associations: "",
    description: "",
    website: "",
    adress: "",
    dataTab: [],
  mounted() {
    this.axios

      .get(this.baseUrl + "api/GET/actors")

      .then(
        (response) => (
          this.dataTab.push(response.data.body.actors),
          console.log(this.dataTab)
        )
      );
  },
      
    };
  },
  

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

.map {
   height: 700px;
   width: 500px;
}

.blocCards {
  display: inline-block;
  height: 700px;
  width: 500px;
  background-color: lightcyan;
}
</style>
