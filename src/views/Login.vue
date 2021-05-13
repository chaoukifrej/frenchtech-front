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
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>>
