<template>
  <b-table
    :primary-key="id"
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
        Voir ou Modifier
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
        title="Modifier un acteur"
        hide-footer
      >
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <h5>Modifier un acteur</h5>
          <b-button size="sm" variant="outline-danger" @click="close()">
            Fermer
          </b-button>
        </template>
        <b-container>
          <h1>Modifications</h1>

          <b-form @submit="Update" v-if="show">
            <!-- LOGO -->
            <b-form-group id="input-group-1" label="Logo" label-for="input-1">
              <b-form-file
                id="input-1"
                @change="addLogo"
                type="file"
                accept="image/png, image/jpeg"
                ref="img"
                placeholder=" "
              ></b-form-file>
            </b-form-group>

            <!-- NOM ENTREPRISE -->
            <b-row>
              <div class="col-md-4">
                <b-col>
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
                </b-col>
              </div>

              <!-- EMAIL -->
              <div class="col-md-4">
                <b-col>
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
                </b-col>
              </div>

              <!-- PHONE -->
              <div class="col-md-4">
                <b-col>
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
                </b-col>
              </div>
            </b-row>

            <!-- Number adress -->

            <b-row>
              <div class="col-md-2">
                <b-col>
                  <b-form-group
                    id="input-group-5"
                    label="Numéro"
                    label-for="input-5"
                  >
                    <b-form-input
                      id="input-5"
                      v-model="data.item.streetNumber"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>
              <!-- ADRESS -->
              <div class="col-md-4">
                <b-col>
                  <b-form-group
                    id="input-group-6"
                    label="Nom de rue/avenue/boulevard"
                    label-for="input-6"
                  >
                    <b-form-input
                      id="input-6"
                      v-model="data.item.streetName"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>

              <!-- CITY -->
              <div class="col-md-4">
                <b-col>
                  <b-form-group
                    id="input-group-7"
                    label="Ville"
                    label-for="input-7"
                  >
                    <b-form-input
                      id="input-7"
                      v-model="data.item.city"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>

              <!-- POSTAL CODE -->
              <div class="col-md-2">
                <b-col>
                  <b-form-group
                    id="input-group-7"
                    label="Code postal"
                    label-for="input-7"
                  >
                    <b-form-input
                      id="input-7"
                      v-model="data.item.postal_code"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>
            </b-row>

            <!-- WEBSITE -->
            <b-row>
              <div class="col-md-3">
                <b-col>
                  <b-form-group
                    id="input-group-8"
                    label="Website"
                    label-for="input-8"
                  >
                    <b-form-input
                      id="input-8"
                      v-model="data.item.website"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>

              <!-- FACEBOOK -->
              <div class="col-md-3">
                <b-col>
                  <b-form-group
                    id="input-group-8"
                    label="Facebook"
                    label-for="input-8"
                  >
                    <b-form-input
                      id="input-8"
                      v-model="data.item.facebook"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>

              <!-- TWITTER -->
              <div class="col-md-3">
                <b-col>
                  <b-form-group
                    id="input-group-9"
                    label="Twitter"
                    label-for="input-9"
                  >
                    <b-form-input
                      id="input-9"
                      v-model="data.item.twitter"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>

              <!-- LINKEDIN -->
              <div class="col-md-3">
                <b-col>
                  <b-form-group
                    id="input-group-10"
                    label="Linkedin"
                    label-for="input-10"
                  >
                    <b-form-input
                      id="input-10"
                      v-model="data.item.linkedin"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </div>
            </b-row>

            <!-- CATEGORY -->
            <b-row>
              <b-col>
                <b-form-group
                  id="input-group-11"
                  label="Categorie"
                  label-for="input-11"
                >
                  <b-form-select
                    class="p-2"
                    id="input-11"
                    v-model="data.item.category"
                    :options="categorys"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <!-- ASSOCIATIONS -->

              <b-col>
                <b-form-group
                  id="input-group-12"
                  label="Associations"
                  label-for="input-12"
                >
                  <b-form-select
                    id="input-12"
                    class="p-2"
                    v-model="data.item.associations"
                    :options="associationsL"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <!-- ACTIVIT AREA -->

              <b-col>
                <b-form-group
                  id="input-group-13"
                  label="Secteurs d'activité"
                  label-for="input-13"
                >
                  <b-form-select
                    id="input-13"
                    class="p-2"
                    v-model="data.item.activity_area"
                    :options="activity_areaL"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- DESCRIPTION -->
            <b-row>
              <b-form-group
                id="input-group-14"
                label="Description breve de votre entreprise"
                label-for="input-14"
              >
                <b-form-textarea
                  id="input-14"
                  v-model="data.item.description"
                  required
                  rows="8"
                ></b-form-textarea></b-form-group
            ></b-row>

            <h1>Informations Relative a votre entreprise</h1>

            <!-- FUNDS -->
            <b-row>
              <b-col>
                <b-form-group
                  id="input-group-15"
                  label="Levé de fond (€)"
                  label-for="input-15"
                >
                  <b-form-input
                    id="input-15"
                    v-model="data.item.funds"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <!-- SALARY NUMBER -->
              <b-col>
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
              </b-col>

              <!-- JOBS NUMBER -->
              <b-col>
                <b-form-group
                  id="input-group-17"
                  label="Nombre de post à pourvoir"
                  label-for="input-17"
                >
                  <b-form-input
                    id="input-17"
                    v-model="data.item.jobs_available_number"
                    type="number"
                    required
                  ></b-form-input> </b-form-group
              ></b-col>

              <!-- WOMENS NUMBER -->
              <b-col>
                <b-form-group
                  id="input-group-18"
                  label="Nombre de femmes"
                  label-for="input-18"
                >
                  <b-form-input
                    id="input-18"
                    v-model="data.item.women_number"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <!--REVENUES  -->

              <b-col>
                <b-form-group
                  id="input-group-19"
                  label="Chiffre d'affaire annuel total"
                  label-for="input-19"
                >
                  <b-form-input
                    id="input-19"
                    v-model="data.item.revenues"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <span id="actorId" style="display:none">{{ data.item.id }}</span>
            <div class="col-12" id="buttonSubmit">
              <button type="submit" class="btn btn-primary">
                Modifier
              </button>
            </div>
          </b-form>
        </b-container>
      </b-modal>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminActorsManage",
  inject: ["baseUrl", "token"],
  props: ["actors"],

  data() {
    return {
      actorsFields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Nom entreprise" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Téléphone" },
        { key: "category", label: "Categorie" },
        { key: "associations", label: "Association" },
        { key: "actions", label: "Actions" },
      ],

      show: true,
      categorys: [
        { text: "Choisissez une categorie", value: null },
        "Start-up",
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
      id: "",
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
          let adressStr = elem.adress;
          let number = adressStr.split(/(\d+)/g);
          elem.streetName = adressStr.replace(number[1], "");
          elem.streetNumber = number[1];

          // console.log(elem.category);
        }
      });
  },

  methods: {
    Update(e) {
      e.preventDefault();
      let span = document.getElementById("actorId");
      let id = span.innerText;

      this.actors.forEach((element) => {
        if (id == element.id) {
          this.logo = element.logo;
          this.name = element.name;
          this.email = element.email;
          this.phone = element.phone;
          this.streetNumber = element.streetNumber;
          this.streetName = element.streetName;
          this.adress = element.adress;
          this.city = element.city;
          this.postal_code = element.postal_code;
          this.website = element.website;
          this.facebook = element.facebook;
          this.twitter = element.twitter;
          this.linkedin = element.linkedin;
          this.category = element.category;
          this.associations = element.associations;
          this.activity_area = element.activity_area;
          this.description = element.description;

          /* information visible uniquement par l'admin */

          this.funds = element.funds;
          this.employees_number = element.employees_number;
          this.jobs_available_number = element.jobs_available_number;
          this.women_number = element.women_number;
          this.revenues = element.revenues;
          this.position = element.position;
          this.latitude = element.latitude;
          this.longitude = element.longitude;
        }
      });

      this.axios

        .put(this.baseUrl + "api/admin/PUT/actor/" + id, {
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
      this.$bvModal.hide("modal-xl" + id);
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
                    // console.log(e.id.substr(-1));
                    e.style.display = "none";
                  }
                });
                // console.log(response.status);
              });

            // console.log(id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
  },
};
</script>

<style lang="sass"></style>
