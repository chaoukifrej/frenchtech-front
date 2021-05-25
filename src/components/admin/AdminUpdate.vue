<template>
  <b-table primary-key="id" striped hover :items="updateBuffer" :fields="liste">
    <template #cell(actions)="data">
      <b-button @click="showModif(data.item.id)" variant="primary" size="sm"
        >Voir les modifications</b-button
      >
      <b-modal :id="'modalUpdate' + data.item.id" hide-footer hide-header>
      </b-modal>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminUpdate",
  inject: ["baseUrl"],
  props: ["actors", "buffers", "updateBuffer"],

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

      actors: "r",

      oldUpdate: [],
      newUpdate: [],
    };
  },

  methods: {
    showModif(id) {
      this.$bvModal.show("modalUpdate" + id);

      console.log(buffers);
      // if (this.actors.name == this.updateBuffer.name) {
      //   this.oldUpdate.push("test");
      //   this.newUpdate.push("test");
      //   console.log(this.updateBuffer);
      // }
    },
  },
};
</script>

<style lang="sass"></style>
