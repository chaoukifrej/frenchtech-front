<template>
  <div id="app">
    <Header />

    <div class="mainContainer">
      <b-button class="stretched-link" v-b-toggle="'sideBar' + i.id"
        >plus d'info</b-button
      >
      <b-sidebar
        class="sideBar"
        width="35%"
        :id="'sideBar' + i.id"
        right
        shadow
      >
        <div class="header">
          <h4>{{ i.name }}</h4>
          <div>
            <p>{{ i.category }}</p>
            <p>{{ i.associations }}</p>
          </div>
        </div>
        <div class="img">
          <img :src="i.logo" />
        </div>
        <div class="infos">
          <!--INFOS-->
          <p>{{ i.description }}</p>
          <!-- // -->
          <div class="infos2">
            <div class="line-info">
              <b-icon class="info-icon m-1 " icon="globe" scale="1"></b-icon>
              <div class="info-text">
                <p>{{ i.website }}</p>
              </div>
            </div>
            <div class="line-info">
              <b-icon class="info-icon m-1" icon="telephone" scale="1"></b-icon>
              <div class="info-text">
                <p>{{ i.phone }}</p>
              </div>
            </div>
            <div class="line-info">
              <b-icon class="info-icon m-1" icon="envelope" scale="1"></b-icon>
              <div class="info-text">
                <p>{{ i.email }}</p>
              </div>
            </div>
            <div class="line-info">
              <b-icon class="info-icon m-1" icon="geo-alt" scale="1"></b-icon>
              <div class="info-text">
                <p>{{ i.adress }}</p>
              </div>
            </div>
          </div>

          <div class="socials">
            <b-icon icon="linkedin" scale="1"></b-icon>
            <b-icon icon="facebook" scale="1"></b-icon>
            <b-icon icon="twitter" scale="1"></b-icon>
            <b-icon icon="instagram" scale="1"></b-icon>
          </div>
        </div>
      </b-sidebar>
    </div>
    <Footer />
  </div>
</template>

<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from "bootstrap-vue";

export default {
  name: "SideBar",
  inject: ["baseUrl"],
  props: ["i"],
  components: {
    BIcon,
    BIconArrowUp,
    BIconArrowDown,
  },

  data: () => ({
    dataTab: [],
  }),

  methods: {},
};
</script>

<style lang="scss" scoped>
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.mainContainer {
  display: flex;

  button.btn.btn-secondary {
    height: 0;
    width: 0;
    padding: 0;
    border: none;
    color: transparent;
    :focus {
      box-shadow: transparent;
    }
  }

  .sideBar {
    .header {
      margin-left: 20px;
      color: $primary;
      background-color: none;
      p {
        padding: 0;
        margin: 0;
      }
    }
    .img {
      text-align: center;
      img {
        width: 20rem;
      }
    }
    .infos {
      margin: 30px 50px;
      .infos2 {
        margin-left: 30px;
      }
      .line-info {
        display: flex;
        flex-direction: row;
      }
    }

    .socials {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 4rem;
    }
  }
}
</style>
