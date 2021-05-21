<template>
  <div id="app">
    <Header />
    <b-navbar toggleable>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div class="metrics">
            <div class="bloc-p">
              <img src="../../public/img/header1.png" alt="" />
            </div>
            <div class="bloc-v">
              <img src="../../public/img/header2.png" alt="" />
            </div>
            <div class="bloc-p">
              <div>
                <p class="numberMetric">{{ totalFundsMetricComputed }}</p>
              </div>
              <p class="textMetric">LEVEE DE FOND</p>
            </div>
            <div class="bloc-v">
              <div>
                <p class="numberMetric">{{ totalWomenMetric }}</p>
              </div>
              <p class="textMetric">FEMMES</p>
            </div>
            <div class="bloc-p">
              <div>
                <p class="numberMetric">{{ totalActorsMetric }}</p>
              </div>
              <p class="textMetric">STARTUP</p>
            </div>
            <div class="bloc-v">
              <div>
                <p class="numberMetric">50 000</p>
              </div>
              <p class="textMetric">CHIFFRE D'AFFAIRE</p>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-brand>Masquer les métriques</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>
// Import header et footer

import Header from "@/components/Header.vue";

export default {
  name: "Canvas",
  inject: ["baseUrl"],

  components: {
    Header,
  },
  data: () => ({
    metrics: [],
    totalFundsMetric: 0,
    totalActorsMetric: 0,
    totalJobsMetric: 0,
    totalEmployeesMetric: 0,
    totalWomenMetric: 0,
    totalMenMetric: 0,
  }),

  /* computed: {
    totalFundsMetricComputed: {
      get: function() {
        return this.totalFundsMetric;
      },
      set: function(newV) {
        console.log(this.totalFundsMetric);
        if (this.totalFundsMetric == 0) {
          const interval = setInterval(() => {
            if (this.totalFundsMetric < newV) {
              this.totalFundsMetric += 1;
            } else {
              clearInterval(interval);
            }
          }, 0.5);
        } else {
          this.totalFundsMetric = newV;
        }
      },
    },
  },*/
  mounted() {
    this.axios.get(this.baseUrl + "api/GET/metric").then((response) => {
      console.log(response.data.body);
      this.metrics.push(response.data.body);
      this.totalFundsMetricComputed = response.data.body.funds_total;
      this.totalActorsMetric = response.data.body.start_up_total;
      this.totalJobsMetric = response.data.body.jobs_number_total;
      this.totalEmployeesMetric = response.data.body.employees_number_total;
      this.totalWomenMetric = response.data.body.women_number_total;
      this.totalMenMetric =
        response.data.body.employees_number_total -
        response.data.body.women_number_total;
    });
  },

  methods: {},
};
</script>

<style lang="scss">
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.metrics {
  height: 200px;
  color: white;
  display: flex;
  flex-direction: row;
}

.logo {
  height: 150px;
  margin: 20px;
}

.navbar-brand {
  font-size: 14px;
  margin-left: 40%;
}

.bi-chevron--bar-down-,
.b-icon-bi,
.b {
  height: 10px;
}

.bloc-v {
  background: $violet;
}
.bloc-p {
  background: $primary;
}

.bloc-p,
.bloc-v {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 17%;
  height: 200px;
  img {
    height: 90%;
  }
  p {
    margin: 0;
  }
  .numberMetric {
    color: white;
    font-size: 40px;
    font-weight: 700px;
  }
  .textMetric {
    color: $secondary;
    font-size: 20px;
    font-weight: 700px;
    letter-spacing: 1px;
  }
}
</style>
