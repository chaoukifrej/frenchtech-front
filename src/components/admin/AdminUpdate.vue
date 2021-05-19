<template>
  <div></div>
</template>

<script>
export default {
  name: "Register",
  inject: ["baseUrl"],
  data: () => ({
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
  }),

  /* Permet de regrouper les differents element lié a la position dans la variable adress */
  watch: {
    streetName: function() {
      this.adress = this.streetNumber + " " + this.streetName;
    },

    streetNumber: function() {
      this.adress = this.streetNumber + " " + this.streetName;
    },
  },

  methods: {
    getPosition() {
      /* requete afin de recupérer les coordonnées GPS des adresses */

      this.axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${this.streetNumber}+${this.streetName}+${this.city}+${this.postal_code}%22`
        )

        .then((response) => {
          this.longitude = response.data.features[0].properties.x;
          this.latitude = response.data.features[0].properties.y;
        });

      console.log(this.longitude);
    },

    register() {
      this.axios
        .post(this.baseUrl + "api/POST/register", {
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

    /* methode transformer le logo en base 64 pour la BDD */

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

<style lang="scss">
#register {
  width: 80%;
  margin: auto;

  h4 {
    text-align: center;
    margin: 20px;
    margin-top: 30px;
  }

  label {
    width: 100%;
    text-align: left;
  }
  #buttonSubmit {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
