<template>
  <div id="app">
    <div class="mainContainer">
      <b-button
        variant="outline-*"
        id="buttonToHide"
        class="stretched-link shadow-none"
        v-b-toggle="'sideBar' + i.id"
      ></b-button>
      <b-sidebar backdrop width="35vw" :id="'sideBar' + i.id" right shadow>
        <template #header="{ hide }">
          <div>
            <b-button variant="outline-*" block @click="hide">
              <b-icon-arrow-left class="mx-1"></b-icon-arrow-left
              >Retour</b-button
            >
          </div>
        </template>
        <div class="sideBar">
          <div class="header">
            <h4>{{ i.name }}</h4>
            <div>
              <!-- Associations -->
              <span v-if="i.category == 'startUp'">
                <p class="cat">Start up</p>
              </span>
              <span v-if="i.category == 'association'">
                <p class="cat">Association</p>
              </span>
              <span v-if="i.category == 'organismeFinanceur'">
                <p class="cat">Organisme financeur</p>
              </span>
              <span v-if="i.category == 'organismeDeFormation'">
                <p class="cat">Organisme de formation</p>
              </span>
              <span v-if="i.category == 'servicePublic'">
                <p class="cat">Service public</p>
              </span>
              <span v-if="i.category == 'tpePme'">
                <p class="cat">TPE / PME</p>
              </span>
              <span v-if="i.category == 'eti'">
                <p class="cat">Grande entreprise / groupe</p>
              </span>
              <span v-if="i.category == 'poleDeCompetitivite'">
                <p class="cat">Pole de compétitivité</p>
              </span>

              <!-- Category -->
              <span v-if="i.associations == 'cannesIsUp'">
                <p class="asso">// Cannes Is Up</p>
              </span>
              <span v-if="i.associations == 'clubGrasse'">
                <p class="asso">// Club des entrepreneurs du pays de Grasse</p>
              </span>
              <span v-if="i.associations == 'NiceStartsUp'">
                <p class="asso">// Nice Start(s) Up</p>
              </span>
              <span v-if="i.associations == 'telecomValley'">
                <p class="asso">// Telecom Valley</p>
              </span>
            </div>
          </div>
          <div class="img">
            <img :src="i.logo" />
          </div>
          <div class="infos">
            <!--INFOS-->
            <p>{{ i.description }}</p>
            <!-- // -->
            <div class="infos2">
              <div class="line-info">
                <b-icon
                  class="info-icon m-1 mx-3"
                  icon="globe"
                  scale="1"
                ></b-icon>
                <div class="info-text">
                  <p>{{ i.website }}</p>
                </div>
              </div>
              <div class="line-info">
                <b-icon
                  class="info-icon m-1 mx-3"
                  icon="telephone"
                  scale="1"
                ></b-icon>
                <div class="info-text">
                  <p>{{ i.phone }}</p>
                </div>
              </div>
              <div class="line-info">
                <b-icon
                  class="info-icon m-1 mx-3"
                  icon="envelope"
                  scale="1"
                ></b-icon>
                <div class="info-text">
                  <p>{{ i.email }}</p>
                </div>
              </div>
              <div class="line-info">
                <b-icon
                  class="info-icon m-1 mx-3"
                  icon="geo-alt"
                  scale="1"
                ></b-icon>
                <div class="info-text">
                  <p>{{ i.adress }}</p>
                  <p>{{ i.postal_code }} {{ i.city }}</p>
                </div>
              </div>
            </div>

            <div class="socials">
              <b-icon icon="linkedin" scale="1"></b-icon>
              <b-icon icon="facebook" scale="1"></b-icon>
              <b-icon icon="twitter" scale="1"></b-icon>
              <b-icon icon="instagram" scale="1"></b-icon>
            </div>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  name: "SideBar",
  inject: ["baseUrl"],
  props: ["i"],
  components: {
    BIcon,
  },

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

.sideBar {
  background-color: white;
}

.mainContainer {
  display: flex;

  #buttonToHide {
    height: 0;
    width: 0;
    padding: 0;
    border: none;
  }
  .sideBar {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 12px 18px;
      background-color: $BgWhite;
      margin: 20px 10px 20px 10px;
      color: $primary;
      background-color: white;
      .cat {
        padding: 0;
        margin: 0;
        color: $secondary;
        font-weight: 300;
      }
      .asso {
        padding: 0;
        margin: 0;
        color: $secondary;
        font-weight: 500;
      }
    }
    .img {
      padding-top: 10px;
      text-align: center;
      img {
        width: auto;
        height: 8rem;
      }
    }
    .infos {
      color: $primary;
      margin: 50px 40px;
      .infos2 {
        margin: 50px 0 0 15%;
      }
      .line-info {
        display: flex;
        flex-direction: row;
      }
    }

    .socials {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding-bottom: 20px;
      margin: 2rem 15% 0 15%;
    }
  }
}
</style>
