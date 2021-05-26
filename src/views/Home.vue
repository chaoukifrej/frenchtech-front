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
          <span v-if="elem.filteredByCat && elem.filteredByAssoc">
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
                v-if="elem.associations == 'NiceStartsUp'"
                class="rounded-circle bg-danger  h4"
                icon="circle-fill"
                variant="light"
                scale="0.5"
              ></b-icon>
              <b-icon
                v-if="elem.associations == 'cannesIsUp'"
                class="rounded-circle bg-primary  h4"
                icon="circle-fill"
                variant="light"
                scale="0.5"
              ></b-icon>
              <b-icon
                v-if="elem.associations == 'clubGrasse'"
                class="rounded-circle bg-success  h4"
                icon="circle-fill"
                variant="light"
                scale="0.5"
              ></b-icon>
              <b-icon
                v-if="elem.associations == 'telecomValley'"
                class="rounded-circle bg-warning  h4"
                icon="circle-fill"
                variant="light"
                scale="0.5"
              ></b-icon>
            </l-icon>
          </span>
          <span v-else>
            <l-icon></l-icon>
          </span>
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
          <div row>
            <div>
              <select
                id="inputAssociation"
                class="form-select mt-2 selectSearch"
                @click="filterByAssociation"
                v-model="filterByAssociationSelected"
              >
                <option selected value="labelAssociation"
                  >Filtrer par association</option
                >
                <option value="cannesIsUp">Cannes Is Up</option>
                <option value="clubGrasse">
                  Le club des entrepreneurs du pays de Grasse
                </option>
                <option value="NiceStartsUp">Nice Starts-up</option>
                <option value="telecomValley">Telecom Valley</option>
              </select>
            </div>
            <div>
              <select
                id="inputCategory"
                class="form-select mt-2 selectSearch"
                @click="filterByCategory"
                v-model="filterByCategorySelected"
              >
                <option selected value="labelCategory"
                  >Filtrer par catégorie</option
                >
                <option value="startUp">Start-up</option>
                <option value="association">Association</option>
                <option value="organismeFinanceur">Organisme financeur</option>
                <option value="organismeDeFormation"
                  >Organisme de formation</option
                >
                <option value="servicePublic">Service public</option>
                <option value="tpePme">TPE/PME</option>
                <option value="eti">Grande entreprises/Grand groupe/ETI</option>
                <option value="poleDeCompetitivite"
                  >Pole de compétitivité</option
                >
              </select>
            </div>
          </div>
        </div>
        <div class="cardContainer">
          <div class="displayCards" v-for="item in results" :key="item.id">
            <span v-if="item.filteredByCat && item.filteredByAssoc">
              <CardInfo :i="item" />
            </span>
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
      //Fonction de filtre sur select
      filterByAssociationSelected: "labelAssociation",
      filterByCategorySelected: "labelCategory",
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
        elem.filteredByCat = true;
        elem.filteredByAssoc = true;
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
    filterByAssociation() {
      console.log(this.filterByAssociationSelected);
      this.actors.forEach((elem) => {
        if (this.filterByAssociationSelected == "labelAssociation") {
          elem.filteredByAssoc = true;
        } else if (elem.associations != this.filterByAssociationSelected) {
          elem.filteredByAssoc = false;
        } else {
          elem.filteredByAssoc = true;
        }
      });
    },
    filterByCategory() {
      console.log(this.filterByCategorySelected);
      this.actors.forEach((elem) => {
        if (this.filterByCategorySelected == "labelCategory") {
          elem.filteredByCat = true;
        } else if (elem.category != this.filterByCategorySelected) {
          elem.filteredByCat = false;
        } else {
          elem.filteredByCat = true;
        }
      });
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
      .selectSearch {
        cursor: pointer;
      }
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
