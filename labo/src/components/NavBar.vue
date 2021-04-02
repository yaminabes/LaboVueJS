<template>
  <div id="nav-bar">
    <v-app-bar class="nv-container" flat>
      <router-link class="nb--title" to="/">
        <v-img :src="require('../assets/projectLogo.svg')" alt="Project Logo"></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(title,index) in titles"
        elevation="0"
        :key="index"
        class="nb--item"
        :ripple="false"
        :style="{color: title.color}"
        @click="$router.push({path: title.path})"
      >
        {{ title.text }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["titles"]
}
</script>

<style scoped>
#nav-bar {
  max-width: 1280px;
  padding: 0 80px;
  margin: 0 auto;
}

@media screen and (max-width: 900px){
  #nav-bar {
    padding: unset;
  }
}

.nv-container {
  background: #fff!important;
}

.nb--title {
  padding: 0 16px;
  outline: none;
  width: 120px;
}

.nb--item {
  letter-spacing: unset;
  background: #fff!important;
  text-transform: none;
  font-weight: 500!important;
  transition: 300ms color ease-in-out;
  outline: none;
}

.nb--item:before {
  background: transparent!important;
}

.nb--item:hover {
  color: #0755dd!important;
}

</style>