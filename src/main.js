import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
/* Importation components */
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
/* Importation carte icone marqueur et css*/
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import InstantSearch from "vue-instantsearch";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.use(InstantSearch);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(Axios);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
