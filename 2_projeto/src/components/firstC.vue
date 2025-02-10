<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ nome }} e eu sou {{ profissao }}</p>
        <multiplosEven/>
        <reut/>
    </div>
</template>

<script>
    import multiplosEven from './multiplosEven.vue'
    import reut from './reut.vue';

    export default{
        name: 'firstC',
        components: {
            multiplosEven,
            reut
        },
        data(){
            return{
                nome: "Matheus",
                profissao: 'Programador'
            }
        }
    }
</script>