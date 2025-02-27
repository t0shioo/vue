<template>
    <div>
        <div>
            <CompMsg :msg="msg" v-show="msg" />
            <form id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome: ">
                </div>
                <div class="input-container">
                    <label for="pao">Escolha o pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione o seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo}}
                        </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Escolha a carne:</label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">Selecione a carne: </option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }} </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="opcionais" id="opcionais-title">Selecione os Opcionais: </label>
                    <div class="checkbox-container" v-for="opcional in opcdata"
                    :key="opcional.id">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Burger!">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import CompMsg from './CompMsg.vue';

export default {
    name: "BurgerForm",
    data(){
        return{
            paes: null,
            carnes: null,
            opcdata: null,
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            status: "Solicitado",
            msg: null

        }
    },
    methods: {
        async getIngre(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()

            //pega os bagulhos do json e joga pra ca
            this.paes = data.paes
            this.carnes = data.carnes
            this.opcdata = data.opcionais
        },
        async createBurger(e){
            e.preventDefault();

            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: this.opcionais,
                status: "Solicitado"
            }
            const dataJson = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: {"Tipo-Conteudo": "application/json"},
                body: dataJson
            })

            const res = await req.json()
        

            this.msg = `Pedido Nº${res.id.toUpperCase()} realizado com sucesso`

            setTimeout(() => {
                this.msg = ""
            }, 3000);

            // apaga os dados inseridos ao dar refresh
            this.nome = ""
            this.carne = ""
            this.pao = ""
            this.opcionais = ""
        }
    },
    //tudo junto
    mounted() {
        this.getIngre()
    },
    components: { 
        CompMsg 
    }
}
</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;

    }
    input, select{
        padding: 5px 10px;
        width: 300px;
    }
    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #opcionais-title{
        width: 100%;
    }
    .checkbox-container{
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }
    .checkbox-container span,
    .checkbox-container input{
        width: auto;
    }
    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }
    .submit-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        border-radius: 15px;
        transition: .5s;
    }.submit-btn:hover{
        background-color: transparent;
        color: #222;
        

        }
    


</style>