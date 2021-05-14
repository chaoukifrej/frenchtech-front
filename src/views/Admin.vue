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
                  <ChartStartup :chart-data='datacollection'
                  ></ChartStartup>
              </div>

              <div class="col-md-3">
                  <p>Levée de Fonds</p>
                  <canvas></canvas>
              </div>

              <div class="col-md-2">
                  <p>Nombre de statup</p>
                  <canvas></canvas>
              </div>

              <div class="col-md-2">
                  <p>Nombre de femmes</p>
                  <canvas></canvas>
              </div>
              <div class="col-md-2">
                  <p>Chiffre d'affaires</p>
                  <canvas></canvas>
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
export default {
    components :{Header, Footer, ChartStartup},
    name: "Admin",
    

    data(){
        return {
            datacollection: null,
            loaded: false
        }
    },
    mounted(){
        this.fillData()
    },

    methods:{
        fillData(){
            this.datacollection= {
                labels: [0,1,2,3,4,5,6,7,8,9],
                datasets: [
                    {
                        label: 'Temp',
                        backgroundColor: 'rgba(255,0,0,0,2)',
                        borderColor: 'lightblue',
                        pointsBackgroundColor: 'blue',
                        borderWidth: 1,
                        pointBorderColor: 'blue',
                        data: [0,1,2,3,4,5,6,7,8,9]
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
