import Vue from "vue";
import App from "./App.vue";
<<<<<<< HEAD
import Axios from "axios";
/* Importation components */
=======
import axios from "axios";
>>>>>>> 9ce2fea36ae91ca7efaab53db82abfb01abc3770
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
/* Importation carte icone marqueur et css*/
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import InstantSearch from "vue-instantsearch";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import router from './router'

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.use(InstantSearch);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
