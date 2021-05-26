<template>
  <div id="appMetric">
    <!-- appear visible a rajouter a collapse -->
    <b-collapse appear visible id="navbar-toggle-collapse">
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
              <p class="numberMetric">
                <animated-number
                  :value="totalFundsMetric"
                  round="1"
                  :duration="1200"
                  easing="easeInOutExpo"
                />
                <span class="euroSign">€</span>
              </p>
            </div>
            <p class="textMetric">LEVEE DE FOND</p>
          </div>
          <div class="bloc-v">
            <div>
              <p class="numberMetric">
                <animated-number
                  :value="totalWomenMetric"
                  round="1"
                  :duration="1200"
                />
              </p>
            </div>
            <p class="textMetric">FEMMES</p>
          </div>
          <div class="bloc-p">
            <div>
              <p class="numberMetric">
                <animated-number
                  :value="totalActorsMetric"
                  round="1"
                  :duration="1200"
                />
              </p>
            </div>
            <p class="textMetric">STARTUP</p>
          </div>
          <div class="bloc-v">
            <div>
              <p class="numberMetric">
                <animated-number
                  :value="totalRevenues"
                  round="1"
                  :duration="1200"
                />
                <span class="euroSign">€</span>
              </p>
            </div>
            <p class="textMetric">CHIFFRE D'AFFAIRE</p>
          </div>
        </div>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-toggle
      id="toggleBar"
      variant="outline-*"
      class="shadow-none"
      target="navbar-toggle-collapse"
    >
      <template #default="{ expanded }">
        <b-icon
          scale="1.5"
          variant="primary"
          v-if="expanded"
          icon="chevron-up"
          animation="cylon-vertical"
        ></b-icon>
        <b-icon v-else icon="chevron-down"></b-icon>
      </template>
    </b-navbar-toggle>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  name: "MetricsHome",
  inject: ["baseUrl"],

  components: {
    AnimatedNumber,
  },

  data: () => ({
    metrics: [],
    totalFundsMetric: 0,
    totalActorsMetric: 0,
    totalJobsMetric: 0,
    totalEmployeesMetric: 0,
    totalWomenMetric: 0,
    totalMenMetric: 0,
    totalRevenues: 0,
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
      //console.log(response.data.body);
      this.metrics.push(response.data.body);
      this.totalFundsMetric = response.data.body.funds_total;
      this.totalActorsMetric = response.data.body.start_up_total;
      this.totalJobsMetric = response.data.body.jobs_number_total;
      this.totalEmployeesMetric = response.data.body.employees_number_total;
      this.totalWomenMetric = response.data.body.women_number_total;
      this.totalRevenues = response.data.body.revenues_total;
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

#appMetric {
  box-sizing: content-box;
  position: absolute;
  top: 80px;
  width: 100vw;
  z-index: 1000;
  overflow: hidden;
}
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

.euroSign {
  font-size: 1.5rem;
  margin-left: 5px;
  vertical-align: text-top;
}

#toggleBar {
  background-color: #f6f5f833;
  backdrop-filter: blur(3px);
  width: 65vw;
}
</style>
