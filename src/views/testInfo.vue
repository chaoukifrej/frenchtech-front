<template>
  <div id="app">
    <Header />

    <Footer />
  </div>
</template>

<script>
// Import header et footer

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Login",
  inject: ["baseUrl"],

  components: {
    Header,
    Footer,
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
