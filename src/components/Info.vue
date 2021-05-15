<template>
  <div class="app">
    <div class="card" style="width: 25rem;">
      <div class="card-body">
        <h3 class="card-title">{{ i.name }}</h3>

        <h5>{{ i.associations }}</h5>
        <a href="">{{ i.website }}</a>
        <p class="card-text">
          {{ i.description }}
        </p>
        <div class="button">
          <button type="button" class="btn btn-outline-info btn-sm">
            Plus d'info
          </button>
        </div>
      </div>

      <div class="logo">
        <img src="../../public/img/logo-blue.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  inject: ["baseUrl"],

  props: ["info"],

  data: () => ({
    name: "",
    associations: "",
    description: "",
    website: "",
    adress: "",
    dataTab: [],
  }),

  methods: {},
};
</script>

<style lang="scss">
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.card {
  display: flex;
  flex-direction: row;
  margin: 50px;
  border-radius: 10px;

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
