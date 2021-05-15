<template>
  <div id="token"></div>
</template>

<script>
export default {
  inject: ["baseUrl"],
  name: "token",
  props: ["ml", "id"],
  created() {
    let url = `${this.baseUrl}api/GET/login/${this.ml}/${this.id}`;
    this.axios.get(url).then((response) => {
      console.log(response.data.token);
    });
  },
};
</script>

<style lang="scss"></style>
