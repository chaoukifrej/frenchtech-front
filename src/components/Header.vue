<template>
  <div class="headerContainer">
    <a href="/">
      <img class="logo" src="../../public/img/logo-blue.png" alt="logo" />
    </a>
    <h5 v-show="isAdmin.value && $route.name == 'Admin'" class="HeaderTitle">
      Espace administrateur
    </h5>
    <div>
      <nav>
        <router-link v-show="$route.name != 'Home'" to="/"
          ><b-icon class="mx-1" icon="house-door-fill"></b-icon
          >Accueil</router-link
        >
        <router-link
          v-show="isConnected.value == false && $route.name != 'Login'"
          to="/Login"
          ><b-icon class="mx-1" icon="person-circle"></b-icon>Se
          connecter</router-link
        >
        <router-link
          v-show="isAdmin.value && $route.name != 'Admin'"
          to="/Admin"
          ><b-icon class="mx-1" icon="gear-fill"></b-icon>
          Administration</router-link
        >
        <router-link
          v-show="
            isAdmin.value == false &&
              isConnected.value &&
              $route.name != 'Personal'
          "
          to="/Personal"
        >
          <b-icon class="mx-1" icon="person-circle"></b-icon>Mon
          profil</router-link
        >
        <router-link
          v-show="isConnected.value == false && $route.name == 'Login'"
          to="/Register"
          ><b-icon class="mx-1" icon="person-circle"></b-icon>
          S'enregistrer</router-link
        >
        <b-button
          v-show="isConnected.value && isAdmin.value == false"
          @click="disconnectConfirm"
        >
          <b-icon class="mx-1" icon="power" aria-hidden="true"></b-icon
          >Déconnexion</b-button
        >
        <b-button v-show="isAdmin.value" @click="disconnectConfirmAdmin">
          <b-icon class="mx-1" icon="power" aria-hidden="true"></b-icon
          >Déconnexion</b-button
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  inject: [
    "isAdmin",
    "isConnected",
    "token",
    "baseUrl",
    "disconnectAdmin",
    "disconnect",
  ],
  name: "Header",
  props: {},
  methods: {
    disconnectConfirm() {
      this.$bvModal
        .msgBoxConfirm("Êtes vous sûr de vouloir vous déconnectez ?", {
          okVariant: "success",
          okTitle: "Confirmer",
          cancelTitle: "Annuler",
          footerClass: "p-2",
          hideHeaderClose: false,
        })
        .then((value) => {
          if (value) {
            this.disconnect();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    disconnectConfirmAdmin() {
      this.$bvModal
        .msgBoxConfirm("Êtes vous sûr de vouloir vous déconnectez ?", {
          okVariant: "success",
          okTitle: "Confirmer",
          cancelTitle: "Annuler",
          footerClass: "p-2",
          hideHeaderClose: false,
        })
        .then((value) => {
          if (value) {
            this.disconnectAdmin();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.headerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 12px 18px;
  background-color: $BgWhite;
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  .HeaderTitle {
    color: rgba(0, 0, 0, 0.541);
    padding: 0;
    margin: 0 0 0 10%;
  }
  nav {
    li,
    a {
      display: inline-block;
      padding: 0 20px;
      text-decoration: none;
      color: $primary;
      list-style: none;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      /*       :hover {
        color: #e52345;
      } */
    }
  }
  .logo {
    height: 50px;
    cursor: pointer;
  }
}
</style>
