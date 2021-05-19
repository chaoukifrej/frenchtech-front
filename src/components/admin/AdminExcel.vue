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
        ><b-button class="m-2" variant="dark"
          >Liste détails (détails publics)</b-button
        ><b-button class="m-2" variant="dark"
          >Liste métriques (détails privés)</b-button
        >
      </div>
      <div class="firstRowCol">
        <h5>Demandes à valider</h5>
        <b-button class="m-2">Liste complète ( Tout les détails )</b-button>
        <b-button class="m-2">Demande d'inscription</b-button
        ><b-button class="m-2">Demande de modification</b-button
        ><b-button class="m-2">Demande de suppression</b-button>
      </div>
    </b-row>
    <b-row class="secondRow">
      <h4 class="mt-5 mb-5">Import d'excel</h4>
      <b-button block variant="info">Récuperer le template à remplir</b-button>
      <b-button class="mt-5 mb-5" block variant="primary"
        >Importer l'excel rempli</b-button
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AdminExcel",
  inject: ["baseUrl"],

  methods: {},
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
    button {
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
</style>
