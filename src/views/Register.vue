<template>
  <div>
    <Header />
    <div id="register">
      <form method="POST" action="" class="row g-3">
        <h4>Information concernant votre entreprise</h4>
        <div class="col-md-12">
          <label class="form-label">Logo</label>
          <input
            type="file"
            class="form-control"
            id="inputLogo"
            accept=".jpeg,.png, .jpg"
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

        <div class="col-6">
          <label for="inputAdresse" class="form-label">Adresse</label>
          <input
            v-model="adress"
            type="text"
            class="form-control"
            id="inputAdresse"
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

        <div class="col-3">
          <label for="inputZip" class="form-label">Code Postale</label>
          <input v-model="zip" type="text" class="form-control" id="inputZip" />
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
          <label for="inputInstagram" class="form-label">Instagram</label>
          <input
            v-model="instagram"
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
          <select v-model="secteurs" id="inputSecteur" class="form-select">
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
            v-model="fond"
            type="number"
            class="form-control"
            id="inputFond"
          />
        </div>

        <div class="col-md-4">
          <label for="inputSalarie" class="form-label">Nombre de salarié</label>
          <input
            v-model="employe"
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
            v-model="post"
            type="number"
            class="form-control"
            id="inputPost"
          />
        </div>

        <div class="col-md-4">
          <label for="inputFemme" class="form-label">Nombre de femmes</label>
          <input
            v-model="wommenNbr"
            type="number"
            class="form-control"
            id="inputFemme"
          />
        </div>

        <div class="col-md-4">
          <label for="inputCa" class="form-label"
            >Chiffre d'affaire annuel total
          </label>
          <input v-model="CA" type="number" class="form-control" id="inputCa" />
        </div>

        <div class="col-12" id="buttonSubmit">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { Header, Footer },
  name: "Register",

  data: () => ({
    name: "",
    email: "",
    phone: "",
    adress: "",
    city: "",
    zip: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    category: "",
    associations: "",
    secteurs: "",
    description: "",

    /* information visible uniquement par l'admin */

    fond: "",
    employe: "",
    post: "",
    wommenNbr: "",
    CA: "",
  }),

  methods: {
    mounted() {},

    /* methode transformer le logo en base 64 pour la BDD */

    addLogo(e) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        this.logo = readerEvent.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      console.log(this.logo);
    },
  },
};
</script>

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
