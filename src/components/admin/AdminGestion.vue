<template>
  <div>
    <b-table primary-key="id" striped hover :items="admins" :fields="liste">
      <template #cell(actions)="data">
        <!-- ------------------------------
          Update admin (Non opérationnel) 
        -------------------------------- -->
        <!-- ----------------->
        <div>
          <input v-model="admins.firstname" type="text" />
          <button @click="manageAdmin(data.item.id)">test</button>
        </div>
        <!-- ---------------------->

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
      </b-modal>
    </div>

    <b-button
      pill
      variant="outline-success"
      size="sm"
      class="m-2"
      @click="createAdmin"
    >
      Créer un nouvel administrateur
    </b-button>
  </div>
</template>

<script>
export default {
  name: "AdminGestion",
  inject: ["baseUrl"],

  data() {
    return {
      liste: [
        { key: "id", label: "id" },
        { key: "firstname", label: "Prénom" },
        { key: "lastname", label: "Nom" },
        { key: "email", label: "E-mail" },
        { key: "actions", label: "Actions" },
      ],

      admins: [],
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
    manageAdmin(id) {
      this.axios
        .put(this.baseUrl + "api/admin/PUT/admin/" + id, {
          firstname: this.admins.firstname,
        })
        .then((response) => {
          console.log(response.status);
        });
    },
  },
};
</script>

<style lang="sass"></style>
