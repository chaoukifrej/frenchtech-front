<template>
  <div id="app">
    <Header />
    <div>
      <b-button v-b-toggle="'sideBar' + i.id">plus d'info</b-button>
      <b-sidebar
        width="500px"
        :id="'sideBar' + i.id"
        title="Sidebar"
        right
        shadow
      >
        <div class="px-3 py-2">
          <h1>name</h1>
          <span>logo</span>
          <h6>Adresse :</h6>
          <h6>Telephone :</h6>
          <h6>E-mail :</h6>
          <h6>Site internet :</h6>
          <h6>Association :</h6>
          <h6>Categorie :</h6>
          <h6>Secteurs d'activité :</h6>
          <h6>Facebook :</h6>
          <h6>description</h6>
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
</style>
