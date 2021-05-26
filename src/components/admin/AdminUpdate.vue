<template>
  <b-table
    :primary-key="id"
    striped
    hover
    :items="updateBuffer"
    :fields="liste"
  >
    <template #cell(actions)="data">
      <b-button @click="showModif(data.item.id)" variant="primary" size="sm"
        >Voir les modifications</b-button
      >
      <b-modal
        size="xl"
        :id="'modalUpdate' + data.item.id"
        hide-footer
        hide-header
      >
        <b-form id="adminUpdate">
          <!-- LOGO -->
          <h5>modification</h5>
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
                  v-model="data.item.name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-2" triggers="hover" placement="top">
                {{ data.item.actorName }}
                <b-icon-arrow-right></b-icon-arrow-right> {{ data.item.name }}
              </b-popover>
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
                  v-model="data.item.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-3" triggers="hover" placement="top">
                {{ data.item.actorEmail }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.email }}
              </b-popover>
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
                  v-model="data.item.phone"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-4" triggers="hover" placement="top">
                {{ data.item.actorPhone }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.phone }}
              </b-popover>
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
                  v-model="data.item.bufferStreetNumber"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-5" triggers="hover" placement="top">
                {{ data.item.actorStreetNumber }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.bufferStreetNumber }}
              </b-popover>
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
                  v-model="data.item.postal_code"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-6" triggers="hover" placement="top">
                {{ data.item.actorPostal_code }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.postal_code }}
              </b-popover>
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
                  v-model="data.item.bufferStreetName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-7" triggers="hover" placement="top">
                {{ data.item.actorAdress }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.bufferStreetName }}
              </b-popover>
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
                  v-model="data.item.city"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-8" triggers="hover" placement="top">
                {{ data.item.actorCity }}
                <b-icon-arrow-right></b-icon-arrow-right> {{ data.item.city }}
              </b-popover>
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
                  v-model="data.item.facebook"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-9" triggers="hover" placement="top">
                {{ data.item.actorFacebook }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.facebook }}
              </b-popover>
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
                  v-model="data.item.twitter"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-10" triggers="hover" placement="top">
                {{ data.item.actorTwitter }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.twitter }}
              </b-popover>
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
                  v-model="data.item.linkedin"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-11" triggers="hover" placement="top">
                {{ data.item.actorLinkedin }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.linkedin }}
              </b-popover>
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
                  v-model="data.item.category"
                  :options="categorys"
                  required
                ></b-form-select>
              </b-form-group>
              <b-popover target="input-12" triggers="hover" placement="top">
                {{ data.item.actorCategory }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.category }}
              </b-popover>
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
                  v-model="data.item.associations"
                  :options="associationsL"
                  required
                ></b-form-select>
              </b-form-group>
              <b-popover target="input-13" triggers="hover" placement="top">
                {{ data.item.actorAssociations }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.associations }}
              </b-popover>
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
                  v-model="data.item.activity_area"
                  :options="activity_areaL"
                  required
                ></b-form-select>
              </b-form-group>
              <b-popover target="input-14" triggers="hover" placement="top">
                {{ data.item.actorActivity_area }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.activity_area }}
              </b-popover>
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
              v-model="data.item.description"
              required
            ></b-form-textarea>
          </b-form-group>
          <b-popover target="input-15" triggers="hover" placement="top">
            {{ data.item.actorDescription }}
            <b-icon-arrow-right></b-icon-arrow-right>
            {{ data.item.description }}
          </b-popover>

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
                  v-model="data.item.employees_number"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-16" triggers="hover" placement="top">
                {{ data.item.actorEmployees_number }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.employees_number }}
              </b-popover>
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
                  v-model="data.item.women_number"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-17" triggers="hover" placement="top">
                {{ data.item.actorWomen_number }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.women_number }}
              </b-popover>
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
                  v-model="data.item.jobs_available_number"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-18" triggers="hover" placement="top">
                {{ data.item.actorJobs_available_number }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.jobs_available_number }}
              </b-popover>
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
                  v-model="data.item.funds"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-19" triggers="hover" placement="top">
                {{ data.item.actorFunds }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.funds }}
              </b-popover>
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
                  v-model="data.item.revenues"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-popover target="input-20" triggers="hover" placement="top">
                {{ data.item.actorRevenues }}
                <b-icon-arrow-right></b-icon-arrow-right>
                {{ data.item.revenues }}
              </b-popover>
            </div>
          </b-row>
        </b-form>

        <span id="actorId" style="display:none">{{ data.item.id }}</span>

        <div class="buttonAdminUpdate">
          <b-button @click="acceptModification(data.item)" class="btn-success"
            >Accepter</b-button
          >
          <b-button @click="cancelModification" class="btn-alert"
            >Refuser</b-button
          >
        </div>
      </b-modal>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminUpdate",
  inject: ["baseUrl"],
  props: ["actors", "buffers", "updateBuffer"],

  data() {
    return {
      // Tableau d'affichage
      liste: [
        { key: "id", label: "N°" },
        { key: "name", label: "Nom entreprise" },
        { key: "email", label: "E-mail" },
        { key: "phone", label: "Téléphone" },
        { key: "category", label: "Categorie" },
        { key: "associations", label: "Associations" },
        { key: "actions", label: "Actions" },
      ],

      categorys: [
        { text: "Choisissez une categorie", value: null },
        { text: "Start-up", value: "startUp" },
        { text: "Association", value: "association" },
        { text: "Organisme financeur", value: "organismeFinanceur" },
        { text: "Organisme de formation", value: "organismeDeFormation" },
        { text: "Service public", value: "servicePublic" },
        { text: "TPE/PME", value: "tpePme" },
        { text: "Grande entreprises/Grand groupe/ETI", value: "eti" },
        { text: "Pole de compétitivité", value: "poleDeCompetitivite" },
      ],
      associationsL: [
        { text: "Choisissez une associations", value: null },
        { text: "Cannes Is Up", value: "cannesIsUp" },
        {
          text: "Le club des entrepreneurs du pays de Grasse",
          value: "clubGrasse",
        },
        { text: "Nice Starts-up", value: "NiceStartsUp" },
        { text: "Telecom Valley", value: "telecomValley" },
      ],
      activity_areaL: [
        { text: "Choisissez un secteur d'activité", value: null },
        { text: "Formation", value: "formation" },
        { text: "Energie", value: "energie" },
        { text: "Evenementiel", value: "evenementiel" },
        { text: "Mode et textile", value: "mode" },
        { text: "Industrie", value: "industrie" },
        { text: "Recrutement", value: "recrutement" },
        { text: "Juridique", value: "Juridique" },
        { text: "Médias", value: "media" },
        { text: "Produits et services web", value: "produitsEtServicesWeb" },
        { text: "Développement logiciel", value: "logiciel" },
        { text: "Sport", value: "sport" },
        { text: "Telecom", value: "telecom" },
        { text: "Transports", value: "transports" },
        { text: "Voyages", value: "voyages" },
        { text: "Bien-être", value: "bienEtre" },
        { text: "Finance", value: "finance" },
        { text: "Administration Public", value: "administrationPublic" },
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

      //NewTabWithAllInfos
      buffersAndActors: [],
    };
  },

  mounted() {},

  methods: {
    clearFiles() {
      this.$refs["img"].reset();
    },

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

    acceptModification(updated) {
      let span = document.getElementById("actorId");
      let id = span.innerText;

      this.axios

        .put(this.baseUrl + "api/admin/PUT/update/actor/" + id, {
          /* body de la requete */
          name: updated.name,
          email: updated.email,
          logo: updated.logo,
          adress: updated.adress,
          postal_code: updated.postal_code,
          city: updated.city,
          longitude: updated.longitude,
          latitude: updated.latitude,
          phone: updated.phone,
          category: updated.category,
          associations: updated.associations,
          description: updated.description,
          facebook: updated.facebook,
          twitter: updated.twitter,
          linkedin: updated.linkedin,
          website: updated.website,
          activity_area: updated.activity_area,
          funds: updated.funds,
          employees_number: updated.employees_number,
          jobs_available_number: updated.employees_number,
          women_number: updated.women_number,
          revenues: updated.revenues,
        })

        .then((response) => console.log(response));
    },

    cancelModification() {
      let span = document.getElementById("actorId");
      let id = span.innerText;

      this.axios

        .delete(this.baseUrl + "api/admin/DELETE/buffer/" + id)

        .then((response) => console.log(response));
    },

    showModif(id) {
      this.$bvModal.show("modalUpdate" + id);
    },
  },
};
</script>

<style lang="scss">
#adminUpdate {
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
    cursor: pointer;
  }

  .btn-secondary {
    height: 32px;
    padding: 0;
    width: 90px;
    border-radius: 0 5px 5px 0;
    background-color: #ececec;
    color: black;
  }

  h5 {
    text-align: center;
  }

  .btn-secondary:hover {
    color: black;
    background-color: #dfdfdf;
  }

  h4 {
    margin-top: 15px;
    text-align: center;
  }
}
.buttonAdminUpdate {
  text-align: center;
  margin: 15px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}
</style>
