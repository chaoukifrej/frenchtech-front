import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Inscription from "../views/Register.vue";
import Admin from "../views/Admin.vue";
import Connexion from "../views/Login.vue";
import Personelle from "../views/Personal.vue";
import Test from "../views/testInfo.vue";
import Token from "../token/Token.vue";
import TokenAdmin from "../token/TokenAdmin.vue";
import Canvas from "../views/testCanvas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/testcanvas",
    name: "Canvas",
    component: Canvas,
  },

  {
    path: "/testInfo",
    name: "Test",
    component: Test,
  },

  {
    path: "/Register",
    name: "Register",
    component: Inscription,
  },
  {
    path: "/Admin", //passage en props :isAdmin
    name: "Admin",
    component: Admin,
    beforeRouteUpdate: function(to, from, next) {
      if (this.isAdmin === true) {
        next();
      } else {
        next(false);
      }
    },
  },

  {
    path: "/Login",
    name: "Login",
    component: Connexion,
  },

  {
    path: "/Personal",
    name: "Personal",
    component: Personelle,
  },
  { path: "/getToken/:ml/:id", component: Token, props: true },
  { path: "/getTokenAdmin/:ml/:id", component: TokenAdmin, props: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
