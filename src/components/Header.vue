<template>
  <div class="header">
<<<<<<< HEAD
      <a href="/">
      <img class="logo" src="../../public/img/logo-blue.png" alt="logo">
      </a>
      <div>
          <nav>
              <ul>
                  <li> <a href="/Login">Login</a> </li>
                  <li> <a href="/Admin">Admin</a> </li>
                  <li> <a href="/Personal">Personal</a> </li>
                  <li> <a href="/Register">Register</a> </li>
                  <li> <a href="/testInfo">testInfo</a> </li>
              </ul>
          </nav>
      </div>
=======
    <img class="logo" src="../../public/img/logo-blue.png" alt="logo" />
    <router-link v-show="isAdmin.value" to="/Admin">ADMIN</router-link>
>>>>>>> 09488024c99b47b34a12586cc6b5a4656ab5643d
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
<<<<<<< HEAD
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        li, a{
            display: inline-block;
            padding: 0 20px;
            text-decoration: none;
            color: $primary;
            list-style: none;
            cursor: pointer;
            transition: all 0.3s ease 0s;
            :hover{
                color: #e52345;
            }
        }
    }
    height: 80px;
    padding: 12px 18px;
    background-color: $BgWhite;
    box-shadow :0 3px 45px rgb(0 0 0 / 15%);
    .logo {
        height: 50px;
        cursor: pointer;
    }
=======
  height: 80px;
  padding: 12px 18px;
  background-color: $BgWhite;
  box-shadow: 0 3px 45px rgb(0 0 0 / 15%);
  .logo {
    height: 50px;
  }
>>>>>>> 09488024c99b47b34a12586cc6b5a4656ab5643d
}
</style>
