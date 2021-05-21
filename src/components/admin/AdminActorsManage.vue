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
        v-b-modal="'modal-xl' + data.item.id"
        pill
        variant="secondary"
        size="sm"
        class="m-2"
      >
        Voir Modifier
      </b-button>
      <b-button
        pill
        variant="danger"
        size="sm"
        @click="deleteActor(data.item.id)"
      >
        Supprimer
      </b-button>
      <b-modal
        :id="'modal-xl' + data.item.id"
        size="xl"
        title="Extra Large Modal"
        hide-footer
      >
        <h1>Modifications</h1>
        <div id="personal">
          <h4>Informations concernant l'entreprise</h4>

          <div class="row g-3">
            <div class="col-md-12">
              <label class="form-label">Logo</label>
              <input
                type="file"
                class="form-control"
                id="inputLogo"
                accept="image/png, image/jpeg"
                ref="img"
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Nom de l'entreprise</label>
              <input
                v-model="data.item.name"
                type="text"
                class="form-control"
                id="inputName"
              />
            </div>

            <div class="col-md-3">
              <label for="inputEmail" class="form-label">Email</label>
              <input
                v-model="data.item.email"
                type="email"
                class="form-control"
                id="inputEmail"
              />
            </div>

            <div class="col-3">
              <label for="inputphone" class="form-label">Telephone</label>
              <input
                v-model="data.item.phone"
                type="text"
                class="form-control"
                id="inputPhone"
              />
            </div>

            <div class="col-2">
              <label for="inputNumberStreet" class="form-label">Numéro</label>
              <input
                v-model="streetNumber"
                type="text"
                class="form-control"
                id="inputPhone2"
              />
            </div>

            <div class="col-5">
              <label for="inputAdresse" class="form-label"
                >Nom de rue/avenue/boulevard</label
              >
              <input
                v-model="data.item.streetName"
                type="text"
                class="form-control"
                id="inputAdresse"
                placeholder="rue/avenue/boulevard..."
              />
            </div>

            <div class="col-3">
              <label for="inputCity" class="form-label">Ville</label>
              <input
                v-model="data.item.city"
                type="text"
                class="form-control"
                id="inputCity"
              />
            </div>

            <div class="col-2">
              <label for="inputZip" class="form-label">Code Postale</label>
              <input
                v-model="data.item.postal_code"
                type="text"
                class="form-control"
                id="inputZip"
              />
            </div>

            <div class="col-md-4">
              <label for="inputFacebook" class="form-label">Facebook</label>
              <input
                v-model="data.item.facebook"
                type="text"
                class="form-control"
                id="inputFacebook"
              />
            </div>

            <div class="col-md-4">
              <label for="inputTwitter" class="form-label">Twitter</label>
              <input
                v-model="data.item.twitter"
                type="text"
                class="form-control"
                id="inputInstagram"
              />
            </div>

            <div class="col-md-4">
              <label for="inputLinkedin" class="form-label">Linkedin</label>
              <input
                v-model="data.item.linkedin"
                type="text"
                class="form-control"
                id="inputLinkedin"
              />
            </div>

            <div class="col-md-4">
              <label for="inputCategory" class="form-label">Categories</label>
              <select
                v-model="data.item.category"
                id="inputCategory"
                class="form-select"
              >
                <option selected>Choississez...</option>
                <option value="startUp">Start-up</option>
                <option value="association">Association</option>
                <option value="organismeFinanceur">Organisme financeur</option>
                <option value="organismeDeFormation"
                  >Organisme de formation</option
                >
                <option value="servicePublic">Service public</option>
                <option value="tpePme">TPE/PME</option>
                <option value="eti">Grande entreprises/Grand groupe/ETI</option>
                <option value="poleDeCompetitivite"
                  >Pôle de compétitivité</option
                >
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputAssociation" class="form-label"
                >Associations</label
              >
              <select
                v-model="data.item.associations"
                id="inputAssociation"
                class="form-select"
              >
                <option selected>Choississez...</option>
                <option value="canneIsUp">Cannes Is Up</option>
                <option value="clubGrasse">
                  Le club des entrepreneurs du pays de Grasse
                </option>
                <option value="NiceStartsUp">Nice Starts-up</option>
                <option value="telecomValley">Telecom Valley</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputSecteur" class="form-label"
                >Secteurs d'activité</label
              >
              <select
                v-model="data.item.activity_area"
                id="inputSecteur"
                class="form-select"
              >
                <option selected>Choississez...</option>
                <option value="formation">Formation</option>
                <option value="energie">Energie</option>
                <option value="evenementiel">Evenementiel</option>
                <option value="mode">Mode et textile</option>
                <option value="industrie">Industrie</option>
                <option value="recrutement">Recrutement</option>
                <option value="Juridique">Juridique</option>
                <option value="media">Médias</option>
                <option value="produitsEtServicesWeb">
                  Produits et services web
                </option>
                <option value="energie">Développement logiciel</option>
                <option value="sport">Sport</option>
                <option value="telecom">Telecom</option>
                <option value="Transports">Transports</option>
                <option value="voyages">Voyages</option>
                <option value="bienEtre">Bien-être</option>
                <option value="finance">Finance</option>
                <option value="administrationPublic"
                  >Administration Public</option
                >
              </select>
            </div>

            <div class="col-md-12">
              <label for="inputLinkedin" class="form-label"
                >Description breve de votre entreprise</label
              >
              <textarea
                v-model="data.item.description"
                type="text"
                class="form-control"
                id="inputLinkedin"
              />
            </div>

            <h4>Informations Relative a votre entreprise</h4>

            <div class="col-md-4">
              <label for="inputFond" class="form-label">Levé de fond (€)</label>
              <input
                v-model="data.item.funds"
                type="number"
                class="form-control"
                id="inputFond"
              />
            </div>

            <div class="col-md-4">
              <label for="inputSalarie" class="form-label"
                >Nombre de salarié</label
              >
              <input
                v-model="data.item.employees_number"
                type="number"
                class="form-control"
                id="inputSalarie"
              />
            </div>

            <div class="col-md-4">
              <label for="inputPost" class="form-label"
                >Nombre de post à pourvoir</label
              >
              <input
                v-model="data.item.jobs_available_number"
                type="number"
                class="form-control"
                id="inputPost"
              />
            </div>

            <div class="col-md-4">
              <label for="inputFemme" class="form-label"
                >Nombre de femmes</label
              >
              <input
                v-model="data.item.women_number"
                type="number"
                class="form-control"
                id="inputFemme"
              />
            </div>

            <div class="col-md-4">
              <label for="inputCa" class="form-label"
                >Chiffre d'affaire annuel total
              </label>
              <input
                v-model="data.item.revenues"
                type="number"
                class="form-control"
                id="inputCa"
              />
            </div>
            <b-button @click="Update(data.item.id)" variant="success"
              >Modication</b-button
            >
          </div>
        </div>
      </b-modal>
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
      streetNumber: [],
      adressStr: [],
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

          this.actors.forEach((element) => {
            let adressStr = element.adress;
            let numberStr = adressStr.split(" ");

            this.streetNumber = numberStr[0];
          });
        }
      });
  },

  methods: {
    Update(id) {
      this.axios

        .put(this.baseUrl + "api/admin/PUT/actor/" + id, {
          /* body de la requete */

          name: this.actors.name,
          email: this.actors.email,
          logo: this.actors.logo,
          adress: this.actors.adress,
          postal_code: this.actors.postal_code,
          city: this.actors.city,
          longitude: this.actors.longitude,
          latitude: this.actors.latitude,
          phone: this.actors.phone,
          category: this.actors.category,
          associations: this.actors.associations,
          description: this.actors.description,
          facebook: this.actors.facebook,
          twitter: this.actors.twitter,
          linkedin: this.actors.linkedin,
          website: this.actors.website,
          activity_area: this.actors.activity_area,
          funds: this.actors.funds,
          employees_number: this.actors.employees_number,
          jobs_available_number: this.actors.employees_number,
          women_number: this.actors.women_number,
          revenues: this.actors.revenues,
        })

        .then((response) => console.log(response));
    },
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
              .delete(this.baseUrl + "/api/admin/DELETE/actor/" + id, {
                headers: {
                  Authorization: "Bearer " + this.token.value,
                  Accept: "application/json",
                },
              })
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
