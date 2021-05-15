<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: "http://frenchtech.localhost:8888/",
    };
  },

  provide() {
    return {
      baseUrl: this.baseUrl,
    };
  },
};
</script>

<style lang="scss"></style>
