<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <info :email="email" :esta_trabalhando=false />
        <Form/>
    </div>
</template>

<script>
import info from './info.vue'
import Form from  './form.vue'
export default {
  components: { info,
    Form
   },
   name: 'Pessoa',
   data(){
    return{
        nome: 'Victor',
        email: 'victor1@email.com'
    }
   }
}
</script>