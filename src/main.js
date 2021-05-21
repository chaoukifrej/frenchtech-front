import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LIcon,
  LGeoJson,
} from "vue2-leaflet";
/* Importation carte icone marqueur et css*/
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import InstantSearch from "vue-instantsearch";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueRouter from "vue-router";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(faUserSecret);
library.add(faGlobe);
library.add(faPhone);
library.add(faEnvelope);
library.add(faMapMarkerAlt);
library.add(faTwitter);
library.add(faFacebookF);
library.add(faLinkedinIn);

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-geo-json", LGeoJson);
Vue.component("l-tooltip", LTooltip);
Vue.component("l-icon", LIcon);
Vue.component("fa", FontAwesomeIcon);

Vue.use(InstantSearch);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
