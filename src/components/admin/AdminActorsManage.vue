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
                @change="addLogo"
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Nom de l'entreprise</label>
              <input
                v-model="modifActors.name"
                type="text"
                class="form-control"
                id="inputName"
              />
            </div>

            <div class="col-md-3">
              <label for="inputEmail" class="form-label">Email</label>
              <input
                v-model="modifActors.email"
                type="email"
                class="form-control"
                id="inputEmail"
              />
            </div>

            <div class="col-3">
              <label for="inputphone" class="form-label">Telephone</label>
              <input
                v-model="modifActors.phone"
                type="text"
                class="form-control"
                id="inputPhone"
              />
            </div>

            <div class="col-2">
              <label for="inputNumberStreet" class="form-label">Numéro</label>
              <input
                v-model="modifActors.streetNumber"
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
                v-model="modifActors.streetName"
                type="text"
                class="form-control"
                id="inputAdresse"
                placeholder="rue/avenue/boulevard..."
              />
            </div>

            <div class="col-3">
              <label for="inputCity" class="form-label">Ville</label>
              <input
                v-model="modifActors.city"
                type="text"
                class="form-control"
                id="inputCity"
              />
            </div>

            <div class="col-2">
              <label for="inputZip" class="form-label">Code Postale</label>
              <input
                v-model="modifActors.postal_code"
                type="text"
                class="form-control"
                id="inputZip"
              />
            </div>

            <div class="col-md-4">
              <label for="inputFacebook" class="form-label">Facebook</label>
              <input
                v-model="modifActors.facebook"
                type="text"
                class="form-control"
                id="inputFacebook"
              />
            </div>

            <div class="col-md-4">
              <label for="inputTwitter" class="form-label">Twitter</label>
              <input
                v-model="modifActors.twitter"
                type="text"
                class="form-control"
                id="inputInstagram"
              />
            </div>

            <div class="col-md-4">
              <label for="inputLinkedin" class="form-label">Linkedin</label>
              <input
                v-model="modifActors.linkedin"
                type="text"
                class="form-control"
                id="inputLinkedin"
              />
            </div>

            <div class="col-md-4">
              <label for="inputCategory" class="form-label">Categories</label>
              <select
                v-model="modifActors.category"
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
                  >Pole de compétitivité</option
                >
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputAssociation" class="form-label"
                >Associations</label
              >
              <select
                v-model="modifActors.associations"
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
                v-model="modifActors.activity_area"
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
                v-model="modifActors.description"
                type="text"
                class="form-control"
                id="inputLinkedin"
              />
            </div>

            <h4>Informations Relative a votre entreprise</h4>

            <div class="col-md-4">
              <label for="inputFond" class="form-label">Levé de fond (€)</label>
              <input
                v-model="modifActors.funds"
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
                v-model="modifActors.employees_number"
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
                v-model="modifActors.jobs_available_number"
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
                v-model="modifActors.women_number"
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
                v-model="modifActors.revenues"
                type="number"
                class="form-control"
                id="inputCa"
              />
            </div>
          </div></div
      ></b-modal>
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
      ModifActors: {
        logo: "",
        name: "",
        email: "",
        phone: "",
        streetNumber: "",
        streetName: "",
        adress: "",
        city: "",
        postal_code: "",
        website: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        category: "",
        associations: "",
        activity_area: "",
        description: "",

        /* information visible uniquement par l'admin */

        funds: "",
        employees_number: "",
        jobs_available_number: "",
        women_number: "",
        revenues: "",
        position: "",
        latitude: "",
        longitude: "",
      },
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
