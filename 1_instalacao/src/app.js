const nomeApp = {
    data(){
        return{
            name: "",
            age: 30,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            
            console.log(this.input_name);
            this.name = this.input_name

        }
    } 
}

Vue.createApp(nomeApp).mount("#app");