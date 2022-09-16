<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <LoginLiga></LoginLiga>
  </v-app>
</template>

<script>
import LoginLiga from './views/LoginLiga/LoginLiga.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { LoginLiga }
};
</script>
