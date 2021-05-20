<template>
  <div>
    <Header />
    <h1>BIENVENUE SUR VOTRE PAGE PERSONNELLE</h1>
    <div id="personal">
      <h4>Informations concernant mon entreprise</h4>

      <div>
        <div>
          <p>nom : {{ actualActor.name }}</p>
        </div>
        <div>
          <p>email : {{ actualActor.email }}</p>
        </div>
        <div>
          <p>telephone : {{ actualActor.phone }}</p>
        </div>
        <div>
          <p>
            adresse : {{ actualActor.adress }}, {{ actualActor.postal_code }}
            {{ actualActor.city }}
          </p>
        </div>
        <div>
          <p>categorie : {{ actualActor.category }}</p>
        </div>
        <div>
          <p>Association : {{ actualActor.associations }}</p>
        </div>
        <div>
          <p>Description : {{ actualActor.description }}</p>
        </div>
        <div>
          <p>Facebook : {{ actualActor.facebook }}</p>
        </div>
        <div>
          <p>Linkedin : {{ actualActor.linkedin }}</p>
        </div>
        <div>
          <p>Twitter : {{ actualActor.twitter }}</p>
        </div>
        <div>
          <p>Site : {{ actualActor.website }}</p>
        </div>
        <div>
          <p>Sécteur d'activité : {{ actualActor.activity_area }}</p>
        </div>
        <div>
          <p>Fond : {{ actualActor.funds }}</p>
        </div>
        <div>
          <p>Nombres d'employés : {{ actualActor.employees_number }}</p>
        </div>
        <div>
          <p>Nombres de postes : {{ actualActor.jobs_available_number }}</p>
        </div>
        <div>
          <p>Nombre de Femmes : {{ actualActor.women_number }}</p>
        </div>
        <div>
          <p>Revenues : {{ actualActor.revenues }}</p>
        </div>
      </div>

      <div>
        <b-button v-b-modal.modal-lg variant="primary"
          >Modifier mon profil</b-button
        >

        <b-modal id="modal-lg" size="lg" title="Modification du profil"
          ><div class="row g-3">
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
                v-model="name"
                type="text"
                class="form-control"
                id="inputName"
              />
            </div>

            <div class="col-md-3">
              <label for="inputEmail" class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="inputEmail"
              />
            </div>

            <div class="col-3">
              <label for="inputphone" class="form-label">Telephone</label>
              <input
                v-model="phone"
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
                v-model="streetName"
                type="text"
                class="form-control"
                id="inputAdresse"
                placeholder="rue/avenue/boulevard..."
              />
            </div>

            <div class="col-3">
              <label for="inputCity" class="form-label">Ville</label>
              <input
                v-model="city"
                type="text"
                class="form-control"
                id="inputCity"
              />
            </div>

            <div class="col-2">
              <label for="inputZip" class="form-label">Code Postale</label>
              <input
                v-model="postal_code"
                type="text"
                class="form-control"
                id="inputZip"
              />
            </div>

            <div class="col-md-4">
              <label for="inputFacebook" class="form-label">Facebook</label>
              <input
                v-model="facebook"
                type="text"
                class="form-control"
                id="inputFacebook"
              />
            </div>

            <div class="col-md-4">
              <label for="inputTwitter" class="form-label">Twitter</label>
              <input
                v-model="twitter"
                type="text"
                class="form-control"
                id="inputInstagram"
              />
            </div>

            <div class="col-md-4">
              <label for="inputLinkedin" class="form-label">Linkedin</label>
              <input
                v-model="linkedin"
                type="text"
                class="form-control"
                id="inputLinkedin"
              />
            </div>

            <div class="col-md-4">
              <label for="inputCategory" class="form-label">Categories</label>
              <select v-model="category" id="inputCategory" class="form-select">
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
                v-model="associations"
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
                v-model="activity_area"
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
                v-model="description"
                type="text"
                class="form-control"
                id="inputLinkedin"
              />
            </div>

            <h4>Informations Relative a votre entreprise</h4>

            <div class="col-md-4">
              <label for="inputFond" class="form-label">Levé de fond (€)</label>
              <input
                v-model="funds"
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
                v-model="employees_number"
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
                v-model="jobs_available_number"
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
                v-model="women_number"
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
                v-model="revenues"
                type="number"
                class="form-control"
                id="inputCa"
              />
            </div>

            <div class="col-12" id="buttonSubmit">
              <button type="submit" class="btn btn-primary">
                Modifier
              </button>
            </div>
          </div></b-modal
        >
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// Import header et footer

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Personal",
  inject: ["baseUrl", "token"],

  components: {
    Header,
    Footer,
  },
  data: () => ({
    actualActor: "",
    logo: "",
    name: "",
    email: "",
    phone: "",
    streetNumber: "",
    streetName: "",
    adress: "",
    city: "",
    postal_code: "",
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
    id: "",
  }),

  /* Permet de regrouper les differents element lié a la position dans la variable adress */

  watch: {
    streetName: function() {
      this.adress = this.streetNumber + " " + this.streetName;
    },

    streetNumber: function() {
      this.adress = this.streetNumber + " " + this.streetName;
    },
  },

  beforeMount() {
    this.axios
      .get(this.baseUrl + "api/GET/actor", {
        headers: {
          Authorization: "Bearer " + this.token.value,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.status);
        this.actualActor = response.data.body.actor;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    update() {
      /* recuperation de longitude et latitude */
      this.getPosition();
      /* requete post pour envoie de données dans la BDD */

      this.axios
        .put(this.baseUrl + "api/GET/update", {
          /* body de la requete */

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
          activity_area: this.activity_area,
          funds: this.funds,
          employees_number: this.employees_number,
          jobs_available_number: this.employees_number,
          women_number: this.women_number,
          revenues: this.revenues,
        })

        .then((response) => console.log(response));
    },

    /* methode transformer le logo en base 64 pour la BDD */

    addLogo(e) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        this.logo = readerEvent.target.result;
      };
      if (e.target.files[0].size / 1024 / 1024 > 3) {
        console.log("image trop grande");
      } else {
        reader.readAsDataURL(e.target.files[0]);
      }
    },
  },
};
</script>

<style lang="scss">
h1 {
  margin-top: 10px;
  text-align: center;
}
#personal {
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
}
.modal-content {
  height: 90vh;
  overflow: scroll;
}
</style>
