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
        <h5>modification</h5>

        <p>avant</p>

        <p>apres</p>

        <b-form>
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

        <span id="actorId" style="display:none">{{ data.item.id }}</span>
        <div>
          <b-button @click="acceptModification" class="btn-success"
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

      oldUpdate: [],
      newUpdate: [],

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

      //NewTabWithAllInfos
      buffersAndActors: [],
    };
  },

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

    acceptModification() {
      let span = document.getElementById("actorId");
      let id = span.innerText;

      this.axios

        .put(this.baseUrl + "api/admin/PUT/buffer/" + id, {
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
          website: this.website,
          activity_area: this.activity_area,
          funds: this.funds,
          employees_number: this.employees_number,
          jobs_available_number: this.employees_number,
          women_number: this.women_number,
          revenues: this.revenues,
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
      console.log(id);

      this.axios
        .get(this.baseUrl + "api/GET/bufferId/" + id)
        .then((response) => {
          this.name = response.data.body.actor.name;
        });
    },
  },
};
</script>

<style lang="sass"></style>
