const app = Vue.createApp({
    data(){
        return{
            result: 0,
        }
    },

    methods: {
        add(num){
            this.result = this.result + num;
        },

        showResult: function(){
            if (this.result <= 37 ) {
                return 'not there yet!';
            } else if (this.result > 37) {
                return 'too much!';
            }
        }

    },

    watch: {
        result(value) {
            if(value > 37){
                const reset = this;
                setTimeout(function(){
                    reset.result = 0;
                },5000)
            }
        },
        
    }
})

app.mount('#assignment');