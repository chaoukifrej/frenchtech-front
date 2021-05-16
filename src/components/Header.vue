<template>
  <div class="header">
    <img class="logo" src="../../public/img/logo-blue.png" alt="logo" />
    <router-link v-show="isAdmin.value" to="/Admin">ADMIN</router-link>
  </div>
</template>

<script>
export default {
  inject: ["isAdmin"],

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
  height: 80px;
  padding: 12px 18px;
  background-color: $BgWhite;
  box-shadow: 0 3px 45px rgb(0 0 0 / 15%);
  .logo {
    height: 50px;
  }
}
</style>
