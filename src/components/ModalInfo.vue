<template>
  <div class="app">
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <div>
          <b-card title="Card title" sub-title="Card subtitle">
            <h1>{{ i.name }}</h1>

            <b-card-text>A second paragraph of text in the card.</b-card-text>
          </b-card>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInfo",
  inject: ["baseUrl"],

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
</style>
