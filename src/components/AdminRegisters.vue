<template>
  <div class="mainComponent">
    <div class="blocCards">
        <div class="displayAdminRegisters" v-for="item in dataTab" :key="item">
          <div v-for="index in item" :key="index.id">
            <!-- i correspond a la props / index correspond a l'iteration du 2 Tab -->
            <CardInfo :i="index" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  inject: ["baseUrl"],
  data: () => ({
   registerBuffer: [],
  }),

  methods: {

    registerBuffer() {
      this.axios
        .get(this.baseUrl + "/api/GET/buffers")

        .then(
        (response) => (
          this.registerBuffer.push(response.data.body.buffers),
          console.log(this.registerBuffer)
        )
      );
    },
},
}

/* body de la requete */
            /*if (type_of_demand = ) {
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
                    revenues: this.revenues
              },*/
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


