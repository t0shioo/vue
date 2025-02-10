<template>
    <div>
        <Header :esta_logado="false" />
        <firstC/>
        <LifeCycle/>
        <peo/>
    </div>
</template>

<script setup>
    import firstC from './components/firstC.vue';
    import Header from './components/form/header.vue';
    import LifeCycle from './components/lifeCycle.vue';
    import peo from './components/peo.vue';
    name: 'App'
    compoments: {
        Header,
        firstC,
        LifeCycle
        
    }
</script>

<style>
    body{
        background-color: #333;
        color: #fff;
    }
</style>