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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    beforeEnter(to, from, next) {
      let isAdmin = "";
      localStorage.getItem("isAdmin") //Local Storage isAdmin
      ? (isAdmin = JSON.parse(localStorage.getItem("isAdmin")))
      : (isAdmin = false);
      if (isAdmin == true) {
        next()
      }else {
      next('/')
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
