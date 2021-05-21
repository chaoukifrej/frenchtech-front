<template>
  <div>
    <b-table primary-key="id" striped hover :items="admins" :fields="liste">
      <b-tr>
        test
      </b-tr>
    </b-table>

    <button>Créer un nouvel administrateur</button>
  </div>
</template>

<script>
export default {
  name: "AdminDelete",
  inject: ["baseUrl"],

  data() {
    return {
      liste: [
        { key: "id", label: "ID" },
        { key: "firstname", label: "Prénom" },
        { key: "lastname", label: "Nom" },
        { key: "email", label: "E-mail" },
        { key: "actions", label: "Actions" },
      ],

      admins: [],
    };
  },
  beforeMount() {
    this.axios.get(this.baseUrl + "api/admin/GET/admins").then((response) => {
      for (const elem of response.data.body.admins) {
        this.admins.push(elem);
      }
      console.log(this.admins);
    });
  },
  methods: {},
};
</script>

<style lang="sass"></style>
