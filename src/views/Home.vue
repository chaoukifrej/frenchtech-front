<template>
  <div id="home">
    <Header />
    <MetricsHome />
    <div class="mainContainer">
      <!-- Carte Taille et Modif -->
      <l-map
        class="map"
        :zoom="zoom"
        :center="center"
        :options="{ zoomControl: false }"
      >
        <!-- Rappel url openstreetmap -->
        <l-tile-layer :url="url"></l-tile-layer>
        <l-control-zoom position="bottomright"></l-control-zoom>
        <l-geo-json
          :optionsStyle="geoJsonStyle"
          :geojson="geojson"
        ></l-geo-json>
        <!-- Marqueur Carte-->
        <l-marker
          v-for="elem in actors"
          :key="elem.id"
          :lat-lng="[elem.longitude, elem.latitude]"
          @click="sayHello(elem.id)"
        >
          <l-tooltip>{{ elem.name }}</l-tooltip>
          <l-icon>
            <b-icon
              class="rounded-circle bg-danger p-1"
              icon="circle-fill"
              variant="light"
              animation="throb"
              scale="1.5"
            ></b-icon>
          </l-icon>
        </l-marker>
      </l-map>

      <div class="blocCards">
        <div class="displaySearch">
          la fonction de recherche est ici
        </div>
        <div class="cardContainer">
          <div class="displayCards" v-for="item in actors" :key="item.id">
            <CardInfo :i="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Importation components */
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LIcon,
  LGeoJson,
  LControlZoom,
} from "vue2-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

// Import header et CardInfo
import Header from "@/components/Header.vue";
import CardInfo from "@/components/CardInfo.vue";
//Metriques
import MetricsHome from "@/components/MetricsHome.vue";

export default {
  name: "App",
  inject: ["baseUrl", "token", "isAdmin", "isConnected"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LIcon,
    LGeoJson,
    LControlZoom,
    Header,
    CardInfo,
    MetricsHome,
  },
  data() {
    return {
      /* url Carte */
      url:
        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      //url: "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",

      center: [43.70496267989356, 7.271699366104521],
      /* Zoom de la carte*/
      zoom: 11,

      //GeoZone
      geojson: null,
      geoJsonStyle: {
        color: "rgba(0, 0, 0, 0.3)",
        weight: 1,
      },
      /* Centrage Coordonnées*/
      actors: [],
    };
  },

  async created() {
    const response = await fetch(
      "https://rawgit.com/gregoiredavid/france-geojson/master/departements/06-alpes-maritimes/departement-06-alpes-maritimes.geojson"
    );
    this.geojson = await response.json();
  },

  mounted() {
    /* mounted pour recuperer les infos des Actors depuis la BDD */
    this.axios.get(this.baseUrl + "api/GET/actors").then((response) => {
      for (const elem of response.data.body.actors) {
        this.actors.push(elem);
      }
      //console.log(this.actors);
    });
  },
  created() {
    if (this.isAdmin.value) {
      let url = `${this.baseUrl}api/checkAdmin`;
      this.axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + this.token.value,
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response.status);
        })
        .catch(() => {
          this.token.value == "";
          this.isAdmin.value = false;
          this.isConnected.value = false;
        });
    } else {
      let url = `${this.baseUrl}api/checkActor`;
      this.axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + this.token.value,
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response.status);
        })
        .catch(() => {
          this.token.value == "";
          this.isAdmin.value = false;
          this.isConnected.value = false;
        });
    }
  },

  methods: {
    sayHello: function(id) {
      this.$root.$emit("bv::toggle::collapse", "sideBar" + id);
    },
  },
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
  box-sizing: border-box;
  overflow: hidden;
}
#home {
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.mainContainer {
  display: flex;
  height: calc(100vh - 80px);
  margin: 0;

  .map {
    height: 100%;
    width: 100%;
  }

  .blocCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    width: 50rem;
    background-color: $BgWhite;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    .displaySearch {
      height: 150px;
      width: 100%;
      background-color: white;
      padding: 35px 15px;
    }
    .cardContainer {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 25px 0;
    }
  }
}
</style>
