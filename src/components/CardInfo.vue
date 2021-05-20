<template>
  <div class="app">
    <div class="card" style="width: 15rem;">
      <div class="card-body">
        <h3 class="card-title">{{ i.name }}</h3>
        <h5>{{ i.associations }}</h5>
        <h6>{{i.website}}</h6>
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
  border-radius: 4px;
  height: 150px;
  padding: 10px;
  margin: 0px 5px 5px 5px;
  border: none;

  h3 {
    font-size: 16px;
    margin-top: 10px;
    font-weight: 700;
    color: $primary;
  }

  h5 {
    font-size: 14px;
    font-weight: 300;
    color: $secondary;
    margin-bottom: 10px;
  }

  h6 {
    font-size: 14px;
    color: $primary;
  }

  img {
    width: 150px;
    padding: 20px 10px 0 0;
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
      width: 50px;
    }
  }

  button :active {
    color: #52bbae;
  }
}
</style>
