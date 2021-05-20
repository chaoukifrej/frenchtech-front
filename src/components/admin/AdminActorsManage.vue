<template>
  <b-table
    primary-key="id"
    striped
    hover
    :items="actors"
    :fields="actorsFields"
  >
    <template #cell(actions)="data">
      <b-button pill variant="primary" size="sm">
        Voir Plus
      </b-button>
      <b-button pill variant="secondary" size="sm" class="m-2">
        Modifier
      </b-button>
      <b-button
        pill
        variant="danger"
        size="sm"
        @click="deleteActor(data.item.id)"
      >
        Supprimer
      </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminActorsManage",
  inject: ["baseUrl"],
  data() {
    return {
      actors: [],
      actorsFields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Nom entreprise" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Téléphone" },
        { key: "category", label: "Categorie" },
        { key: "associations", label: "Association" },
        { key: "actions", label: "Actions" },
      ],
    };
  },

  beforeMount() {
    this.axios.get(this.baseUrl + "api/GET/actors").then((response) => {
      for (const elem of response.data.body.actors) {
        this.actors.push(elem);
      }
      //console.log(this.actors);
    });
  },

  methods: {
    deleteActor(id) {
      this.$bvModal
        .msgBoxConfirm("Êtes vous sûr?", {
          okVariant: "danger",
          okTitle: "Confirmer",
          cancelTitle: "Annuler",
          footerClass: "p-2",
          hideHeaderClose: false,
        })
        .then((value) => {
          if (value) {
            this.axios
              .delete(this.baseUrl + "/api/admin/DELETE/actor/" + id)
              .then((response) => {
                let elem = document.getElementsByTagName("tr");
                elem.forEach((e) => {
                  if (e.id.substr(-1) == id) {
                    console.log(e.id.substr(-1));
                    e.style.display = "none";
                  }
                });
                console.log(response.status);
              });

            console.log(id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="sass"></style>
