import api from "@/consfig/api";
export default {
  name:'CrearLiga',
  async mounted() {},

  data: () => ({
    arrayEstadios: [],
    message: "Nombre liga",
  }),

  computed: {},

  methods: {

    async crearliga() {
      console.log(localStorage.getItem('id'))
      await api.post("/liga", {
        id_Usuario:localStorage.getItem('id'),
        nombre:this.nombreliga,
        estado:1
      }).then((response) => {
        if (response.status === 200) {
          alert('Correcto !');
         
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
