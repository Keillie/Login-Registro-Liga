

export default {
  async mounted() {
    await this.ver();
  },

  data: () => ({
    informacion: "Buscar las ligas disponibles",
    arrayClasificados: [],
    datoLigas: [{Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},
    {Numero: 1, Confederacion: 'UEFA', Grupo: 'Grupo G', Nombre: 'Serbia'},],
    id: 1,
    titulo: "LIGAS",
  }),

  computed: {},

  methods: {
    async ver() {
    
      this.arrayClasificados = [];

    },

    buscarLiga() {},

    buscar(numero) {
      console.log(numero);
      this.id = 2;
      this.titulo = "PARTICIPANTES";
    },
  },
};
