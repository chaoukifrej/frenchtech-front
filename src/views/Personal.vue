<template>
  <div>
    <Header />
    <img id="imgHeader" src="../../public/img/bandeau-perso.png" alt="header" />

    <div id="personal">
      <div id="primaryInformations">
        <img id="logo" :src="actualActor.logo" alt="logo" />
        <div id="title">
          <h4>{{ actualActor.name }}</h4>
          <p>
            <strong>{{ actualActor.category }}</strong> //
            {{ actualActor.associations }}
          </p>
        </div>
      </div>

      <div id="secondaryInformations">
        <div class="subtitle">
          <h4>INFORMATIONS PUBLIQUES</h4>
        </div>
        <div class="container">
          <div id="cLeft">
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Email</strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.email }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Téléphone </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.phone }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Adresse </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.adress }}</p>
              </div>
            </div>
          </div>
          <div id="cRight">
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Catégorie </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.category }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Site </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.website }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p>
                  <strong>Secteur<br />d'activité </strong>
                </p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.activity_area }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="privateInformations" class="description">
        <div class="subtitle"><h4></h4></div>
        <div class="container containerDescription">
          <div class="infoContainer">
            <div class="infoName">
              <p><strong>Description </strong></p>
            </div>
            <div class="infoTextDesc">
              <p>{{ actualActor.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="privateInformations">
        <div class="subtitle">
          <h4>INFORMATIONS<br />PRIVÉES</h4>
        </div>
        <div class="container">
          <div id="cLeft">
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Nombres d'employés </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.employees_number }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Nombres de postes </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.jobs_available_number }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Revenus </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.revenues }}</p>
              </div>
            </div>
          </div>
          <div id="cRight">
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Nombre de Femmes </strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.women_number }}</p>
              </div>
            </div>
            <div class="infoContainer">
              <div class="infoName">
                <p><strong>Fond</strong></p>
              </div>
              <div class="infoText">
                <p>{{ actualActor.funds }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="btnModif">
      <b-button v-b-modal.modal-xl variant="primary"
        >Modifier mon profil</b-button
      >

      <b-button v-b-modal.modal-sm variant="primary"
        >Supprimer mon profil</b-button
      >

      <b-modal
        id="modal-sm"
        size="sm"
        title="Small Modal"
        hide-header
        hide-footer
      >
        <p>êtes-vous sûr de vouloir supprimer votre compte ?</p>
        <b-button variant="danger" @click="$bvModal.hide('modal-sm')"
          >Annuler</b-button
        >
        <b-button @click="onSubmitDelete" variant="success">Confirmer</b-button>
      </b-modal>

      <b-modal
        id="modal-xl"
        size="xl"
        title="Modification du profil"
        hide-footer
        hide-header
        ><div id="modal-personal" class="row g-3">
          <template>
            <div id="headerModification">
              <h5>Modification du profil</h5>
              <b-button
                variant="outline-*"
                block
                @click="$bvModal.hide('modal-xl')"
              >
                <b-icon-arrow-left class="mx-1"></b-icon-arrow-left
                >Retour</b-button
              >
            </div>
          </template>
          <hr />
          <b-form @submit="onSubmit" v-if="show">
            <!-- LOGO -->
            <b-form-group id="input-group-1" label="Logo" label-for="input-1">
              <div id="dFLogo">
                <b-form-file
                  id="input-1"
                  @change="addLogo"
                  type="file"
                  accept="image/png, image/jpeg"
                  ref="img"
                  plain
                ></b-form-file>
                <b-button @click="clearFiles" class="mr-2">Annuler</b-button>
              </div>
            </b-form-group>

            <b-row>
              <div class="col-md-4">
                <!-- NOM ENTREPRISE -->
                <b-form-group
                  id="input-group-2"
                  label="Nom de l'entreprise"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="name"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4">
                <!-- EMAIL -->
                <b-form-group
                  id="input-group-3"
                  label="Email"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4">
                <!-- PHONE -->
                <b-form-group
                  id="input-group-4"
                  label="Telephone"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="phone"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-row>

            <b-row>
              <div class="col-md-2">
                <!-- Number adress -->
                <b-form-group
                  id="input-group-5"
                  label="Numéro"
                  label-for="input-5"
                >
                  <b-form-input
                    id="input-5"
                    v-model="streetNumber"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <!-- POSTAL CODE -->
                <b-form-group
                  id="input-group-6"
                  label="Code postal"
                  label-for="input-6"
                >
                  <b-form-input
                    id="input-6"
                    v-model="postal_code"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- ADRESS -->
                <b-form-group
                  id="input-group-7"
                  label="Nom de rue/avenue/boulevard"
                  label-for="input-7"
                >
                  <b-form-input
                    id="input-7"
                    v-model="streetName"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- CITY -->
                <b-form-group
                  id="input-group-8"
                  label="Ville"
                  label-for="input-8"
                >
                  <b-form-input
                    id="input-8"
                    v-model="city"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-row>

            <b-row>
              <div class="col-md-4">
                <!-- FACEBOOK -->
                <b-form-group
                  id="input-group-9"
                  label="Facebook"
                  label-for="input-9"
                >
                  <b-form-input
                    id="input-9"
                    v-model="facebook"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- TWITTER -->
                <b-form-group
                  id="input-group-10"
                  label="Twitter"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    v-model="twitter"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4">
                <!-- LINKEDIN -->
                <b-form-group
                  id="input-group-11"
                  label="Linkedin"
                  label-for="input-11"
                >
                  <b-form-input
                    id="input-11"
                    v-model="linkedin"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-row>

            <b-row>
              <div class="col-md-4">
                <!-- CATEGORY -->
                <b-form-group
                  id="input-group-12"
                  label="Categorie"
                  label-for="input-12"
                >
                  <b-form-select
                    id="input-12"
                    v-model="category"
                    :options="categorys"
                    required
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- ASSOCIATIONS -->
                <b-form-group
                  id="input-group-13"
                  label="Associations"
                  label-for="input-13"
                >
                  <b-form-select
                    id="input-13"
                    v-model="associations"
                    :options="associationsL"
                    required
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- ACTIVIT AREA -->
                <b-form-group
                  id="input-group-14"
                  label="Secteurs d'activité"
                  label-for="input-14"
                >
                  <b-form-select
                    id="input-14"
                    v-model="activity_area"
                    :options="activity_areaL"
                    required
                  ></b-form-select>
                </b-form-group>
              </div>
            </b-row>

            <!-- DESCRIPTION -->
            <b-form-group
              id="input-group-15"
              label="Description breve de votre entreprise"
              label-for="input-15"
            >
              <b-form-textarea
                id="input-15"
                v-model="description"
                required
              ></b-form-textarea>
            </b-form-group>

            <h4>Informations relative à votre entreprise</h4>

            <b-row>
              <div class="col-md-4">
                <!-- SALARY NUMBER -->
                <b-form-group
                  id="input-group-16"
                  label="Nombre de salarié"
                  label-for="input-16"
                >
                  <b-form-input
                    id="input-16"
                    v-model="employees_number"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- WOMENS NUMBER -->
                <b-form-group
                  id="input-group-17"
                  label="Nombre de femmes"
                  label-for="input-17"
                >
                  <b-form-input
                    id="input-17"
                    v-model="women_number"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <!-- JOBS NUMBER -->
                <b-form-group
                  id="input-group-18"
                  label="Nombre de post à pourvoir"
                  label-for="input-18"
                >
                  <b-form-input
                    id="input-18"
                    v-model="jobs_available_number"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-row>

            <b-row>
              <div class="col-md-6">
                <!-- FUNDS -->
                <b-form-group
                  id="input-group-19"
                  label="Levé de fond (€)"
                  label-for="input-19"
                >
                  <b-form-input
                    id="input-19"
                    v-model="funds"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <!--  -->
                <b-form-group
                  id="input-group-20"
                  label="Chiffre d'affaire annuel total"
                  label-for="input-20"
                >
                  <b-form-input
                    id="input-20"
                    v-model="revenues"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-row>

            <div class="col-12" id="buttonSubmit">
              <b-button variant="success" type="submit" class="btn btn-success">
                Modifier
              </b-button>
            </div>
          </b-form>
        </div></b-modal
      >
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
    show: true,
    categorys: [
      { text: "Choisissez une categorie", value: null },
      { text: "Start-up", value: "Start-up" },
      "Association",
      "Organisme financeur",
      "Organisme de formation",
      "Service public",
      "TPE/PME",
      "Grande entreprises/Grand groupe/ETI",
      "Pole de compétitivité",
    ],
    associationsL: [
      { text: "Choisissez une associations", value: null },
      "Cannes Is Up",
      "Le club des entrepreneurs du pays de Grasse",
      "Nice Starts-up",
      "Telecom Valley",
    ],
    activity_areaL: [
      { text: "Choisissez un secteur d'activité", value: null },
      "Formation",
      "Energie",
      "Evenementiel",
      "Mode et textile",
      "Industrie",
      "Juridique",
      "Médias",
      "Produits et services web",
      "Développement logiciel",
      "Sport",
      "Telecom",
      "Transports",
      "Voyages",
      "Bien-être",
      "Finance",
      "Administration Public",
      "Evenementiel",
    ],
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
    category: null,
    associations: null,
    activity_area: null,
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
        this.actualActor = response.data.body.actor;
        this.name = response.data.body.actor.name;
        this.email = response.data.body.actor.email;
        this.phone = response.data.body.actor.phone;
        this.postal_code = response.data.body.actor.postal_code;
        this.city = response.data.body.actor.city;
        this.streetName = response.data.body.actor.adress;
        this.facebook = response.data.body.actor.facebook;
        this.linkedin = response.data.body.actor.linkedin;
        this.twitter = response.data.body.actor.twitter;
        this.category = response.data.body.actor.category;
        this.associations = response.data.body.actor.associations;
        this.activity_area = response.data.body.actor.activity_area;
        this.description = response.data.body.actor.description;
        this.funds = response.data.body.actor.funds;
        this.employees_number = response.data.body.actor.employees_number;
        this.jobs_available_number =
          response.data.body.actor.jobs_available_number;
        this.women_number = response.data.body.actor.women_number;
        this.revenues = response.data.body.actor.revenues;
        let adressStr = response.data.body.actor.adress;
        let numberstr = adressStr.split(" ");
        this.streetNumber = numberstr[0];
      })
      .catch((error) => console.log(error));
  },

  methods: {
    clearFiles() {
      this.$refs["img"].reset();
    },

    onSubmitDelete(event) {
      event.preventDefault();

      this.$bvModal.hide("modal-sm");

      this.axios
        .get(this.baseUrl + "api/GET/delete/demand", {
          headers: {
            Authorization: "Bearer " + this.token.value,
            "Content-Type": "application/json",
          },
        })
        .then((response) => console.log(response));
    },

    onSubmit(event) {
      event.preventDefault();

      /* recuperation de longitude et latitude */
      this.getPosition();
      /* requete post pour envoie de données dans la BDD */
      let body = JSON.stringify({
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
      });

      this.axios
        .post(this.baseUrl + "api/POST/update/demand", body, {
          headers: {
            Authorization: "Bearer " + this.token.value,
            "Content-Type": "application/json",
          },
        })

        .then((response) => console.log(response));
    },

    getPosition() {
      /* requete afin de recupérer les coordonnées GPS des adresses */

      this.axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${this.streetNumber}+${this.streetName}+${this.city}+${this.postal_code}%22`
        )

        .then((response) => {
          this.longitude = response.data.features[0].geometry.coordinates[1];
          this.latitude = response.data.features[0].geometry.coordinates[0];
        });
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
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

#imgHeader {
  width: 100%;
}

h1 {
  margin-top: 10px;
  text-align: center;
}
#personal {
  width: 90%;
  margin: auto;

  #primaryInformations {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    #title {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 100px;
      h4 {
        font-size: 40px;
      }
    }

    #logo {
      width: 300px;
    }
    h4 {
      color: $secondary;
    }
  }

  .description {
    margin-bottom: 50px;
    margin-top: 10px;
    .containerDescription {
      width: 900px;
    }
  }

  #descriptionInformations {
    width: 80%;
    margin: auto;
  }

  #secondaryInformations,
  #privateInformations {
    color: $primary;
    display: flex;
    .subtitle {
      width: 300px;
      text-align: center;
      h4 {
        width: 300px;
      }
    }
    .container {
      display: flex;
      margin-left: 100px;
      .infoContainer {
        display: flex;
        .infoName {
          width: 150px;
        }
        .infoText {
          width: 300px;
        }
        .infoTextDesc {
          width: 600px;
        }
      }

      #cRight {
        margin-left: 25px;
      }
    }
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
#modal-personal {
  #headerModification {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  label {
    margin-top: 15px;
  }
  select {
    width: 350px;
    height: 37px;
    border-color: #ced4da;
    border-radius: 5px;
  }
  #input-1 {
    border: solid 1px #ced4da;
    width: 92%;
    border-radius: 5px 0 0 5px;
  }
  .btn-secondary {
    height: 32px;
    padding: 0;
    width: 90px;
    border-radius: 0 5px 5px 0;
    background-color: #ececec;
    color: black;
  }

  .btn-secondary:hover {
    color: black;
    background-color: #dfdfdf;
  }

  .btn-success {
    width: 100%;
    margin-top: 20px;
  }

  h4 {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 20px;
  }
}
#btnModif {
  display: flex;
  justify-content: center;
  margin: 20px;
  .btn-primary {
    cursor: pointer;
    margin: 20px;
  }
}
#dFLogo {
  display: flex;
}
</style>
