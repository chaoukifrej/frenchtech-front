<template>
  <b-table
    primary-key="id"
    striped
    hover
    :items="actors"
    :fields="actorsFields"
  >
    <template #cell(actions)="data">
      <b-button
        pill
        variant="primary"
        size="sm"
        v-b-toggle="'collapse-1' + data.item.id"
      >
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
      <b-collapse :id="'collapse-1' + data.item.id" class="mt-2">
        <b-table-simple responsive striped>
          <b-thead>
            <tr>
              <th scope="col">Adresse</th>
              <th scope="col">Ville</th>
              <th scope="col">Secteur</th>
              <th scope="col">Facebook</th>
              <th scope="col">Twitter</th>
              <th scope="col">Linkedin</th>
              <th scope="col">Description</th>
            </tr>
            <tr>
              <td>{{ data.item.adress }}</td>
              <td>data.item.city</td>
              <td>{{ data.item.activity_area }}</td>
              <td>{{ data.item.facebook }}</td>
              <td>{{ data.item.twitter }}</td>
              <td>{{ data.item.linkedin }}</td>
              <td>{{ data.item.description }}</td>
            </tr>
          </b-thead>
        </b-table-simple>
      </b-collapse>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminActorsManage",
  inject: ["baseUrl", "token"],

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
    this.axios
      .get(this.baseUrl + "api/admin/GET/actors", {
        headers: {
          Authorization: "Bearer " + this.token.value,
          Accept: "application/json",
        },
      })
      .then((response) => {
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
