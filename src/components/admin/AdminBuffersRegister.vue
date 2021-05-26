<template>
  <b-table striped hover :items="registerBuffer" :fields="registerFields">
    <template #cell(actions)="data">
      <!-- Bouton de validation -->
      <b-button
        pill
        variant="primary"
        size="sm"
        @click="confirmRegister(data.item.id)"
      >
        Valider
      </b-button>

      <!-- Bouton de modification -->
      <b-button
        @click="
          showModal(
            data.item.id,
            data.item.name,
            data.item.email,
            data.item.city
          )
        "
        pill
        variant="secondary"
        size="sm"
        class="m-2"
      >
        Modifier
      </b-button>

      <!-- Bouton de refus -->
      <b-button
        pill
        variant="danger"
        size="sm"
        @click="deleteRegister(data.item.id)"
      >
        Refuser
      </b-button>
      <!--MODAL-->
      <b-modal
        :id="'modalRegister' + data.item.id"
        size="xl"
        title="Modal buffer modification"
        hide-footer
        class="modal-open"
        data-modal-open-count="1"
        no-stacking
        centered
        scrollable
      >
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <h5>Demande d'inscription</h5>
          <b-button size="sm" variant="outline-danger" @click="close()">
            Fermer
          </b-button>
        </template>

        <b-form @submit="updateRegister(e)" v-if="show">
          <!-- LOGO -->
          <b-form-group id="input-group-1" label="Logo" label-for="input-1">
            <b-form-file
              id="input-1"
              @change="addLogo"
              type="file"
              accept="image/png, image/jpeg"
              ref="img"
              required
            ></b-form-file>
          </b-form-group>

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

          <!-- EMAIL -->
          <b-form-group id="input-group-3" label="Email" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="data.item.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

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

          <!-- Number adress -->
          <b-form-group id="input-group-5" label="Numéro" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="data.item.adress"
              required
            ></b-form-input>
          </b-form-group>

          <!-- ADRESS -->
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

          <!-- CITY -->
          <b-form-group id="input-group-7" label="Ville" label-for="input-7">
            <b-form-input
              id="input-7"
              v-model="data.item.city"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <!-- POSTAL CODE -->
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

          <!-- FACEBOOK -->
          <b-form-group id="input-group-8" label="Facebook" label-for="input-8">
            <b-form-input
              id="input-8"
              v-model="data.item.facebook"
              type="text"
            ></b-form-input>
          </b-form-group>

          <!-- TWITTER -->
          <b-form-group id="input-group-9" label="Twitter" label-for="input-9">
            <b-form-input
              id="input-9"
              v-model="data.item.twitter"
              type="text"
            ></b-form-input>
          </b-form-group>

          <!-- LINKEDIN -->
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

          <!-- CATEGORY -->
          <b-form-group
            id="input-group-11"
            label="Categorie"
            label-for="input-11"
          >
            <b-form-select
              id="input-11"
              v-model="data.item.category"
              :options="categorys"
              required
            ></b-form-select>
          </b-form-group>

          <!-- ASSOCIATIONS -->
          <b-form-group
            id="input-group-12"
            label="Associations"
            label-for="input-12"
          >
            <b-form-select
              id="input-12"
              v-model="data.item.associations"
              :options="associationsL"
              required
            ></b-form-select>
          </b-form-group>

          <!-- ACTIVIT AREA -->
          <b-form-group
            id="input-group-13"
            label="Secteurs d'activité"
            label-for="input-13"
          >
            <b-form-select
              id="input-13"
              v-model="data.item.activity_area"
              :options="activity_areaL"
              required
            ></b-form-select>
          </b-form-group>

          <!-- DESCRIPTION -->
          <b-form-group
            id="input-group-14"
            label="Description breve de votre entreprise"
            label-for="input-14"
          >
            <b-form-textarea
              id="input-14"
              v-model="data.item.description"
              required
            ></b-form-textarea>

            <h4>Informations Relative à votre entreprise</h4>

            <!-- FUNDS -->
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
          </b-form-group>

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

          <!-- JOBS NUMBER -->
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
            ></b-form-input>
          </b-form-group>

          <!-- WOMENS NUMBER -->
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

          <!--  -->
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

          <span id="bufferId" style="display:none">{{ data.item.id }}</span>

          <div class="col-12" id="buttonSubmit">
            <button type="submit" class="btn btn-primary mt-3 w-100">
              Modifier
            </button>
          </div>
        </b-form>
      </b-modal>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "AdminBuffersRegister",
  props: ["registerBuffer", "buffers"],
  inject: ["baseUrl", "token"],

  data() {
    return {
      registerFields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Nom entreprise" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Téléphone" },
        { key: "category", label: "Categorie" },
        { key: "associations", label: "Association" },
        { key: "actions", label: "Actions" },
      ],

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

      show: true,

      // updateData: {
      //   firstname: "",
      //   lastname: "",
      //   email: "",
      //   id: "",
      // },
    };
  },

  /*   beforeMount() {
    // console.log(response);
    for (const elem of this.registerBuffer) {
      this.registerBuffer.push(elem);
      let adressStr = elem.adress;
      let number = adressStr.split(/(\d+)/g);
      elem.streetName = adressStr.replace(number[1], "");
      elem.streetNumber = number[1];
    }
  }, */

  methods: {
    // ?Show Modal
    showModal(id, n, e, c) {
      this.firstname = n;
      this.lastname = e;
      this.email = c;
      this.$bvModal.show("modalRegister" + id);
    },
    // ? Comfirmation de la demande
    confirmRegister(id) {
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
              .post(this.baseUrl + "api/admin/POST/validate/" + id)
              .then((response) => {
                document.querySelectorAll("tr").forEach((e) => {
                  e.querySelectorAll("td:first-child").forEach((i) => {
                    if (i.innerText == id) {
                      e.style.display = "none";
                    }
                  });
                });
                console.log(response.status);
              });
          }
        });
    },
    // ! Suppression de la demande
    deleteRegister(id) {
      this.$bvModal
        .msgBoxConfirm("Êtes vous sûr?", {
          okVariant: "danger",
          id: "test",
          cancelTitle: "Annuler",
          okTitle: "Confirmer",
          footerClass: "p-2",
          hideHeaderClose: false,
        })
        .then((value) => {
          if (value) {
            this.axios
              .delete(this.baseUrl + "/api/admin/DELETE/buffer/" + id)
              .then((response) => {
                document.querySelectorAll("tr").forEach((e) => {
                  e.querySelectorAll("td:first-child").forEach((i) => {
                    if (i.innerText == id && id != 1) {
                      e.style.display = "none";
                    }
                    if (id == 1) {
                      console.log("Non supprimable");
                    }
                  });
                });
                console.log(response.status);
              });
          }
        });
    },

    // . Update de la demande
    updateRegister(e) {
      e.preventDefault();
      let span = document.getElementById("bufferId");
      let id = span.innerText;
      console.log(id);
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

        .then(response);
      this.$bvModal.hide("modal-1");
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
