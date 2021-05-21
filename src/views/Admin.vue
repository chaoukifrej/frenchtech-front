<template>
  <div>
    <Header />
    <div class="mainContainer">
      <div class="metrics-admin">
        <div class="bloc-metric-admin">
          <div>
            <p class="numberMetricAdmin">
              <animated-number
                :value="totalStartupMetric"
                round="1"
                :duration="1200"
              />
            </p>
          </div>
          <p class="textMetric">STARTUP</p>
        </div>
        <div class="bloc-metric-admin">
          <div>
            <p class="numberMetricAdmin">
              <animated-number
                :value="totalFundsMetric"
                round="1"
                :duration="1200"
              />
            </p>
          </div>
          <p class="textMetric">LEVEE DE FOND</p>
        </div>
        <div class="bloc-metric-admin">
          <div>
            <p class="numberMetricAdmin">
              <animated-number
                :value="totalEmployeesMetric"
                round="1"
                :duration="1200"
              />
            </p>
          </div>
          <p class="textMetric">EMPLOYÉS</p>
        </div>
        <div class="bloc-metric-admin">
          <div>
            <p class="numberMetricAdmin">
              <animated-number
                :value="totalJobsMetric"
                round="1"
                :duration="1200"
              />
            </p>
          </div>
          <p class="textMetric">POSTES</p>
        </div>

        <div class="bloc-metric-admin">
          <div>
            <p class="numberMetricAdmin">
              <animated-number
                :value="totalWomenMetric"
                round="1"
                :duration="1200"
              />
            </p>
          </div>
          <p class="textMetric">FEMMES</p>
        </div>

        <div class="bloc-metric-admin">
          <div>
            <p class="numberMetricAdmin">
              <animated-number
                :value="totalRevenuesMetric"
                round="1"
                :duration="1200"
              />
            </p>
          </div>
          <p class="textMetric">CHIFFRE D'AFFAIRE</p>
        </div>
      </div>

      <div class="row g-10 dashboard">
        <!--METRIQUES-->
        <h2>Données métriques</h2>

        <div id="chart">
          <div class="col-md-2">
            <p>Nombre de statup</p>
            <!--Rappel des component chart + les data-->
            <ChartStartup :chart-data="datastartup"></ChartStartup>
          </div>

          <div class="col-md-2">
            <p>Levée de Fonds</p>
            <!--Rappel des component chart + les data-->
            <ChartFunds :chartData="datafunds"> </ChartFunds>
          </div>

          <div class="col-md-2">
            <p>Recrutement</p>
            <ChartHire :chartData="datahire"> </ChartHire>
          </div>

          <div class="col-md-2">
            <p>Nombre de femmes</p>
            <!--Rappel des component chart + les data-->
            <ChartWomen :chart-data="datawomen"> </ChartWomen>
          </div>
          <div class="col-md-2">
            <p>Chiffre d'affaires</p>
            <!--Rappel des component chart + les data-->
            <ChartCA :chartData="dataca"> </ChartCA>
          </div>
        </div>
        <div></div>
      </div>

      <div class="AdminTabContainer mt-5">
        <b-tabs content-class="mt-3">
          <b-tab title="Gestion entreprise">
            <AdminActorsManage />
          </b-tab>
          <b-tab title="Demande d'inscription">
            <AdminRegister
              :buffers="buffers"
              :registerBuffer="registerBuffer"
            />
          </b-tab>
          <b-tab title="Demande de modification">
            <AdminUpdate />
          </b-tab>
          <b-tab title="Demande de suppression">
            <AdminDelete :deleteBuffer="deleteBuffer" />
          </b-tab>
          <b-tab title="Imports et Exports" active> <AdminExcel /> </b-tab>
          <b-tab title="Gestion des administrateurs">
            <AdminGestion />
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ChartStartup from "@/components/charts/ChartStartup.js";
import ChartFunds from "@/components/charts/ChartFunds.js";
import ChartHire from "@/components/charts/ChartHire.js";
import ChartWomen from "@/components/charts/ChartWomen.js";
import ChartCA from "@/components/charts/ChartCA.js";
import AnimatedNumber from "animated-number-vue";

import AdminActorsManage from "@/components/admin/AdminActorsManage.vue";
import AdminRegister from "@/components/admin/AdminBuffersRegister.vue";
import AdminUpdate from "@/components/admin/AdminUpdate.vue";
import AdminDelete from "@/components/admin/AdminDelete.vue";
import AdminGestion from "@/components/admin/AdminGestion.vue";
import AdminExcel from "@/components/admin/AdminExcel.vue";

