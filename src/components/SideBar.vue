<template>
  <div id="app">
    <Header />
    <div id="sideBar">
      <b-button v-b-toggle="'sideBar' + i.id">plus d'info</b-button>
      <b-sidebar width="390px" :id="'sideBar' + i.id" right shadow>
        <div class="logoName">
          <img :src="i.logo" />

          <h1>{{ i.name }}</h1>
        </div>

        <div class="container">
          <h4>Contact</h4>
          <p class="title">Adresse</p>
          <p>{{ i.adress }}</p>
          <p>telephone {{ i.phone }}</p>
          <p>E-Mail {{ i.email }}</p>
          <p>Site web {{ i.website }}</p>
          <p>facebook {{ i.facebook }}</p>
          <h4>Informations</h4>
          <p>Association {{ i.associations }}</p>
          <p>Categorie {{ i.category }}</p>
          <p>Activité {{ i.activity_area }}</p>
          <div class="description">
            <p>{{ i.description }}</p>
          </div>
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

#sideBar {
  padding: 0;
  width: fit-content;
  background-color: $BgWhite;
  .logoName {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 10px;
    img {
      width: 90px;
      height: 80px;
    }
  }
  .container {
    width: fit-content;
    text-align: left;

    h4 {
      text-align: center;
      font-size: 20px;
    }

    .description {
      text-align: justify;
      font-size: 14px;
    }
  }
}
</style>
