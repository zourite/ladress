var app = new Vue({
    el: '#app',
    data: {
      products :  [],
      immanquables : [],
      selection : [],
    },
    mounted () {
        this.getData();
      },
       methods: { 
           getData : function() {
            axios
            .get('/js/flux.json')
            .then(
                response => {

                    this.products = response.data.blocks ;
                    this.immanquables = this.products[0] ;
                    this.selection = this.products[1] ;
                    
            }
                
            )
           }
       }
  })