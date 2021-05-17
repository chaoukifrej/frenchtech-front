<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: "http://frenchtech.localhost:8888/",
      token: "",
      isConnected: false,
      isAdmin: false,
      actorInfo: "",
    };
  },

  //Fourni les datas à toute l'appli
  provide() {
    const token = {};
    Object.defineProperty(token, "value", {
      enumerable: true,
      get: () => this.token,
      set: (t) => (this.token = t),
    });
    const isConnected = {};
    Object.defineProperty(isConnected, "value", {
      enumerable: true,
      get: () => this.isConnected,
      set: (p) => (this.isConnected = p),
    });
    const isAdmin = {};
    Object.defineProperty(isAdmin, "value", {
      enumerable: true,
      get: () => this.isAdmin,
      set: (p) => (this.isAdmin = p),
    });
    return {
      baseUrl: this.baseUrl,
      token,
      isConnected,
      isAdmin,
      disconnect: this.disconnect,
      disconnectAdmin: this.disconnectAdmin,
    };
  },

  //action si changement d'etat du token
  watch: {
    token: function() {
      if (this.token != "") {
        this.isConnected = true;
      } else {
        this.isConnected = false;
        this.isAdmin = false;
      }
      localStorage.setItem("token", JSON.stringify(this.token));
      localStorage.setItem("isAdmin", JSON.stringify(this.isAdmin));
    },
    isAdmin: function() {
      localStorage.setItem("isAdmin", JSON.stringify(this.isAdmin));
    },
  },

  //action avant création de l'app
  beforeMount() {
    localStorage.getItem("token") //Local Storage TOKEN
      ? (this.token = JSON.parse(localStorage.getItem("token")))
      : (this.token = "");
    localStorage.getItem("isAdmin") //Local Storage isAdmin
      ? (this.isAdmin = JSON.parse(localStorage.getItem("isAdmin")))
      : (this.isAdmin = false);
  },
  methods: {
    disconnect: function() {
      let url = `${this.baseUrl}api/GET/logout`;
      this.axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          this.isConnected = false;
          this.token = "";
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.push("/");
    },
    disconnectAdmin: function() {
      let url = `${this.baseUrl}api/admin/GET/logout`;
      this.axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          this.isConnected = false;
          this.isAdmin = false;
          this.token = "";
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss"></style>
