import Vue from "vue";
import Cloudinary from "cloudinary-vue";
 
Vue.use(Cloudinary);
// ..or provide some global cloudinary service configuration..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" }
  //             ^ cloudinary configuration options
});
// ..or specify which components to install..
Vue.use(Cloudinary, {
  configuration: { cloudName: "dlesmrgip" },
  components: ["CldImage"]
});
// ..or rename all or some components..
Vue.use(Cloudinary, {
  configuration: { cloudName: "dlesmrgip" },
  components: {
    CldImage: true,
    // component name
    //        ^ true just turns if on
    CldTransformation: "CldXf"
    //                 ^ a custom name
  }
});
// ..or rename using new names as keys.
Vue.use(Cloudinary, {
  configuration: { cloudName: "dlesmrgip" },
  components: {
    CldXf: "CldTransformation"
  }
});