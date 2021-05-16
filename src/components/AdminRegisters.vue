<template>
  <div class="app">
    
  </div>
</template>

<script>
export default {
  name: "AdminRegisters",
  inject: ["baseUrl"],

  props: ["i"],

  data: () => ({
    name: "",
    associations: "",
    description: "",
    website: "",
    adress: "",
    dataTab: [],

  }),

    methods: {
    adminregister() {
      /* requete post pour envoie de données dans la BDD */

      this.axios
        .post(this.baseUrl + "api/GET/actors", {
          /* body de la requete */
          name: this.name,
        })

        .then((response) => console.log(response));
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

</style>
