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
          v-for="elem in results"
          :key="elem.id"
          :lat-lng="[elem.longitude, elem.latitude]"
          @click="sayHello(elem.id)"
        >
          <l-tooltip class="leaflet-pane leaflet-tooltip-pane">
            <img
              class="img-logo"
              :src="elem.logo"
              style="height: 40px;
              width: auto;
              margin: 2px 0 15px 0"
            />
            <div class="tooltip-name">{{ elem.name }}</div>
            <div class="tooltip-website">{{ elem.website }}</div>
          </l-tooltip>
          <l-icon>
            <b-icon
              class="rounded-circle bg-danger p-1"
              icon="circle-fill"
              variant="light"
              scale="1.5"
            ></b-icon>
          </l-icon>
        </l-marker>
      </l-map>

      <div class="blocCards">
        <div class="displaySearch">
          <vue-fuse
            id="fuseInput"
            class="w-100"
            :list="actors"
            :fuseOpts="opts"
            mapResults
            placeholder="Recherchez par nom, catégorie..."
            @fuse-results="getResults"
          />
          <Search />
        </div>
        <div class="cardContainer">
          <div class="displayCards" v-for="item in results" :key="item.id">
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
//Recherche
import Search from "@/components/Search.vue";
import VueFuse from "vue-fuse";
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
    Search,
    VueFuse,
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

      //Fonction de recherche
      results: [],
      opts: {
        keys: [
          "name",
          "category",
          "associations",
          "activity_area",
          "city",
          "postal_code",
        ],
        minMatchCharLength: 1,
        shouldSort: true,
        threshold: 0.1,
      },
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
    getResults(event) {
      //this.results = event;
      this.results = [];
      for (const elem of event) {
        this.results.push(elem);
      }
    },
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
    width: 65vw;
  }
  .leaflet-pane {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    background: white;
    .tooltip-name {
      font-weight: 700;
      color: $primary;
    }
    .tooltip-website {
      color: $secondary;
    }
  }

  .blocCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    width: 35vw;
    background-color: $BgWhite;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    .displaySearch {
      position: sticky;
      top: 0;
      height: 170px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      padding: 20px 10px;
      z-index: 100;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    .cardContainer {
      width: 100%;
      height: calc(100vh - 170px - 80px);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 5px 0;
    }
  }

  #fuseInput {
    outline: none;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.308);
    padding: 6px;
    &:focus {
      box-shadow: 0 0 1px 4px rgba(91, 162, 255, 0.4);
      border: 1px solid rgba(64, 163, 255, 0.6);
    }
  }
}
</style>
