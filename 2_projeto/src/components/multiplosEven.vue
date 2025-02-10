<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro()">'Ativar múltiplos eventos'</button>
        <p>{{ multi_even }}</p>
    </div>
</template>

<script>
export default {
    name: 'multiplosEven',
    data(){
        return{
            multi_even: '',
            txt1: 'Primeiro evento',
            txt2: 'Segundo evento'
        }
    },
    methods:{
        primeiro(txt, e) {
            this.multi_even = txt
        },
        segundo(txt, e){
            setTimeout(() => this.multi_even = txt, 1000)
        },
        terceiro(){
            setTimeout(() => this.multi_even = '', 1500)
        }
    }
}
</script>
<style scoped>
    div{
        margin: 100px;
    }
</style>