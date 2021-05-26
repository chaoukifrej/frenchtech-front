<template>
  <div class="CardComponent">
    <div class="card">
      <div class="logo">
        <img class="img-logo" :src="i.logo" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ i.name }}</h3>
        <span v-if="i.associations == 'cannesIsUp'">
          <h5>Cannes Is Up</h5>
        </span>
        <span v-if="i.associations == 'clubGrasse'">
          <h5>Club des entrepreneurs du pays de Grasse</h5>
        </span>
        <span v-if="i.associations == 'NiceStartsUp'">
          <h5>Nice Start(s) Up</h5>
        </span>
        <span v-if="i.associations == 'telecomValley'">
          <h5>Telecom Valley</h5>
        </span>

        <span v-if="i.category == 'startUp'">
          <h6>Start up</h6>
        </span>
        <span v-if="i.category == 'association'">
          <h6>Association</h6>
        </span>
        <span v-if="i.category == 'organismeFinanceur'">
          <h6>Organisme financeur</h6>
        </span>
        <span v-if="i.category == 'organismeDeFormation'">
          <h6>Organisme de formation</h6>
        </span>
        <span v-if="i.category == 'servicePublic'">
          <h6>Service public</h6>
        </span>
        <span v-if="i.category == 'tpePme'">
          <h6>TPE / PME</h6>
        </span>
        <span v-if="i.category == 'eti'">
          <h6>Grande entreprise / groupe</h6>
        </span>
        <span v-if="i.category == 'poleDeCompetitivite'">
          <h6>Pole de compétitivité</h6>
        </span>
        <SideBar :i="i" />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "CardInfo",
  inject: ["baseUrl"],

  components: { SideBar },

  props: ["i"],

  data: () => ({
    dataTab: [],
  }),

  methods: {},
};
</script>

<style lang="scss" scoped>
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;
.card {
  display: flex;
  flex-direction: column;
  width: 16vw;
  min-width: 200px;
  height: 12rem;
  border-radius: 3px;
  padding: 10px;
  margin: 0.5vw;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.5);
  }
  .card-body {
    h3 {
      font-size: 17px;
      font-weight: 700;
      color: $primary;
    }

    h5 {
      font-size: 12px;
      font-weight: 300;
      color: $secondary;
      margin-bottom: 10px;
    }

    h6 {
      font-size: 14px;
      color: $primary;
    }

    a,
    p {
      font-size: 12px;
    }
  }

  .logo {
    margin: 14px 10px 10px 8px;
    text-align: center;
    .img-logo {
      margin: 0;
      width: auto;
      height: 50px;
    }
  }

  button :active {
    color: #52bbae;
  }
  /*   &:hover {
    transform: scale(0.98);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  } */
}
</style>
