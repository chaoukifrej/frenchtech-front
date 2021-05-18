<template>
  <div id="token"></div>
</template>

<script>
export default {
  inject: ["baseUrl", "token", "isAdmin"],
  name: "token",
  props: ["ml", "id"],
  created() {
    let url = `${this.baseUrl}api/GET/login/${this.ml}/${this.id}`;
    this.axios
      .get(url)
      .then((response) => {
        console.log(response.data.message);
        this.token.value = response.data.token;
        this.isAdmin = false;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$router.push("/Personal");
  },
};
</script>

<style lang="scss"></style>
