<template>
  <div>
      <Header/>
      <div  class="mainContainer">

      </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components :{Header, Footer},
    name: "Admin",

    data: () => ({

    }),

    methods:{

    },
};
</script>

<style scoped lang="scss">


</style>
