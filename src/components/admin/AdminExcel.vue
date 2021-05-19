<template>
  <b-container fluid>
    <b-row>
      <h4 class="mt-5 mb-5">Export d'excel</h4>
      <b-col>
        <h5>Acteurs</h5>
        <b-button class="m-2" variant="dark"
          >Liste complète ( Tout les détails )</b-button
        ><b-button class="m-2" variant="dark"
          >Liste détails (détails publics)</b-button
        ><b-button class="m-2" variant="dark"
          >Liste métriques (détails privés)</b-button
        ></b-col
      >
      <b-col
        ><h5>Demandes à valider</h5>
        <b-button class="m-2">Liste complète ( Tout les détails )</b-button
        ><b-button class="m-2">Demande d'inscription</b-button
        ><b-button class="m-2">Demande de modification</b-button
        ><b-button class="m-2">Demande de suppression</b-button>
      </b-col>
    </b-row>
    <b-row>
      <h4 class="mt-5 mb-5">Import d'excel</h4>
      <b-button block variant="info">Récuperer le template à remplir</b-button>
      <b-button class="mt-5 mb-5" block variant="primary"
        >Importer l'excel rempli</b-button
      >
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="sass"></style>
