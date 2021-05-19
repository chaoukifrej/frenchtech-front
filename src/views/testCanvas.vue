
<template>
  <div id="app">
    <Header />
            <b-navbar toggleable >

            <b-collapse id="navbar-toggle-collapse" is-nav>
             <b-navbar-nav class="ml-auto">
                 <div class="metrics">
                     <img class="logo" src="../../public/img/logo-blue.png" alt="">
                     <p>Métriques</p>
                </div>
            </b-navbar-nav>
            </b-collapse>

             <b-navbar-brand #default="{ expanded }" v-if="expanded" href="#">Afficher les métriques</b-navbar-brand>
             <b-navbar-brand v-else >Masquer les métriques</b-navbar-brand>

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
        
  }),

  methods: {
      
  },
};
</script>

<style lang="scss">

.metrics {
    height: 200px;
    color:white;
}

.logo {
    height: 150px;
    margin: 20px;
}

.navbar-brand {
    font-size: 14px;
    margin-left: 40%;
}

.bi-chevron--bar-down-, .b-icon-bi, .b{
    height: 10px;
}

</style>
