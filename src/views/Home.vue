
<template>
  <div id="app">
        <Header/>
    <!-- Carte Taille et Modif -->
    <v-icondefault :image-path="'/statics/leafletImages/'"></v-icondefault>
    <l-map style="height: 500px; width: 500px;" :zoom="zoom" :center="center">
    <!-- Rappel url openstreetmap -->
    <l-tile-layer :url="url"></l-tile-layer>
    <!-- Marqueur Carte-->
    <l-marker :lat-lng="markerLatLng" >
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
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
 
  mounted() {
      this.$nextTick(() => {
        this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
    })
    
  },
  name: 'App',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data () {
    return {
      /* url Carte */
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      /* Zoom de la carte*/
      zoom: 10,
      /* Centrage Coordonnées*/
      center: [43.6961, 7.27178],
      /* Marqueur Coordonnées*/
      markerLatLng: [43.6961, 7.27178],

      Entreprises: "Entreprises",
      
    }
  },

  methods: {
          Header,
    Footer
    },
}


</script>

<style lang="scss" scoped>

</style>>

