import Vue from "vue";
import VueRouter from "vue-router";
import LoginLiga from "../views/LoginLiga/LoginLiga.vue";
import RegistroLiga from "../views/RegistroLiga/RegistroLiga.vue";

 Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginLiga,
  },



 {
  path: "/registro",
  name: "registro",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: RegistroLiga
},
 {
  path: "/buscarliga",
  name: "buscarliga",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/BuscarLiga/BuscaLiga.vue"
    ),
},

{
  path: "/menu",
  name: "menu",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/Menu/Menu.vue"
    ),

    children:[
      {
        path: "/crearliga",
        name: "crearliga",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/CrearLiga/CrearLiga.vue"
          ),
      },
    ]
},





{
  path: "/ligaparticipacion",
  name: "ligaparticipacion",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  redirect: () =>
    import(
      /* webpackChunkName: "about" */ "../views/LigaParticipacion/LigaParticipacion.vue"
    ),
},

{
  path: "/ligaparticipante",
  name: "ligaparticipante",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/LigaParticipante/LigaParticipante.vue"
    ),
},

{
  path: "/salir",
  name: "salir",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/HomeView.vue"
    ),
},

];

const router = new VueRouter({
  routes,
});

export default router;
