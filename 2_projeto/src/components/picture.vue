<template>
    <div>
        <img :src="avatar" :alt="desc">
        <mudarimg @mudar-imagem="trocaAimg"/>
        <Reut/>
    </div>
</template>

<script>
import Mudarimg from './mudarimg.vue';
import Reut from './reut.vue';
export default {
    name: 'picture',
    components:{
        Reut,
        Mudarimg
    },
    data(){
        return{
            avatar: "/img/avatar.png",
            desc: 'ícone'
        }
    } ,
    methods:{
        trocaAimg(){
            this.avatar = '/img/avatar2.png'
        }
    }
}
</script>