<template>
  <div class="app">
    <div class="card" style="width: 11rem;">
      <div class="card-body">
        <h3 class="card-title">{{ i.name }}</h3>

        <h5>{{ i.associations }}</h5>
        <a href=""></a>
        <SideBar :i="i" />
      </div>
      <div class="logo">
        <img :src="i.logo" />
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
  flex-direction: row;
  border-radius: 3px;
  height: 150px;

  margin: 0px 2px 2px 2px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  h5 {
    font-size: 16px;
    color: $secondary;
  }

  img {
    width: 100px;
  }

  a,
  p {
    font-size: 12px;
  }

  .logo {
    margin: 0;
    float: right;
    display: block;
    img {
      margin: 0;
      width: 40px;
    }
  }

  .button {
    text-align: center;
    outline: #52bbae;
    color: #52bbae;
    font-size: 3px;
  }
  .button :active {
    color: #52bbae;
  }
}
</style>
