import api from "@/consfig/api";

export default {
  async mounted() {},

  data: () => ({
    respuesta:'',
  }),

  computed: {},

  methods: {
    async ingresar() {
      console.log(this.email)
      await api.post("/usuario/"+this.email+"/"+this.passo, {}).then((response) => {
        if (response.status === 200) {
          
          this.repuesta = response.data;
          console.log(
            this.repuesta);
          if(this.repuesta===true){
        
             this.$router.push('/menu');
          }
        } else {
          this.$toast.error(
            "ERROR AL Ingresar",
            {
              position: "top-right",
            }
          );
        }
      });
    },
  },
};