export default {
  components: {
    Header,
    Footer,
    ChartStartup,
    ChartFunds,
    ChartHire,
    ChartWomen,
    ChartCA,
    AdminActorsManage,
    AdminRegister,
    AdminUpdate,
    AdminDelete,
    AdminExcel,
    AnimatedNumber,
    AdminGestion,
  },
  name: "Admin",
  inject: ["baseUrl"],

  data() {
    return {
      //!CHARTS

      datastartup: null,
      loaded: false,
      datawomen: null,
      datafunds: null,
      datahire: null,
      dataca: null,
      arrayHistoric: [],
      totalWomenHistoric: [],
      totalEmployeesHistoric: [],
      totalMenHistoric: [],
      totalFundsHistoric: [],
      totalJobsHistoric: [],
      totalRevenuesHistoric: [],
      totalActorsHistoric: [],
      date: [],

      // Metrics
      metrics: [],
      totalFundsMetric: 0,
      totalStartupMetric: 0,
      totalJobsMetric: 0,
      totalEmployeesMetric: 0,
      totalWomenMetric: 0,
      totalMenMetric: 0,
      totalRevenuesMetric: 0,

      //!TABLE BUFFERS
      buffers: [],
      deleteBuffer: [],
      registerBuffer: [],

      mynumber: "",
    };
  },

  async created() {
    this.getBuffer();

    await this.axios
      .get(this.baseUrl + "api/admin/GET/historic")
      .then((response) => {
        for (const i of response.data.body.historic) {
          this.arrayHistoric.push(response.data.body.historic);
          var monthNames = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
          ];
          var newDate = new Date(Date.parse(i.created_at));
          var formattedDate = monthNames[newDate.getMonth()];
          this.date.push(formattedDate);
          this.totalFundsHistoric.push(i.total_funds);
          this.totalJobsHistoric.push(i.total_jobs_available);
          this.totalRevenuesHistoric.push(i.total_revenues);
          this.totalActorsHistoric.push(i.total_actors);
          this.totalWomenHistoric.push(i.total_women_number);
          this.totalEmployeesHistoric.push(i.total_employees_number);
          this.totalMenHistoric.push(
            i.total_employees_number - i.total_women_number
          );
        }
        this.fillData();
      });

    this.axios.get(this.baseUrl + "api/GET/metric").then((response) => {
      console.log(response.data.body);
      this.metrics.push(response.data.body);
      this.totalFundsMetric = response.data.body.funds_total;
      this.totalRevenuesMetric = response.data.body.revenues_total;
      this.totalStartupMetric = response.data.body.start_up_total;
      this.totalJobsMetric = response.data.body.jobs_number_total;
      this.totalEmployeesMetric = response.data.body.employees_number_total;
      this.totalWomenMetric = response.data.body.women_number_total;
      this.totalMenMetric =
        response.data.body.employees_number_total -
        response.data.body.women_number_total;
    });
  },

  methods: {
    getBuffer() {
      this.axios
        .get(this.baseUrl + "/api/GET/buffers")

        .then((response) => {
          for (const elem of response.data.body.buffers) {
            this.buffers.push(elem);
          }
          this.buffers.forEach((el) => {
            if (el.type_of_demand == "delete") {
              let e = {};
              e.id = el.id;
              e.actor_id = el.actor_id;
              e.name = el.name;
              e.email = el.email;
              e.phone = el.phone;
              e.category = el.category;
              e.associations = el.associations;
              this.deleteBuffer.push(e);
            }
            if (el.type_of_demand == "register") {
              let e = {};
              e.id = el.id;
              e.name = el.name;
              e.email = el.email;
              e.phone = el.phone;
              e.category = el.category;
              e.associations = el.associations;
              this.registerBuffer.push(e);
            }
          });
        });
    },

    fillData() {
      /*Data de chaque chart*/
      this.datastartup = {
        labels: this.date, // données x
        datasets: [
          {
            label: "Nombre",
            backgroundColor: "transparent", //zone pleine sous la ligne
            borderColor: "#e52345", //la ligne
            borderWidth: 2, //épaisseur de la ligne
            pointBorderColor: "#e52345", //points sur la ligne
            tension: 0.6, //courbure de la ligne
            data: this.totalActorsHistoric, //les data
          },
        ],
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false, //censé retirer la grille en fond...
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                fontSize: 0,
              },
            },
          },
        }, //ferme options
      }; // ferme le chart
      this.datafunds = {
        labels: this.date,
        datasets: [
          {
            label: "en €",
            data: this.totalFundsHistoric,
          },
        ],
      };
      this.datawomen = {
        labels: this.date,
        datasets: [
          {
            label: "Femmes",
            data: this.totalWomenHistoric,
            backgroundColor: "#e52345",
            hoverOffser: 4,
          },
          {
            label: "Hommes",
            data: this.totalMenHistoric,
            backgroundColor: "#0f0041",
            hoverOffser: 4,
          },
        ],
      };
      this.dataca = {
        labels: this.date,
        datasets: [
          {
            label: "€",
            backgroundColor: "rgb(255, 255, 255, 0.267)",
            borderColor: "#e52345",
            pointsBackgroundColor: "white",
            borderWidth: 2,
            pointBorderColor: "#e52345",
            tension: 0.6,
            data: this.totalRevenuesHistoric,
          },
        ],
      };
      this.datahire = {
        labels: this.date,
        datasets: [
          {
            label: "Nombre de postes",
            data: this.totalJobsHistoric,
          },
        ],
      };
    },
  },
};
</script>

<style scoped lang="scss">
$primary: #0f0041;
$secondary: #e52345;
$violet: #13114e;
$BgWhite: #f6f5f8;

.mainContainer {
  padding: 20px;
  flex-direction: column;

  h2 {
    margin: 20px 0;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .titleContainer {
    height: 30px;
    text-align: center;
    color: $primary;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  h2 {
    margin: 20px 0;
    font-size: 18px;
    letter-spacing: 1px;
  }

  #chart {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }
  .metrics-admin {
    height: 200px;
    display: flex;
    flex-direction: row;
    background-color: rgb(226, 226, 226);
    .bloc-metric-admin {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 17%;
      height: 200px;

      p {
        margin: 0;
        font-size: 25px;
      }
      .numberMetric {
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
  }
}

#register {
  width: 80%;
  margin: auto;

  h4 {
    text-align: center;
    margin: 20px;
    margin-top: 30px;
  }

  label {
    width: 100%;
    text-align: left;
  }

  #buttonSubmit {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .cardNotif {
    border: solid 2px black;
  }
}
</style>
