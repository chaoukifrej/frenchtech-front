
<template>
  <div id="app">
    <!-- Carte Taille et Modif -->
    <v-icondefault :image-path="'/statics/leafletImages/'"></v-icondefault>
    <l-map style="height: 500px; width: 500px;" :zoom="zoom" :center="center">
    <!-- Rappel url openstreetmap -->
    <l-tile-layer :url="url"></l-tile-layer>
    <!-- Marqueur Carte-->
    <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
  </div>
</template>

<script>
/* Importation components */
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


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
      markerLatLng: [43.6961, 7.27178]
    }
  },
} 
</script>

<style lang="scss" scoped>

</style>>

