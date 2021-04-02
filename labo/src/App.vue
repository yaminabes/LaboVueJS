<template>
  <div id="app">
    <NavBar :titles="titles" />
    <router-view name="locCentral" :collec="viruses" :samples="samples"></router-view>
  </div>
</template>
<script>
import NavBar from './components/NavBar'
import vuex from 'vuex'
export default {
  name: 'App',
  data : () => {
    return {
      titles : [
        { text: "Home", color:"#0a0a14", path:"/home"},
        { text: "Lab", color:"#0a0a14", path:"/labo/slice"},
        { text: "Library", color:"#0a0a14", path:"/library/view"},
      ],
      currentMenu : 0,
    }
  },
  components: {
    NavBar
  },
  computed: {
    ...vuex.mapGetters(['viruses', 'samples']),
  }
}
</script>
<style>
* {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (max-width: 900px){
  #app {
    padding: unset;
  }
}
</style>
