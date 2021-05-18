<template>
  <div id="app">
    <Header />
    <div class="mainContainer">
      <div class="container">
        <div class="form-group">
          <h1>Connexion</h1>
          <label for="exampleInputEmail1"
            >Veuillez entrer votre adresse e-mail</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>
        <div class="message" :style="styleObject">
          {{ responseToShow }}
        </div>
        <button @click="login" class="btn btn-primary">
          Connexion
        </button>
      </div>

      <div class="img">
        <img
          src="https://www.frenchtechcotedazur.fr/wp-content/uploads/2020/07/contact-.jpg"
          alt=""
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// Import header et footer

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Login",
  inject: ["baseUrl"],

  components: {
    Header,
    Footer,
  },
  data: () => ({
    email: "",
    responseToShow: "",
    styleObject: {
      color: "",
    },
  }),

  methods: {
    login() {
      /* requete post pour envoie de données dans la BDD */

      this.axios
        .post(this.baseUrl + "api/POST/login", {
          /* body de la requete */
          email: this.email,
        })
        .then((response) => {
          console.log(response.status);
          if (response.status == 200) {
            this.responseToShow = "Vérifier votre boite mail";
            this.styleObject.color = "green";
          }
        })
        .catch((error) => {
          console.log(error);
          this.responseToShow = "Une erreur est survenu";
          this.styleObject.color = "red";
        });
    },
  },
};
</script>

<style lang="scss">
.mainContainer {
  display: flex;

  margin-bottom: 39px;
  margin-top: 30px;

  .container {
    width: 300px;
    text-align: center;

    .form-group {
      margin-top: 30px;
    }

    label {
      margin-bottom: 5px;
    }
    button {
      margin-top: 20px;
    }
  }

  img {
    width: 400px;
    align-self: right;
    margin-right: 40px;
  }
}
</style>
