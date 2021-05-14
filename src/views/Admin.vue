<template>
  <div>
      <Header/>
      <div  class="mainContainer">
          <div class="titleContainer">
              <p>Espace admin</p>
          </div>
          <div class="row g-12 dashboard">
              <h2>Données métriques</h2>
              <div class="col-md-3">
                  <p>Nombre de statup</p>
                  <ChartStartup :chart-data='datastartup'
                  ></ChartStartup>
              </div>

              <div class="col-md-3">
                  <p>Levée de Fonds</p>
                  <ChartFunds :chartData='datafunds'>
                  </ChartFunds>
              </div>

              <div class="col-md-2">
                  <p>Recrutement</p>
                  <canvas></canvas>
              </div>

              <div class="col-md-2">
                  <p>Nombre de femmes</p>
                  <ChartWomen :chart-data='datawomen'>
                  </ChartWomen>
              </div>
              <div class="col-md-2">
                  <p>Chiffre d'affaires</p>
                  <ChartCA :chartData='dataca'>
                  </ChartCA>
              </div>
          </div>
          
          <div class="notifContainer">
            <div class="row g-12 titleSections">
              <h2>Demandes en attente</h2>
              </div>
          </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ChartStartup from '@/components/ChartStartup.js';
import ChartFunds from '@/components/ChartFunds.js';
import ChartWomen from '@/components/ChartWomen.js';
import ChartCA from '@/components/ChartCA.js'
export default {
    components :{Header, Footer, ChartStartup, ChartFunds, ChartWomen,ChartCA},
    name: "Admin",
    

    data(){
        return {
            datastartup: null,
            loaded: false,
            datawomen: null,
        }
    },
    mounted(){
        this.fillData()
    },

    methods:{
        fillData(){
            this.datastartup= {
                labels: [2018,2019,2020,2021],
                datasets: [
                    {
                        label: 'Temp',
                        backgroundColor: 'rgb(255, 255, 255, 0.267)',
                        borderColor: '#e52345',
                        pointsBackgroundColor: 'white',
                        borderWidth: 2,
                        pointBorderColor: '#e52345',
                        tension : 0.1,
                        data: [0,1,2,3,4,5]
                    }
                ]
            }
            this.datafunds={
                labels: [1,2,3,4,5],
                datasets:[
                    {
                        label:'Graph Funds',
                        data: [1,2,3,4,5]
                    }
                ]
            }
            this.datawomen={
                labels : ['Femmes', 'Hommes'],
                datasets :[
                    {
                        label: 'Graph women',
                        data: [300, 150],
                        backgroundColor:[
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                        ],
                hoverOffser:4
                }]
            }
            this.dataca={
                labels: [2018,2019,2020,2021],
                datasets: [
                    {
                        label: 'Temp',
                        backgroundColor: 'rgb(255, 255, 255, 0.267)',
                        borderColor: '#e52345',
                        pointsBackgroundColor: 'white',
                        borderWidth: 2,
                        pointBorderColor: '#e52345',
                        tension : 0.1,
                        data: [0,1,2,3,4,5]
                    }
                ]
            }

        }
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


    .titleContainer {
        height: 30px;
        padding: 20px 0;
        text-align: center;
        color: $primary;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
    }

    h2 {
        font-size: 18px;
        letter-spacing: 1px;
    }
}

</style>
