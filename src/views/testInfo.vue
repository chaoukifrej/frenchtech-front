<template>
  <div id="app">
    <Header />
    <Info />

    <Footer />
  </div>
</template>

/* info sur la carte => name, description, site web de la startup, numero de
telephone, adresse postal */

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
  data: () => ({}),

  methods: {},
};
</script>

<style lang="scss"></style>
