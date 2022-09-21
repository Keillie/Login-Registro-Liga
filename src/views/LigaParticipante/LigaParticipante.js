import api from "@/consfig/api";

export default {
  async mounted() {
    await this.ver();
  },

  data: () => ({
    informacion: "Buscar las ligas disponibles",
    arrayClasificados: [],
     titulo: "LIGAS",
     participantes:[],
  }),

  computed: {},

  methods: {
 
    async ver() {
      await api.get("/participante", {}).then((response) => {
        if (response.status === 200) {
          console.log("aca");
          this.participantes = response.data;
        } else {
          this.$toast.error(
            "ERROR AL CARGAR LOS REGISTROS, INTENTE NUEVAMENTE",
            {
              position: "top-right",
            }
          );
        }
      });
    },

    buscarLiga() {},

    buscar(numero) {
      console.log(numero);
      this.id = 2;
      this.titulo = "PARTICIPANTES";
    },
  },
};
