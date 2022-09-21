import api from "@/consfig/api";
// import axios from 'axios';
// export default ({
//   el: '#app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://ligasp2as2.herokuapp.com/api/usuario')
//       .then(response => (this.info = response))
//       console.log('jjj');
//   }
// })

export default {
  async mounted() {
    await this.ver();
  },

  data: () => ({
    uri: "https://ligasp2as2.herokuapp.com/api/usuario",
    informacion: "",
    arrayClasificados: [],
    datoLigas: [],
    dato: [
      {
        Numero: 2,
        Confederacion: "UEFA",
        Grupo: "Grupo H",
        Nombre: "Portugal",
      },
    ],
    text: "",
    headers_tabla: [
      { text: "CODIGO LIGA", value: "id_Liga" },
      { text: "NOMBRE LIGA", value: "nombre" },
      { text: "ACCION", value: "action" },
    ],
  }),

  computed: {},

  methods: {
    async ver() {
      await api.get("/liga", {}).then((response) => {
        if (response.status === 200) {
          console.log("aca");
          this.datoLigas = response.data;
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

    async agregarme(id_liga){
      

     
      await api.post("/solicitud", {
        id:'15',
        estado:'1',
        idUsuario:'1',
        idliga:id_liga
      }).then((response) => {
        if (response.status === 200) {
          console.log("aca");
         
        } else {
          this.$toast.error(
            "ERROR AL CARGAR LOS REGISTROS, INTENTE NUEVAMENTE",
            {
              position: "top-right",
            }
          );
        }
      });

    }
  },
};
