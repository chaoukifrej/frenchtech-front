import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Inscription from "../views/Register.vue";
import Connexion from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Register",
    name: "Register",
    component: Inscription,
  },

  {
    path: "/Login",
    name: "Login",
    component: Connexion,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
