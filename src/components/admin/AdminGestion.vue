<template>
  <div>
    <b-table primary-key="id" striped hover :items="admins" :fields="liste">
      <template #cell(actions)="data">
        <b-button
          v-show="data.item.id != 1"
          @click="
            showModal(
              data.item.id,
              data.item.firstname,
              data.item.lastname,
              data.item.email
            )
          "
          pill
          variant="warning"
          size="sm"
          class="m-2"
        >
          Modifier
        </b-button>

        <b-button
          pill
          variant="danger"
          size="sm"
          class="m-2"
          v-show="data.item.id != 1"
          @click="deleteAdmin(data.item.id)"
        >
          Supprimer
        </b-button>

        <p style="color: red" v-show="data.item.id == 1">
          Non modifiable / supprimable
        </p>

        <b-modal
          :id="'modal-xs' + data.item.id"
          size="xs"
          hide-footer
          hide-header
        >
          <div>
            <h4 style="text-align:center;margin-top:10px;margin-bottom:15px">
              Modifier un Administrateur.
            </h4>
            <b-form @submit="manageAdmin" v-if="show">
              <!-- Prénom -->
              <b-form-group
                style="margin-bottom:10px"
                id="input-group-1"
                label="Votre prénom:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="updateAdmins.firstname"
                  type="text"
                  placeholder="Prénom"
                  required
                ></b-form-input>
              </b-form-group>

              <!-- Nom -->
              <b-form-group
                style="margin-bottom:10px"
                id="input-group-1"
                label="Votre Nom:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="updateAdmins.lastname"
                  type="text"
                  placeholder="Nom"
                  required
                ></b-form-input>
              </b-form-group>

              <!-- Email -->
              <b-form-group
                style="margin-bottom:10px"
                id="input-group-1"
                label="Adresse E-mail:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="updateAdmins.email"
                  type="email"
                  placeholder="E-mail"
                  required
                ></b-form-input>
              </b-form-group>

              <span id="adminId" style="display:none">{{ data.item.id }}</span>

              <div style="float:right;margin-top:5px">
                <b-button
                  style="margin-right:10px"
                  type="submit"
                  variant="primary"
                  >Valider</b-button
                >
                <b-button
                  @click="$bvModal.hide('modal-xs' + data.item.id)"
                  variant="danger"
                  >Annuler</b-button
                >
              </div>
            </b-form>
          </div>
        </b-modal>
      </template>
    </b-table>

    <!-- ------------------------------
          Input Création admin  
        -------------------------------- -->
    <div>
      <b-button variant="primary" v-b-modal.modal-1
        >Créer un Administrateur</b-button
      >

      <b-modal hide-footer hide-header id="modal-1">
        <div>
          <h4 style="text-align:center;margin-top:10px;margin-bottom:15px">
            Création d'un Administrateur.
          </h4>
          <b-form @submit="createAdmin" v-if="show">
            <!-- Prénom -->
            <b-form-group
              style="margin-bottom:10px"
              id="input-group-4"
              label="Votre prénom:"
              label-for="input-4"
            >
              <b-form-input
                id="input-1"
                v-model="newAdmin.firstname"
                type="text"
                placeholder="Prénom"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Nom -->
            <b-form-group
              style="margin-bottom:10px"
              id="input-group-5"
              label="Votre Nom:"
              label-for="input-5"
            >
              <b-form-input
                id="input-1"
                v-model="newAdmin.lastname"
                type="text"
                placeholder="Nom"
                required
              ></b-form-input>
            </b-form-group>
            <!-- email -->
            <b-form-group
              style="margin-bottom:10px"
              id="input-group-6"
              label="Votre Adresse E-mail:"
              label-for="input-6"
            >
              <b-form-input
                id="input-1"
                v-model="newAdmin.email"
                type="email"
                placeholder="Adresse E-mail"
                required
              ></b-form-input>
            </b-form-group>
            <div style="float:right;margin-top:20px">
              <b-button
                style="margin-right:15px"
                type="submit"
                variant="primary"
                >Valider</b-button
              >

              <b-button @click="$bvModal.hide('modal-1')" variant="danger"
                >Annuler</b-button
              >
            </div>
          </b-form>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminGestion",
  inject: ["baseUrl"],

  data() {
    return {
      // Tableau d'affichage
      liste: [
        { key: "id", label: "N°" },
        { key: "firstname", label: "Prénom" },
        { key: "lastname", label: "Nom" },
        { key: "email", label: "E-mail" },
        { key: "actions", label: "Actions" },
      ],

      // Tableau récupérations tous les admins
      admins: [],

      // Data Modification admin
      updateAdmins: {
        firstname: "",
        lastname: "",
        email: "",
        id: "",
      },

      show: true,

      // Data création nouvel admin
      newAdmin: {
        firstname: "",
        lastname: "",
        email: "",
      },
    };
  },

  // ?Récupération des administrateurs dans la Base de donnée
  beforeMount() {
    this.axios.get(this.baseUrl + "api/admin/GET/admins").then((response) => {
      for (const elem of response.data.body.admins) {
        this.admins.push(elem);
      }
      // console.log(this.admins);
    });
  },
  methods: {
    showModal(id, f, l, e) {
      this.updateAdmins.firstname = f;
      this.updateAdmins.lastname = l;
      this.updateAdmins.email = e;
      this.$bvModal.show("modal-xs" + id);
    },
    // . Suppression d'un Administrateur
    deleteAdmin(id) {
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
              .delete(this.baseUrl + "api/admin/DELETE/admin/" + id)
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

    // .Création d'un Administrateur
    createAdmin(e) {
      e.preventDefault();
      this.admins = [];
      this.axios
        .post(this.baseUrl + "api/admin/POST/create", {
          firstname: this.newAdmin.firstname,
          lastname: this.newAdmin.lastname,
          email: this.newAdmin.email,
        })
        .then((response) => {
          console.log(response.status);
          this.axios
            .get(this.baseUrl + "api/admin/GET/admins")
            .then((response) => {
              for (const elem of response.data.body.admins) {
                this.admins.push(elem);
              }
              this.$bvModal.hide("modal-1");

              // console.log(this.admins);
            });
        });
    },
    // .Modification d'un Administrateur
    manageAdmin(e) {
      e.preventDefault();

      this.admins = [];
      let span = document.getElementById("adminId");
      let id = span.innerText;

      console.log(id);

      this.axios
        .put(this.baseUrl + "api/admin/PUT/admin/" + id, {
          firstname: this.updateAdmins.firstname,
          lastname: this.updateAdmins.lastname,
          email: this.updateAdmins.email,
        })
        .then((response) => {
          console.log(response.status);
          this.axios
            .get(this.baseUrl + "api/admin/GET/admins")
            .then((response) => {
              for (const elem of response.data.body.admins) {
                this.admins.push(elem);
              }
              this.$bvModal.hide("modal-xs" + id);

              // console.log(this.admins);
            });
        });
    },
  },
};
</script>

<style>
#test {
  text-align: center;
}
</style>
