<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from  './components/footer.vue'
export default {
  name: 'app',
  components:{
      FooterNav
  }


}
</script>

<style>
  @import './css/public.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  background-color: #d3d3d3;
  color: #41b883;
}
</style>
