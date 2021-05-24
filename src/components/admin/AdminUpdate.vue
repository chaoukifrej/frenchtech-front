<template>
  <div>
    <b-table primary-key="id" striped hover :items="buffers" :fields="liste">
      <template #cell(actions)="">
        <b-button pill variant="warning" size="sm" class="m-2">
          Voir modification
        </b-button>
        <b-button pill variant="danger" size="sm" class="m-2">
          Rejeter
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "AdminUpdate",
  inject: ["baseUrl"],

  data() {
    return {
      // Tableau d'affichage
      liste: [
        { key: "id", label: "N°" },
        { key: "name", label: "Nom entreprise" },
        { key: "email", label: "E-mail" },
        { key: "phone", label: "Téléphone" },
        { key: "category", label: "Categorie" },
        { key: "associations", label: "Associations" },
        { key: "actions", label: "Actions" },
      ],

      // Tableau récupérations demande modification
      buffers: [],
    };
  },

  // ?Récupération
  beforeMount() {
    this.axios
      .get(this.baseUrl + "api/admin/GET/update/demande")
      .then((response) => {
        for (const elem of response.data.body.buffers) {
          this.buffers.push(elem);
        }
        // console.log(this.admins);
      });
  },
  methods: {},
};
</script>

<style lang="sass"></style>
