<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: "http://frenchtech.localhost/",
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
