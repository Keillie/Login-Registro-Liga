import api from "@/consfig/api";

export default {
  async mounted() {},

  data: () => ({
    respuesta: "",
  }),

  computed: {},

  methods: {
    async ingresar() {
      console.log(this.email);
      await api
        .post("/usuario/" + this.email + "/" + this.passo, {})
        .then((response) => {
          if (response.status === 200) {
            this.repuesta = response.data;
            console.log(this.repuesta);
            if (!this.repuesta.nombre != null) {
              localStorage.setItem("id", this.repuesta.id);

              console.log(localStorage.getItem("id"));
              this.$router.push("/menu");
              // alert("Bienvenido " + this.email + "!");
            }
          } else {
            this.$toast.error("ERROR AL Ingresar", {
              position: "top-right",
            });
          }
        });
    },
  },
};
