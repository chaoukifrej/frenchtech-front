<template>
  <div>
    <Header/>
    <h1>Home page</h1>
    <div>
      <p>
        ...
        Carte
        ...</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
