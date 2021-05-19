<template>
  <div>
    <Header />
    <div class="mainContainer">
      <div class="titleContainer">
        <p>Espace admin</p>
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
        <div>
          <p>Nombre de statup : {{ totalActorsMetric }}</p>
          <p>Levée de Fonds : {{ totalFundsMetric }}</p>
          <p>Nombre de poste : {{ totalJobsMetric }}</p>
          <p>Nombres d'employés : {{ totalEmployeesMetric }}</p>
          <p>Nombre de femmes : {{ totalWomenMetric }}</p>
          <p>Nombre d'hommes : {{ totalMenMetric }}</p>
        </div>
      </div>

      <div class="notifContainer">
        <div class="row g-12 titleSections">
          <h2>Demandes en attente</h2>
          <div class="row g-12"></div>

          <div class="row g-12">
            <p>Demandes d'inscription en attente</p>
            <!--DEMANDES INSCRIPTION-->
            <div class="row g-12">
              <div class="col-md-8">
                //infos actor
              </div>
              <div class="col-md-4">
                <span
                  ><button class="btn btn-primary">Accepter</button>
                  <button class="btn btn-danger">Refuser</button>
                </span>
              </div>
            </div>
          </div>
          <div class="row g-12">
            <p>Demandes de modifications en attente</p>
            <!--DEMANDES MODIFICATIONS-->
            <div class="row g-12">
              <div class="col-md-8">
                //infos actor
              </div>
            </div>

            <div class="notifContainer">
              <div class="row g-12 titleSections">
                <h2>Demandes en attente</h2>
                <div class="row g-12"></div>

                <div class="row g-12">
                  <p>Demandes d'inscription en attente</p>
                  <!--DEMANDES INSCRIPTION-->
                  <div class="row g-12">
                    <AdminRegister />
                  </div>
                </div>
                <div class="row g-12">
                  <p>Demandes de modifications en attente</p>
                  <!--DEMANDES MODIFICATIONS-->
                  <div class="row g-12">
                    <div class="col-md-10">
                      //infos actor
                    </div>
                    <div class="col-md-2">
                      <span
                        ><button class="btn btn-primary">Accepter</button>
                        <button class="btn btn-danger">Refuser</button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <span
                    ><button class="btn btn-primary">Accepter</button>
                    <button class="btn btn-danger">Refuser</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
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
import AdminRegister from "@/components/AdminRegister.vue";
export default {
  components: {
    Header,
    Footer,
    ChartStartup,
    ChartFunds,
    ChartHire,
    ChartWomen,
    ChartCA,
    AdminRegister,
  },
  name: "Admin",
  inject: ["baseUrl"],

  data() {
    return {
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

      // Metric
      metrics: [],

      totalFundsMetric: 0,
      totalActorsMetric: 0,
      totalJobsMetric: 0,
      totalEmployeesMetric: 0,
      totalWomenMetric: 0,
      totalMenMetric: 0,
    };
  },
  mounted() {
    this.fillData();
    console.log("test");

    this.axios.get(this.baseUrl + "api/admin/GET/historic").then((response) => {
      for (const i of response.data.body.historic) {
        this.arrayHistoric.push(response.data.body.historic);
        console.log(response.data.body.historic);
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
    });

    this.axios.get(this.baseUrl + "api/GET/metric").then((response) => {
      console.log(response.data.body);
      this.metrics.push(response.data.body);
      this.totalFundsMetric = response.data.body.funds_total;
      this.totalActorsMetric = response.data.body.start_up_total;
      this.totalJobsMetric = response.data.body.jobs_number_total;
      this.totalEmployeesMetric = response.data.body.employees_number_total;
      this.totalWomenMetric = response.data.body.women_number_total;
      this.totalMenMetric =
        response.data.body.employees_number_total -
        response.data.body.women_number_total;
    });
  },

  methods: {
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
            tension: 0.1, //courbure de la ligne
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
            tension: 0.1,
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
  }
}
</style>
