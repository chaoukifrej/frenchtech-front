<template>
  <div id="app">
    <Header />

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
</style>
