<template>
  <div class="mainComponent">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Gestion entreprise" active
          ><div class="blocCards">
            <div v-for="index in registerBuffer" :id="index.id" :key="index.id">
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
            </div></div
        ></b-tab>
        <b-tab title="Demande d'inscription"></b-tab>
        <b-tab title="Demande de modification"></b-tab>
        <b-tab title="Demande de supression"></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminRegister",
  inject: ["baseUrl"],

  data: () => ({
    registerBuffer: [],
  }),

  methods: {
    getBuffer() {
      this.axios
        .get(this.baseUrl + "/api/GET/buffers")

        .then((response) => {
          for (const elem of response.data.body.buffers) {
            this.registerBuffer.push(elem);
          }
          console.log(this.registerBuffer);
        });
    },

    deleteUser(id) {
      this.axios
        .delete(this.baseUrl + "/api/admin/DELETE/buffer/" + id)
        .then((response) => {
          let div = document.getElementById(id);
          div.style.display = "none";
          console.log(response.status);
        });
    },
  },
  mounted() {
    this.getBuffer();
  },
};

/* body de la requete */
/*if (type_of_demand = ) {
              name: this.name,
                    email: this.email,
                    logo: this.logo,
                    adress: this.adress,
                    postal_code: this.postal_code,
                    city: this.city,
                    longitude: this.longitude,
                    latitude: this.latitude,
                    phone: this.phone,
                    category: this.category,
                    associations: this.associations,
                    description: this.description,
                    facebook: this.facebook,
                    twitter: this.twitter,
                    linkedin: this.linkedin,
                    website: this.website,
                    activity_area: this.activity_area,
                    funds: this.funds,
                    employees_number: this.employees_number,
                    jobs_available_number: this.employees_number,
                    women_number: this.women_number,
                    revenues: this.revenues
              },*/
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
