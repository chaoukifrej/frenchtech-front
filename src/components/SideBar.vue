<template>
  <div id="app">
    <Header />

<<<<<<< HEAD
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
=======
    <b-button v-b-toggle="'sideBar' + i.id">plus d'info</b-button>
    <b-sidebar width="400px" :id="'sideBar' + i.id" right shadow>
      <div class="header">
        <h4>{{ i.name }}</h4>
        <h6>{{ i.category }}/</h6>
        <h6>/{{ i.associations }}</h6>
      </div>
      <div class="img">
        <img :src="i.logo" />
      </div>
      <div class="description">
>>>>>>> a0e3ff92c89d8a6db9bade1e8e2d378ad68df538
        <p>{{ i.description }}</p>
      </div>

      <div class="container">
        <font-awesome-icon class="fontIcon" icon="globe" />{{ i.website }}
        <font-awesome-icon class="fontIcon" icon="phone" />{{ i.phone }}
        <font-awesome-icon class="fontIcon" icon="envelope" />{{ i.email }}
        <font-awesome-icon class="fontIcon" icon="map-marker-alt" />{{
          i.adress
        }}
      </div>

      <div class="link">
        <font-awesome-icon class="fontLink" :icon="['fab', 'twitter']" />
        <font-awesome-icon class="fontLink" :icon="['fab', 'facebook-f']" />
        <font-awesome-icon class="fontLink" :icon="['fab', 'linkedin-in']" />
      </div>
    </b-sidebar>

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
<<<<<<< HEAD

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

  b-sidebar{

    margin: 30px;

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
}
=======
>>>>>>> a0e3ff92c89d8a6db9bade1e8e2d378ad68df538
</style>
