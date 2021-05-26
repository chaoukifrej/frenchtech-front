<template>
  <div>
    <Header />
    <div id="register">
      <div class="row g-3">
        <h4>Information publique concernant votre entreprise</h4>
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
            v-model="RegistreMe.name"
            type="text"
            class="form-control"
            id="inputName"
          />
        </div>

        <div class="col-md-3">
          <label for="inputEmail" class="form-label">Email</label>
          <input
            v-model="RegistreMe.email"
            type="email"
            class="form-control"
            id="inputEmail"
          />
        </div>

        <div class="col-3">
          <label for="inputphone" class="form-label">Telephone</label>
          <input
            v-model="RegistreMe.phone"
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
            id="inputPhone"
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
            v-model="RegistreMe.city"
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>

        <div class="col-2">
          <label for="inputZip" class="form-label">Code Postale</label>
          <input
            v-model="RegistreMe.postal_code"
            type="text"
            class="form-control"
            id="inputZip"
            @keyup="getPosition"
          />
        </div>

        <div class="col-md-3">
          <label for="inputWebSite" class="form-label"
            >Indiquez votre site web</label
          >
          <input
            v-model="RegistreMe.website"
            type="text"
            class="form-control"
            id="inputWebSite"
          />
        </div>

        <div class="col-md-3">
          <label for="inputFacebook" class="form-label">Facebook</label>
          <input
            v-model="RegistreMe.facebook"
            type="text"
            class="form-control"
            id="inputFacebook"
          />
        </div>

        <div class="col-md-3">
          <label for="inputTwitter" class="form-label">Twitter</label>
          <input
            v-model="RegistreMe.twitter"
            type="text"
            class="form-control"
            id="inputInstagram"
          />
        </div>

        <div class="col-md-3">
          <label for="inputLinkedin" class="form-label">Linkedin</label>
          <input
            v-model="RegistreMe.linkedin"
            type="text"
            class="form-control"
            id="inputLinkedin"
          />
        </div>

        <div class="col-md-4">
          <label for="inputCategory" class="form-label">Categories</label>
          <select
            v-model="RegistreMe.category"
            id="inputCategory"
            class="form-select"
          >
            <option selected>Choississez...</option>
            <option value="startUp">Start-up</option>
            <option value="association">Association</option>
            <option value="organismeFinanceur">Organisme financeur</option>
            <option value="organismeDeFormation">Organisme de formation</option>
            <option value="servicePublic">Service public</option>
            <option value="tpePme">TPE/PME</option>
            <option value="eti">Grande entreprises/Grand groupe/ETI</option>
            <option value="poleDeCompetitivite">Pole de compétitivité</option>
          </select>
        </div>

        <div class="col-md-4">
          <label for="inputAssociation" class="form-label">Associations</label>
          <select
            v-model="RegistreMe.associations"
            id="inputAssociation"
            class="form-select"
          >
            <option selected>Choississez...</option>
            <option value="cannesIsUp">Cannes Is Up</option>
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
            v-model="RegistreMe.activity_area"
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
            <option value="logiciel">Développement logiciel</option>
            <option value="sport">Sport</option>
            <option value="telecom">Telecom</option>
            <option value="transports">Transports</option>
            <option value="voyages">Voyages</option>
            <option value="bienEtre">Bien-être</option>
            <option value="finance">Finance</option>
            <option value="administrationPublic">Administration Public</option>
          </select>
        </div>

        <div class="col-md-12">
          <label for="inputDescription" class="form-label"
            >Description breve de votre entreprise</label
          >
          <textarea
            v-model="RegistreMe.description"
            type="text"
            class="form-control"
            id="inputDescription"
          />
        </div>

        <h4>Information visible uniquement par la FrenchTech</h4>

        <div class="col-md-4">
          <label for="inputFond" class="form-label">Levé de fond (€)</label>
          <input
            v-model="RegistreMe.funds"
            type="number"
            class="form-control"
            id="inputFond"
          />
        </div>

        <div class="col-md-4">
          <label for="inputSalarie" class="form-label">Nombre de salarié</label>
          <input
            v-model="RegistreMe.employees_number"
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
            v-model="RegistreMe.jobs_available_number"
            type="number"
            class="form-control"
            id="inputPost"
          />
        </div>

        <div class="col-md-4">
          <label for="inputFemme" class="form-label">Nombre de femmes</label>
          <input
            v-model="RegistreMe.women_number"
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
            v-model="RegistreMe.revenues"
            type="number"
            class="form-control"
            id="inputCa"
          />
        </div>

        <div class="col-12" id="buttonSubmit">
          <button
            type="submit"
            @change="getPosition"
            @click="register"
            class="btn btn-primary"
          >
            Inscription
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Register",
  inject: ["baseUrl"],
  data: () => ({
    RegistreMe: {
      logo: "",
      name: "",
      email: "",
      phone: "",

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
      adress: "",
    },
    streetNumber: "",
    streetName: "",
  }),

  /* Permet de regrouper les differents element lié a la position dans la variable adress */
  watch: {
    streetName: function() {
      this.RegistreMe.adress = this.streetNumber + " " + this.streetName;
    },

    streetNumber: function() {
      this.RegistreMe.adress = this.streetNumber + " " + this.streetName;
    },
  },

  methods: {
    getPosition() {
      /* requete afin de recupérer les coordonnées GPS des adresses */

      this.axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${this.streetNumber}+${this.streetName}+${this.RegistreMe.city}+${this.RegistreMe.postal_code}`
        )
        .then((response) => {
          this.RegistreMe.longitude =
            response.data.features[0].geometry.coordinates[1];
          this.RegistreMe.latitude =
            response.data.features[0].geometry.coordinates[0];
        });
    },

    register() {
      this.axios
        .post(this.baseUrl + "api/POST/register", {
          /* body de la requete */

          name: this.RegistreMe.name,
          email: this.RegistreMe.email,
          logo: this.RegistreMe.logo,
          adress: this.RegistreMe.adress,
          postal_code: this.RegistreMe.postal_code,
          city: this.RegistreMe.city,
          longitude: this.RegistreMe.longitude,
          latitude: this.RegistreMe.latitude,
          phone: this.RegistreMe.phone,
          category: this.RegistreMe.category,
          associations: this.RegistreMe.associations,
          description: this.RegistreMe.description,
          facebook: this.RegistreMe.facebook,
          twitter: this.RegistreMe.twitter,
          linkedin: this.RegistreMe.linkedin,
          website: this.RegistreMe.website,
          activity_area: this.RegistreMe.activity_area,
          funds: this.RegistreMe.funds,
          employees_number: this.RegistreMe.employees_number,
          jobs_available_number: this.RegistreMe.employees_number,
          women_number: this.RegistreMe.women_number,
          revenues: this.RegistreMe.revenues,
        })

        .then((response) => console.log(response));
      this.$router.push("/");
    },

    /* methode transformer le logo en base 64 pour la BDD */

    addLogo(e) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        this.RegistreMe.logo = readerEvent.target.result;
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
}
</style>
