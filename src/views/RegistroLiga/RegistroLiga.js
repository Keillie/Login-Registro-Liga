// const boton_foto = document.querySelector('#btn-foto');
// //para colocar imagen en etiqueta img
// const imagen = document.querySelector('#user-photo');
// export default {
//     async mounted() {

//     },

//     data: () => ({

//     }),
  
//     computed: {},
  
//     methods: {
//          widget_cloudinary:cloudinary.createUploadWidget({
//             cloudName : 'dlesmrgip',
//             uploadPreset : 'njn0k1gc'
//         },(err, result)=>{
//             if(!err && result && result.event ==='success'){
//                 console.log('Imagen subida con exito',result.info);
//                 imagen.src = result.info.secure_url;
//             }
//         }),
        
//         //Creando funcion anonima al darle click
//         boton_foto:addEventListener('click',()=>{
//             //se abre ventana pero este debe de estar en protocolo http sino no abre la ventana, 
//             widget_cloudinary.open();
//         },false),

//     },
//   };
  
// export default {
//     data() {
//       return {
//         cloudName : 'dlesmrgip',
//         uploadPreset : 'njn0k1gc',
//         imagen: []
//       };
//     },
    
//     methods: {
//       processFile(event) {
//         this.imagen = event.target.files[0];
//         console.log(this.imagen);
//       },
//       GuardarImagen() {
//         console.log(this.imagen);
//         let formData = new FormData();
//         formData.append("file", this.imagen); // le damos los datos de la imagen luego que se lleno en la funcion processFile()
//         formData.append("upload_preset", this.uploadPreset); // le damos nuestro preset
  
//         //subiendo imagen con fetch
//         fetch(this.cloudName, { method: "POST", body: formData })
//           .then(response => response.json()) //convertimos la respuesta en json
//           .then(data => console.log(data.url))// obtenemos la url de la imagen guardada
//           .catch(error => console.log("ocurrio un error " , error)); //capturamos un posible error
//       }
//     }
//   };


import { CldContext, CldImage } from 'cloudinary-vue'

export default {
  components: {
    CldContext,
    CldImage
  },
  data() {
    return {
      url: '',
      publicId: ''
    }
  },
  mounted() {

  },
  methods: {
    openUploadModal() {
      window.cloudinary.openUploadWidget(
        { cloudName : 'dlesmrgip',
          uploadPreset : 'njn0k1gc',
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log('Done uploading..: ', result.info);
            this.url = result.info.url;
            this.publicId = result.info.public_id;
          }
        }).open();
    }
  }
}