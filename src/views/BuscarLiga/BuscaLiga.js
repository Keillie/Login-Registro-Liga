// import api from '@/consfig/api'
import axios from 'axios';
export default ({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://ligasp2as2.herokuapp.com/api/usuario')
      .then(response => (this.info = response))
      console.log('jjj');
  }
})

// export default {
//   async mounted() {
    
//       axios
//       .get('https://ligasp2as2.herokuapp.com/api/usuario')
//       .then(response => (this.datoLigas = response))
//   },

  
  // data: () => ({
  //   uri:'https://ligasp2as2.herokuapp.com/api/usuario',
  //   informacion: "",
  //   arrayClasificados: [],
  //   datoLigas: [],
  //   dato: [

  //     { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' }

  //   ],
  //   text: '',
  //   headers_tabla: [
  //     { text: 'CODIGO LIGA', value: 'nombre', },  
  //     { text: 'NOMBRE LIGA', value: 'Confederacion' },
  //     { text: 'ACCION', value: 'action' },
   
  //   ],

  // }),

//   computed: {},

//   methods: {
//     async ver() {

//       console.log('h555555');
//         await api
//           .get('/usuario' , {})
//           .then((response) => {
//             if (response.status === 200) {
//               console.log('aca');
//               this.datoLigas = response.data
//             } else {
//               this.$toast.error(
//                 'ERROR AL CARGAR LOS REGISTROS, INTENTE NUEVAMENTE',
//                 {
//                   position: 'top-right',
//                 },
//               )
//             }
//           })
   
//           console.log('hello');
//           console.log(this.datoLigas);

//     },

//     buscarLiga(numeros) {

//       this.ver();
//       var datoLigas = [];
//       var numero = 0;
//       for (let index = 0; index < this.arrayClasificados.length; index++) {

//         if (numeros === this.arrayClasificados[index].Confederacion) {

//           datoLigas[numero] = this.arrayClasificados[index];
//           console.log(datoLigas[numero]);
//           numero++;
//         }
//       }

//       this.arrayClasificados = [];
//       for (let index = 0; index < this.datoLigas.length; index++) {
//         this.arrayClasificados[index] = datoLigas[index]


//       }
//       this.dato=this.arrayClasificados.toString;



//       this.dato=[
    
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
        
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
        
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
//         { Numero: 2, Confederacion: 'UEFA', Grupo: 'Grupo H', Nombre: 'Portugal' },
  
//       ];
//     },
      

//     buscar(numero) {
//       console.log(numero);
//     }
//   }
// };



