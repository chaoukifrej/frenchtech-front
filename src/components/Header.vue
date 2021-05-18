<template>
  <div class="header">
    <a href="/">
      <img class="logo" src="../../public/img/logo-blue.png" alt="logo" />
    </a>
    <div>
      <nav>
        <router-link v-show="isConnected.value == false" to="/Login"
          >Login</router-link
        >
        <router-link v-show="isAdmin.value" to="/Admin">Admin</router-link>
        <router-link v-show="isAdmin.value == false" to="/Personal"
          >Personal</router-link
        >
        <router-link v-show="isConnected.value == false" to="/Register"
          >Register</router-link
        >
        <a v-show="isAdmin.value" @click="disconnectAdmin">Déconnexion</a>
        <a v-show="isConnected.value && isAdmin.value == false" @click="disconnect">Déconnexion</a>

        <router-link to="/testInfo">testInfo</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["isAdmin", "isConnected", "token", "baseUrl", "disconnectAdmin","disconnect"],
  name: "Header",
  props: {},
  methods: {},
};
</script>

<style lang="scss">
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      :hover {
        color: #e52345;
      }
    }
  }
  height: 80px;
  padding: 12px 18px;
  background-color: $BgWhite;
  box-shadow: 0 3px 45px rgb(0 0 0 / 15%);
  .logo {
    height: 50px;
    cursor: pointer;
  }
}
</style>
