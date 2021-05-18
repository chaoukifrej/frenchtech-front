<template>
  <div id="app">
    <Header />
    <div id="sideBar">
      <b-button v-b-toggle="'sideBar' + i.id">plus d'info</b-button>
      <b-sidebar width="390px" :id="'sideBar' + i.id" right shadow>
        <div class="container">
          <div class="logoName">
            <img :src="i.logo" />
            <div class="px-3 py-2">
              <div class="">
                <h1>{{ i.name }}</h1>
              </div>
            </div>
          </div>

          <h6>{{ i.adress }}</h6>
          <h6>{{ i.phone }}</h6>
          <h6>{{ i.mail }}</h6>
          <h6>{{ i.website }}</h6>
          <h6>{{ i.associations }}</h6>
          <h6>{{ i.category }}</h6>
          <h6>{{ i.activity_area }}</h6>
          <h6>{{ i.facebook }}</h6>

          <p>{{ i.description }}</p>
        </div>
      </b-sidebar>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "SideBar",
  inject: ["baseUrl"],
  props: ["i"],

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

.container {
  .logoName {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    img {
      width: 100px;
      height: 90px;
    }
  }

  h6 {
    width: 100%;
    margin: 0;
    text-align: justify;
  }
}
</style>
