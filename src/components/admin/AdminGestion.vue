<template>
  <div>
    <b-table primary-key="id" striped hover :items="admins" :fields="liste">
      <template #cell(actions)="data">
        <!-- ------------------------------
          Button Delete admin 
        -------------------------------- -->
        <b-button
          pill
          variant="secondary"
          size="sm"
          class="m-2"
          @click="deleteAdmin(data.item.id)"
        >
          Supprimer
        </b-button>

        <b-button
          @click="$bvModal.show('modal-xs' + data.item.id)"
          pill
          variant="secondary"
          size="sm"
          class="m-2"
        >
          Modifier
        </b-button>

        <b-modal
          :id="'modal-xs' + data.item.id"
          size="xs"
          title="Extra Large Modal"
          hide-footer
        >
          <div>
            <b-form @submit="manageAdmin" v-if="show">
              <!-- Prénom -->
              <b-form-group
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
                id="input-group-1"
                label="Adresse E-mail:"
                label-for="input-1"
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
              <b-button
                block
                @click="$bvModal.hide('modal-xs' + data.item.id)"
                type="submit"
                variant="primary"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </b-modal>
      </template>
    </b-table>

    <!-- ------------------------------
          Button / Input Création admin 
          (A mettre dans un modal)
        -------------------------------- -->
    <div>
      <b-button hide-footer v-b-modal.modal-1>Ajouter</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p>Création d'un Administrateur</p>
        <label for="firstname"></label>
        <input
          v-model="newAdmin.firstname"
          id="firstname"
          placeholder="Prénom"
          type="text"
        />
        <label for="lastname"></label>
        <input
          v-model="newAdmin.lastname"
          id="lastname"
          placeholder="Nom"
          type="text"
        />
        <label for="email"></label>
        <input
          v-model="newAdmin.email"
          id="email"
          placeholder="E-mail"
          type="email"
        />
        <b-button
          pill
          variant="outline-success"
          size="sm"
          class="m-2"
          @click="createAdmin"
        >
          Créer un nouvel administrateur
        </b-button>
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
        { key: "id", label: "id" },
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
    // . Suppression d'un Administrateur
    deleteAdmin(id) {
      this.axios
        .delete(this.baseUrl + "/api/admin/DELETE/admin/" + id)
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
    },

    // .Création d'un Administrateur
    createAdmin() {
      this.axios
        .post(this.baseUrl + "api/admin/POST/create", {
          firstname: this.newAdmin.firstname,
          lastname: this.newAdmin.lastname,
          email: this.newAdmin.email,
        })
        .then((response) => console.log(response));
    },
    // .Modification d'un Administrateur
    manageAdmin(e) {
      e.preventDefault();

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
          this.$router.go();
        });
    },
  },
};
</script>

<style lang="sass"></style>
