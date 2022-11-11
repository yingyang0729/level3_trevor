(() => {
    const { createApp } = Vue

    createApp({
    
    
        data() {
            return {
            message: 'Hello Vue!',
            status: 'live',
            fruits: [
                { name: 'apple', color: 'red'},
                { name: 'orange', color: 'orange'},
                { name: 'pinapple', color: 'yellow'},
                { name: 'grape', color: 'purple'},



            ]
        }
        },

        methods: {
            logClick(){
                //debugger;
                this.$refs.theMessage.classList.add('error');

            }
        }
  }).mount('#app')
})();