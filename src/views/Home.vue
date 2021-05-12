<template>
  <div id="app">
        <Header/>
    <!-- Carte Taille et Modif -->
    <l-map style="height: 500px; width: 500px;" :zoom="zoom" :center="center">
      <!-- Rappel url openstreetmap -->
      <l-tile-layer :url="url"></l-tile-layer>
      <!-- Marqueur Carte-->
      <l-marker :lat-lng="markerLatLng">
        <l-popup>
          <h1>Bocal</h1>
          <p style="text-align: center">Start-Up</p>
        </l-popup>
      </l-marker>
    </l-map>

    <Footer/>
  </div>
</template>

<script>
/* Importation components */
<<<<<<< HEAD
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
=======
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
>>>>>>> 3a4ed1dafa585a69dc50004b16668b0ddd3700d8

export default {
  name: "App",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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

      Entreprises: "Entreprises",
    };
  },

<<<<<<< HEAD
  methods: {
          Header,
    Footer
    },
}


=======
  methods: {},
};
>>>>>>> 3a4ed1dafa585a69dc50004b16668b0ddd3700d8
</script>

<style lang="scss" scoped></style>>
