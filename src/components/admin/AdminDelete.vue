<template>
  <b-table
    primary-key="id"
    striped
    hover
    :items="deleteBuffer"
    :fields="deleteFields"
  >
    <template #cell(actions)="data">
      <b-button
        pill
        variant="primary"
        size="sm"
        @click="confirmDelete(data.item.actor_id)"
      >
        Valider
      </b-button>
      <b-button
        pill
        variant="secondary"
        size="sm"
        class="m-2"
        @click="cancelDelete(data.item.id)"
      >
        Refuser
      </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminDelete",
  props: ["deleteBuffer"],
  inject: ["baseUrl"],

  data() {
    return {
      deleteFields: [
        { key: "actor_id", label: "ID" },
        { key: "name", label: "Nom entreprise" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Téléphone" },
        { key: "category", label: "Categorie" },
        { key: "associations", label: "Association" },
        { key: "actions", label: "Actions" },
      ],
    };
  },

  methods: {
    cancelDelete(id) {
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
              .delete(this.baseUrl + "/api/admin/DELETE/buffer/" + id)
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

    confirmDelete(id) {
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
              .delete(this.baseUrl + "/api/admin/DELETE/demande/actor/" + id)
              .then((response) => {
                document.querySelectorAll("tr").forEach((e) => {
                  e.querySelectorAll("td:first-child").forEach((i) => {
                    if (i.innerText == id) {
                      e.style.display = "none";
                    }
                  });
                  console.log(response.status);
                });
              });
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
