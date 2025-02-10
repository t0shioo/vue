<template>
    <div>
        <p>{{ compEmail }} - {{ email }}</p>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no monento</p>
        <p>Utilizo as seguintes tecnologias para backend:</p>
        <ul>
            <li v-for="(tech, index) in backend_tech" v-bind:key="index">{{ tech }}</li>
            <!-- <li v-if="esta_trabalhando">Angular</li>
            <li v-else>React</li> -->
        </ul>
        <p>E as seguintes tecnologias para frontend:</p>
        <ul>
            <li v-for="tech in frontend_tech" :key="tech.id">
                {{ tech.lang }}
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textobotao }}</button>
        </div>
        <p v-show="mostrar_email">Para acessar meu email, acesse: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="link" target="_blank">basta clicar aqui</a></p>
        <Picture/>
        <desc/>
    </div>
</template>

<script>
import Picture from './picture.vue'

export default {
    name: 'Info',
    components:{
        Picture,
    },
    props:{
        email: String,
        esta_trabalhando: Boolean
    },
    data(){
        return{
           
            mostrar_email: false,
            // email: 'joao@email.com',
            link: 'https://google.com',
            textobotao: "Mostrar e-mail",
            backend_tech: ['JavaScript', 'PHP', 'Python'],
            frontend_tech: [
                {id: 1, lang: 'HTML'},
                {id:2, lang: 'CSS'},
                {id:3, lang: 'Vue'}
            ]
        }
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.textobotao = "Mostrar e-mail"
            }else{
                this.textobotao = "Ocultar e-mail"
            }
        }
    }
}
</script>