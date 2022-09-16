  export default {
    async mounted() {

    },
  
    data: () => ({

    }),
  
    computed: {},
  
    methods: {
        Registrarse(msg, view) {
            // Comprobas todo lo que sea necesario
            // y finalmente redireccionas
            // ...
             this.$router.push(view.path)
           }
    },
  };
  