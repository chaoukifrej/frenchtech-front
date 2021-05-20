<template>
  <div id="app">
    <Header />
    <div>
      <template>
        <div>
          <b-table :items="items" :fields="fields" striped responsive="sm">
            <template #cell(show_details)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>

              <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
              <b-form-checkbox
                v-model="row.detailsShowing"
                @change="row.toggleDetails"
              >
                Details via check
              </b-form-checkbox>
            </template>

            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
                  <b-col>{{ row.item.age }}</b-col>
                </b-row>

                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
                  <b-col>{{ row.item.isActive }}</b-col>
                </b-row>

                <b-button size="sm" @click="row.toggleDetails"
                  >Hide Details</b-button
                >
              </b-card>
            </template>
          </b-table>
        </div>
      </template>
    </div>
    <Footer />
  </div>
</template>

<script>
// Import header et footer

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "Test",
  inject: ["baseUrl"],

  components: {
    Header,
    Footer,
    SideBar,
  },
  data: () => ({
    dataTab: [],
  }),
  mounted() {
    this.axios

      .get(this.baseUrl + "/api/GET/actors")

      .then(
        (response) => (
          this.dataTab.push(response.data.body.actors),
          console.log(this.dataTab)
        )
      );
  },
  methods: {
    fields: ["first_name", "last_name", "show_details"],
    items: [
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald",
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      {
        isActive: false,
        age: 89,
        first_name: "Geneva",
        last_name: "Wilson",
        _showDetails: true,
      },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
    ],
  },
};
</script>

<style lang="scss"></style>
