<template>
  <div class="main-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  .main-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>