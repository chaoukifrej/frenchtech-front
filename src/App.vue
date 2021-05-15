<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: "http://frenchtech.localhost/",
      token: "",
      isConnected: false,
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
    return {
      baseUrl: this.baseUrl,
      token,
      isConnected,
      disconnect: this.disconnect,
    };
  },

  //action si changement d'etat du token
  watch: {
    token: function() {
      if (this.token != "") {
        this.isConnected = true;
      } else {
        this.isConnected = false;
      }
      localStorage.setItem("token", JSON.stringify(this.token));
    },
  },

  //action avant création de l'app
  beforeMount() {
    localStorage.getItem("token") //Local Storage TOKEN
      ? (this.token = JSON.parse(localStorage.getItem("token")))
      : (this.token = "");
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
  },
};
</script>

<style lang="scss"></style>
