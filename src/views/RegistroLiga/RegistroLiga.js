import api from '@/consfig/api';
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
    },

    async registro(){

      await api.post('/usuario',{
        nombre: this.nombre,
        apellido: this.apellido,
        correo:this.email,
        clave:this.pass,
        avatar:this.url,
        estado:1,
      })

    },
  }
}