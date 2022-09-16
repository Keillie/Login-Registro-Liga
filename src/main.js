import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify'
import './cloudinary.js'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios,axios)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
