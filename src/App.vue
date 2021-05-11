<template>
  <div id="app">
<<<<<<< HEAD
    <!-- Carte Taille et Modif -->
    <l-map style="height: 500px; width: 500px;" :zoom="zoom" :center="center">
    <!-- Rappel url openstreetmap -->
    <l-tile-layer :url="url"></l-tile-layer>
    <!-- Marqueur Carte-->
    <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
>>>>>>> 9ce2fea36ae91ca7efaab53db82abfb01abc3770
  </div>
  
</template>

<<<<<<< HEAD
<script>
/* Importation components */
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
/* Importation icone marqueur*/
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

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

<style>

</style>
=======
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
>>>>>>> 9ce2fea36ae91ca7efaab53db82abfb01abc3770
