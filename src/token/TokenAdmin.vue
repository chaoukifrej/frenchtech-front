<template>
  <div id="tokenAdmin"></div>
</template>

<script>
export default {
  inject: ["baseUrl", "token", "isAdmin"],
  name: "tokenAdmin",
  props: ["ml", "id"],
  created() {
    let url = `${this.baseUrl}api/admin/GET/login/${this.ml}/${this.id}`;
    this.axios
      .get(url)
      .then((response) => {
        console.log(response.data.message);
        this.token.value = response.data.token;
        this.isAdmin.value = true;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(() => {
        this.$router.push("/Admin");
      });
  },
};
</script>

<style lang="scss"></style>
