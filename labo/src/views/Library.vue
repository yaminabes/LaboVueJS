<template>
  <div>
    <v-img class="banner" :src="require('../assets/lib-background.svg')"></v-img>
    <div id="library">
      <v-container>
        <Articles :collec="collec"></Articles>
        <router-view name="locDown"></router-view>
      </v-container>
    </div>
  </div>
</template>

<script>
import Articles from '../components/Articles.vue'
export default {
  name: 'Library',
  props: ['collec'],
  components: {
    Articles
  }
}
</script>

<style scoped>
.banner {
  min-height: 50px;
}

#library {
  max-width: 1280px;
  padding: 0 80px;
  margin: 0 auto;
}

@media screen and (max-width: 900px){
  #library {
    padding: unset;
  }
}
</style>
