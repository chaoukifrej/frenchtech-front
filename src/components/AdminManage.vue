<template>
  <div class="mainComponent">
    <div></div>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Gestion entreprise" active
          ><div class="blocCards">
            <div v-for="index in allActors" :id="index.id" :key="index.id">
              <!-- i correspond a la props / index correspond a l'iteration du 2 Tab -->
              <div class="row">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Entreprise</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Téléphone</th>
                      <th scope="col">Adresse</th>
                      <th scope="col">Ville</th>
                      <th scope="col">Code Postal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{{ index.name }}</td>
                      <td>{{ index.email }}</td>
                      <td>{{ index.phone }}</td>
                      <td>{{ index.adress }}</td>
                      <td>{{ index.city }}</td>
                      <td>{{ index.postal_code }}</td>
                      <td>
                        <button type="button" class="btn btn-warning">
                          Modifier
                        </button>
                      </td>
                      <td>
                        <div class="col-md-2">
                          <button
                            @click="deleteUser(index.id)"
                            class="btn btn-danger"
                          >
                            Refuser
                          </button>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Demande d'inscription"> </b-tab>
        <b-tab title="Demande de modification"> </b-tab>
        <b-tab title="Demande de supression">
          <b-table striped hover :items="deleteBuffer" :fields="deleteFields">
            <template #cell(actions)>
              <b-button pill variant="primary" size="sm">
                Valider
              </b-button>
              <b-button pill variant="secondary" size="sm" class="m-2">
                Refuser
              </b-button>
            </template></b-table
          >
        </b-tab>
        <b-tab title="Imports et Exports"> </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminManage",
  inject: ["baseUrl"],

  data: () => ({
    allActors: [],

    deleteFields: [
      { 0: "ID" },
      { 1: "Nom entreprise" },
      { 2: "Email" },
      { 3: "Téléphone" },
      { 4: "Categorie" },
      { 5: "Association" },
      { key: "Actions", label: "Actions" },
    ],
  }),

  methods: {
    getActor() {
      this.axios
        .get(this.baseUrl + "/api/GET/actors")

        .then((response) => {
          for (const elem of response.data.body.actors) {
            this.allActors.push(elem);
          }
          //console.log(this.registerBuffer);

          response.data.body.actors.forEach((elem) => {
            let e = [];
            e.push(elem.actor_id);
            e.push(elem.name);
            e.push(elem.email);
            e.push(elem.phone);
            e.push(elem.category);
            e.push(elem.associations);
            this.allActors.push(e);
          });

          console.log(this.allActors);
        });
    },
  },
  mounted() {
    this.getBuffer();
  },
};
</script>

<style lang="scss">
#register {
  width: 80%;
  margin: auto;

  h4 {
    text-align: center;
    margin: 20px;
    margin-top: 30px;
  }

  label {
    width: 100%;
    text-align: left;
  }

  #buttonSubmit {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .cardNotif {
    border: solid 2px black;
  }
}
</style>
