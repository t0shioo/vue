
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

</style>