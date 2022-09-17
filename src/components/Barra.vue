
<template>
  <v-card class="overflow-hidden">
    <v-app-bar absolute color="#fcb69f" dark shrink-on-scroll prominent src="../assets/HEADER.png" fade-img-on-scroll
      scroll-target="#scrolling-techniques-3">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(55,32,72,.7)"></v-img>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>LIGA FUTBOLISTA.</v-app-bar-title>
      <v-spacer></v-spacer>

      
      <template v-slot:extension>
        <v-tabs fixed-tabs>
         
          <v-tab v-on:click="bucarliga" v-if="tipoUsuario>0">BUSCAR LIGA</v-tab>
          <v-tab v-on:click="crearliga" v-if="tipoUsuario>0"> CREAR LIGA</v-tab>
          <v-tab v-on:click="ligaasociada" v-if="tipoUsuario>0">LIGA ASOCIADA</v-tab>
          <v-tab v-on:click="participantes" v-if="tipoUsuario>0">PARTICIPANTES EN LIGA</v-tab>
          <v-tab router-link to="/">SALIR</v-tab>

        </v-tabs>




      </template>




    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="175">
      <v-container style="height: 750px;"></v-container>
    </v-sheet>
    <CrearLiga v-show="condicionCrearLiga"></CrearLiga>
    <BuscaLiga v-show="condicionBuscarLiga"></BuscaLiga>
    <LigaParticipacion v-show="condicionLigaParticipacion"></LigaParticipacion>
    <LigaParticipante v-show="condicionLigaParticipante"></LigaParticipante>
  </v-card>
  
</template>


<script>

import CrearLiga from '@/views/CrearLiga/CrearLiga.vue';
import BuscaLiga from '@/views/BuscarLiga/BuscaLiga.vue';
import LigaParticipacion from '@/views/LigaParticipacion/LigaParticipacion.vue';
import LigaParticipante from '@/views/LigaParticipante/LigaParticipante.vue';

export default {
  name: "Barra",
  components:{
    CrearLiga,
    BuscaLiga,
    LigaParticipacion,
    LigaParticipante
},
  data: () => ({
    condicionCrearLiga:false,
    condicionBuscarLiga:false,
    condicionLigaParticipacion:false,
    condicionLigaParticipante:false,
    tipoUsuario: 1

  }),


  methods: {

    bucarliga(){
      this.condicionCrearLiga=false,
    this.condicionBuscarLiga=true,
    this.condicionLigaParticipacion=false,
    this.condicionLigaParticipante=false
    },
    crearliga(){
      this.condicionCrearLiga=true,
    this.condicionBuscarLiga=false,
    this.condicionLigaParticipacion=false,
    this.condicionLigaParticipante=false
    },
    participantes(){
      this.condicionCrearLiga=false,
    this.condicionBuscarLiga=false,
    this.condicionLigaParticipacion=false,
    this.condicionLigaParticipante=true
    },
    ligaasociada(){
      this.condicionCrearLiga=false,
    this.condicionBuscarLiga=false,
    this.condicionLigaParticipacion=true,
    this.condicionLigaParticipante=false
    }
  }

  

};
</script>
