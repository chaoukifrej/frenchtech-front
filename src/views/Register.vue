<template>
  <div>
    <Header />
    <div id="register">
      <div class="row g-3">
        <h4>Information concernant votre entreprise</h4>
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
          <select v-model="activity_area" id="inputSecteur" class="form-select">
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
            <option value="administrationPublic">Administration Public</option>
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

        <h4>Information visible uniquement par la FrenchTech</h4>

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
          <label for="inputSalarie" class="form-label">Nombre de salarié</label>
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
          <label for="inputFemme" class="form-label">Nombre de femmes</label>
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
          <button type="submit" @click="register" class="btn btn-primary">
            Sign in
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

  data: () => ({
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
  }),

  watch: {
    streetName: function() {
      this.adress = this.streetNumber + " " + this.streetName;
    },

    streetNumber: function() {
      this.adress = this.streetNumber + " " + this.streetName;
    },
  },

  mounted() {
    /* requete afin de recupérer les coordonnées GPS des adresses */

    this.axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${this.streetNumber}+${this.streetName}+${this.city}+${this.zip}%22`
      )

      .then((response) => {
        this.x = response.data.features[0].properties.x;
        this.y = response.data.features[0].properties.y;

        console.log(this.x + this.y);
      });
  },

  methods: {
    getPosition() {
      /* requete afin de recupérer les coordonnées GPS des adresses */

      this.axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${this.streetNumber}+${this.streetName}+${this.city}+${this.zip}%22`
        )

        .then((response) => {
          this.x = response.data.features[0].properties.x;
          this.y = response.data.features[0].properties.y;

          console.log(this.x + this.y);
        });
    },

    register() {
      /* recuperation de longitude et latitude */
      this.getPosition();
      /* requete post pour envoie de données dans la BDD */

      this.axios
        .post("http://frenchtech.webo/api/POST/register", {
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

if (e.target.files[0].size / 1024 / 1024 > 3) { console.log("image trop
grande"); } else { reader.readAsDataURL(e.target.files[0]); }

<style lang="scss">
#register {
  width: 80%;
  margin: auto;

  form {
    margin: 0%;
    margin-bottom: 50px;
    justify-items: center;
    width: 100%;
    display: flex;

    h4 {
      text-align: center;
    }

    label {
      width: 100%;
      text-align: left;
    }
    #buttonSubmit {
      text-align: center;
    }
  }
}
</style>
