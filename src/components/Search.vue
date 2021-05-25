<template>
  <div class="app">
    <div row>
      <div>
        <select id="inputAssociation" class="form-select mt-2 selectSearch">
          <option selected>Filtrer par association</option>
          <option value="canneIsUp">Cannes Is Up</option>
          <option value="clubGrasse">
            Le club des entrepreneurs du pays de Grasse
          </option>
          <option value="NiceStartsUp">Nice Starts-up</option>
          <option value="telecomValley">Telecom Valley</option>
        </select>
      </div>
      <div>
        <select id="inputCategory" class="form-select mt-2 selectSearch">
          <option selected>Filtrer par catégorie</option>
          <option value="startUp">Start-up</option>
          <option value="association">Association</option>
          <option value="organismeFinanceur">Organisme financeur</option>
          <option value="organismeDeFormation">Organisme de formation</option>
          <option value="servicePublic">Service public</option>
          <option value="tpePme">TPE/PME</option>
          <option value="eti">Grande entreprises/Grand groupe/ETI</option>
          <option value="poleDeCompetitivite">Pole de compétitivité</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  props: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.selectSearch {
  cursor: pointer;
}
</style>
