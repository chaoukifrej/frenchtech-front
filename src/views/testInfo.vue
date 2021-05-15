<template>
  <div id="app">
    <Header />

    <div v-for="item in dataTab" :key="item">
      <div v-for="i in item" :key="i.id">
        <Info :i="i" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// Import header et footer

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Info from "@/components/Info.vue";

export default {
  name: "Login",
  inject: ["baseUrl"],

  components: {
    Header,
    Footer,
    Info,
  },
  data: () => ({
    dataTab: [],
  }),
  mounted() {
    this.axios

      .get(this.baseUrl + "api/GET/actors")

      .then(
        (response) => (
          this.dataTab.push(response.data.body.actors),
          console.log(this.dataTab)
        )
      );
  },
  methods: {},
};
</script>

<style lang="scss"></style>
