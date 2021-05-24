<template>
  <b-container fluid>
    <b-row class="firstRow">
      <h4 class="mt-5 mb-5">Export d'excel</h4>
      <div class="firstRowCol">
        <h5>Acteurs</h5>
        <b-button
          class="m-2"
          variant="dark"
          :href="this.baseUrl + 'api/excel/actors/export'"
          >Liste complète ( Tout les détails )</b-button
        ><b-button
          class="m-2"
          variant="dark"
          :href="this.baseUrl + 'api/excel/actors/exportPublic'"
          >Liste détails (détails publics)</b-button
        ><b-button
          class="m-2"
          variant="dark"
          :href="this.baseUrl + 'api/excel/actors/exportPrivate'"
          >Liste métriques (détails privés)</b-button
        >
      </div>
      <div class="firstRowCol">
        <h5>Demandes à valider</h5>
        <b-button
          class="m-2"
          :href="this.baseUrl + 'api/excel/buffers/exportRegister'"
          >Demande d'inscription</b-button
        ><b-button
          class="m-2"
          :href="this.baseUrl + 'api/excel/buffers/exportModify'"
          >Demande de modification</b-button
        ><b-button
          class="m-2"
          :href="this.baseUrl + 'api/excel/buffers/exportDelete'"
          >Demande de suppression</b-button
        >
      </div>
    </b-row>
    <b-row class="secondRow">
      <h4 class="mt-5 mb-5">Import d'excel</h4>
      <b-button
        block
        variant="info"
        :href="this.baseUrl + 'api/excel/actors/template'"
        >Récuperer le template à remplir</b-button
      >
      <b-button class="mt-5 mb-5" block variant="primary"
        ><input
          style="display:none"
          type="file"
          class="form-control"
          id="fileUpload"
          accept=".xls, .xlsx, .odf"
          ref="excel"
          @change="uploadExcel"
        />
        <label id="fileUploadLabel" for="fileUpload"
          >Importer l'excel rempli</label
        >
      </b-button>
      <div v-for="error in errors" :key="error.id">
        <b-alert show variant="danger">
          Ligne {{ error.row }} :
          <div v-for="elem in error.errors" :key="elem.id">
            {{ elem }}
          </div></b-alert
        >
      </div>
      <div v-for="error in errorsSQL" :key="error.id">
        <b-alert show variant="danger">
          !! Erreur : <br />
          {{ error.errorInfo[2] }}
        </b-alert>
      </div>
      <b-alert v-show="importSuccess" show variant="success"
        >Aucune erreur, import excel réussi avec succès!</b-alert
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AdminExcel",
  inject: ["baseUrl"],
  data() {
    return {
      excelToSend: "",
      errors: [],
      errorsSQL: [],
      importSuccess: false,
    };
  },

  methods: {
    uploadExcel(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("excel", file);
      //Requete pour envoyer le ficher au back
      this.axios
        .post(this.baseUrl + "api/excel/actors/import", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })

        .then((response) => {
          console.log(response.status);
          this.errors = response.data.errors;
          this.errorsSQL = response.data.errorsSQL;
          if (response.status == 200) {
            this.importSuccess = true;
          }
        });
    },
  },
};
</script>

<style lang="scss">
.firstRow {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 70%;
  margin: 0 15%;
  h4 {
    text-align: center;
  }
  .firstRowCol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    button,
    a {
      width: 300px;
    }
  }
}
.secondRow {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 54%;
  margin: 0 23%;
  h4 {
    text-align: center;
  }
}

#fileUploadLabel {
  margin: 0;
  width: 100%;
  cursor: pointer;
}
</style>
