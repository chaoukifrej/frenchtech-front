<template>
  <div>
      <Header/>
      <div  class="mainContainer">
          <div class="titleContainer">
              <p>Espace admin</p>
          </div>
          <div class="row g-10 dashboard"> <!--METRIQUES-->
              <h2>Données métriques</h2> 
              <div class="col-md-2">
                  //
              </div>
              <div class="col-md-2">
                  <p>Nombre de statup</p>
                  <!--Rappel des component chart + les data-->
                  <ChartStartup :chart-data='datastartup'
                  ></ChartStartup>
              </div>

              <div class="col-md-2">
                  <p>Levée de Fonds</p>
                  <!--Rappel des component chart + les data-->
                  <ChartFunds :chartData='datafunds'>
                  </ChartFunds>
              </div>

              <div class="col-md-2">
                  <p>Recrutement</p>
                  <ChartHire :chartData='datahire'>
                  </ChartHire>
              </div>

              <div class="col-md-2">
                  <p>Nombre de femmes</p>
                  <!--Rappel des component chart + les data-->
                  <ChartWomen :chart-data='datawomen'>
                  </ChartWomen>
              </div>
              <div class="col-md-2">
                  <p>Chiffre d'affaires</p>
                  <!--Rappel des component chart + les data-->
                  <ChartCA :chartData='dataca'>
                  </ChartCA>
              </div>
          </div>
          
          <div class="notifContainer">
            <div class="row g-12 titleSections">
              <h2>Demandes en attente</h2>
                 <div class="row g-12">
                 </div>

              <div class="row g-12">
                <p>Demandes d'inscription en attente</p> <!--DEMANDES INSCRIPTION-->
                     <div class="row g-12">
                            <AdminRegister/>
                     </div>
              </div>
              <div class="row g-12">
                  <p>Demandes de modifications en attente</p> <!--DEMANDES MODIFICATIONS-->
                  <div class="row g-12">
                         <div class="col-md-10">
                            //infos actor
                        </div>
                        <div class="col-md-2">
                            <span><button class="btn btn-primary">Accepter</button>
                            <button class="btn btn-danger">Refuser</button>
                            </span>
                        </div>

                     </div>
              </div>
        
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
import ChartHire from '@/components/ChartHire.js';
import ChartWomen from '@/components/ChartWomen.js';
import ChartCA from '@/components/ChartCA.js';
import AdminRegister from '@/components/AdminRegister.vue'
export default {
    components :{Header, Footer, ChartStartup, ChartFunds, ChartHire, ChartWomen,ChartCA, AdminRegister},
    name: "Admin",
    

    data(){
        return {
            datastartup: null,
            loaded: false,
            datawomen: null,
            datahire: null,
            dataca: null,
            datafunds: null,
        }
    },
    mounted(){
        this.fillData()
    },

    methods:{
        fillData(){
            /*Data de chaque chart*/
            this.datastartup= {
                labels: [2018,2019,2020,2021], // données x
                datasets: [
                    {
                        label: 'Nombre',
                        backgroundColor: 'transparent', //zone pleine sous la ligne
                        borderColor: '#e52345', //la ligne
                        borderWidth: 2, //épaisseur de la ligne
                        pointBorderColor: '#e52345', //points sur la ligne
                        tension : 0.1, //courbure de la ligne
                        data: [50,100,150,200], //les data
                    },
                ],
                options: {
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false, //censé retirer la grille en fond...
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false,
                            }   
                        }]
                    }
                },//ferme options

            } // ferme le chart
            this.datafunds={
                labels: [1,2,3,4,5],
                datasets:[
                    {
                        label:'en €',
                        data: [1,2,3,4,5]
                    }
                ]
            }
            this.datawomen={
                labels : ['Femmes', 'Hommes'],
                datasets :[
                    {
                        data: [300, 150],
                        backgroundColor:[
                            '#e52345',
                            '#0f0041',
                        ],
                hoverOffser:4
                }]
            }
            this.dataca={
                labels: [2018,2019,2020,2021],
                datasets: [
                    {
                        label: '€',
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
            this.datahire={
                labels: [2018,2019,2020,2021],
                datasets :[
                    {
                        label:'Nombre de postes',
                        data: [1,2,3,4,5]
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
    flex-direction:column;


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

}

</style>
