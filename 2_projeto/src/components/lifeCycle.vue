<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
    name: 'lifeCycle',
    data(){
        return{
            nome: 'Vago'
        }
    },
    created(){
       setTimeout(() => {
         this.nome = "Victor"
       }, 1000)
    },
    mounted(){
        setTimeout(() => {
        this.nome = 'joão'
        }, 2000);
    }
}
</script>