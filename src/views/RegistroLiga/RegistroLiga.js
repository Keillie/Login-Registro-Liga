import { CldContext, CldImage } from 'cloudinary-vue'
//import axios from 'axios';

// const EMPLOYEE_API_BASE_URL ='http://ligasp2as2.herokuapp.com/api/usuario'

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

// function UsuarioController() {

//   URL ='http://ligasp2as2.herokuapp.com/api/usuario';
//   let headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');

//   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//   headers.append('Access-Control-Allow-Credentials', 'true');

//   headers.append('GET', 'POST', 'OPTIONS');

//   headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

//   fetch(sign_in, {
//       //mode: 'no-cors',
//       credentials: 'include',
//       method: 'POST',
//       headers: headers
//     })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log('Authorization failed : ' + error.message));
// }