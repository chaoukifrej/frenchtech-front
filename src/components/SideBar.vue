<template>
  <div id="app">
    <Header />

    <div class="mainContainer">
      <b-button class="stretched-link" v-b-toggle="'sideBar' + i.id">plus d'info</b-button>
      <b-sidebar class="sideBar" width="35%" :id="'sideBar' + i.id" right shadow>
        <div class="header">
          <h4>{{ i.name }}</h4>
          <h6>{{ i.category }}/</h6>
          <h6>/{{ i.associations }}</h6>
        </div>
        <div class="img">
          <img :src="i.logo" />
        </div>
        <p>{{ i.description }}</p>
        <div class="info">
          <div class="design-info">
            <font-awesome-icon icon="globe" />
            <div>
              <p>{{ i.website }}</p>
            </div>
          </div>
          <div class="design-info">
            <font-awesome-icon icon="phone" />
            <div>
              <p>{{ i.phone }}</p>
            </div>
          </div>
          <div class="design-info">
            <font-awesome-icon icon="envelope" />
            <div>
              <p>{{ i.email }}</p>
            </div>
          </div>
          <div>
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div>
            <p>{{ i.adress }}</p>
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

.mainContainer {
  display: flex;

  .header {
    padding: 0;
    justify-content: center;

    h4 {
      margin-right: 20px;
    }
    h6 {
      color: $secondary;
    }
  }

  .img {
    width: 200px;
    width: 100%;
    text-align: center;

    img {
      margin: 0;
      width: 200px;
    }
  }

    button.btn.btn-secondary {
    height: 0;
    width: 0;
    padding: 0;
    border: none;
    color: transparent;
    :focus {
      box-shadow: transparent;
    }
    :hover {

    }
  }

  .info {
    display: flex;
    flex-direction: column;

    .design-info {
      display: flex;

      div {
        padding-left: 10px;
        align-items: center;

        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
