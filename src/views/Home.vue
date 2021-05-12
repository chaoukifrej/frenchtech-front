<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ re }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      re: "",
    };
  },
  components: {
    HelloWorld,
  },
  mounted() {
    this.axios
      .get("http://frenchtech.local/api/test")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  },
};
</script>
