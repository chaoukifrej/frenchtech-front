<template>
  <div class="CardComponent">
    <div class="card">
      <div class="logo">
        <img class="img-logo" :src="i.logo" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ i.name }}</h3>
        <h5>{{ i.associations }}</h5>
        <h6>{{ i.website }}</h6>
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
  width: 15rem;
  height: 12rem;
  border-radius: 4px;
  padding: 10px;
  margin: 8px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
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
