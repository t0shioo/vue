
<template>
  <div>
    <MyNav :logo="logo_src" :alt="app_name" />
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import MyNav from './components/MyNav.vue';
import TheFooter from './components/TheFooter.vue';


export default {
 components:{
  MyNav,
  TheFooter
 },
 data(){
  return{
    logo_src: '/img/logo.png',
    app_name: 'Make Your Burger'
  }
 }
}
</script>

<style>
  *{
    font-family: helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  main-container{
    margin: 50px;
    min-height: 250px;
  }
  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>