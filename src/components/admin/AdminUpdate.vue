<template>
  <b-table primary-key="id" striped hover :items="buffers" :fields="liste">
    <template #cell(actions)="data">
      <b-button
        @click="showModif(data.item.id, data.item.email)"
        variant="primary"
        size="sm"
        >Voir les modifications</b-button
      >
      <b-modal :id="'modalUpdate' + data.item.id" hide-footer hide-header>
        <p>{{ data.item.id }}</p>
      </b-modal>
    </template>
  </b-table>
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
      modif: [],
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
  methods: {
    showModif(id, e) {
      this.axios
        .put(this.baseUrl + "api/adminPUT/update/actor" + id)
        .then((response) => {
          this.buffers.email = e;
          this.$bvModal.show("modalUpdate" + id);
          console.log(response);
        });
    },
  },
};
</script>

<style lang="sass"></style>
