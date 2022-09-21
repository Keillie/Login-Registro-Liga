import api from "@/consfig/api";

export default {
  async mounted() {},

  data: () => ({}),

  computed: {},

  methods: {
    async ingreso() {
      await api.post("/correo/clave", {}).then((response) => {
        if (response.status === 200) {
          console.log("aca");
          this.participantes = response.data;
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
