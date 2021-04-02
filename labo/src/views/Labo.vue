<template>
  <div>
    <v-img class="banner" :src="require('../assets/lab-background.svg')"></v-img>
    <div id="lab">
      <v-container>
        <router-view name="locSubCentral" :parts="parts" :samples="samples"></router-view>
      </v-container>
    </div>
  </div>
</template>

<script>
import vuex from 'vuex'
export default {
  name: 'Labo',
  props: ['samples'],
  computed: {
    ...vuex.mapGetters(['parts'])
  }
}
</script>
<style scoped>
.banner {
  min-height: 50px;
}

#lab {
  max-width: 1280px;
  padding: 0 80px;
  margin: 0 auto;
}

@media screen and (max-width: 900px){
  #lab {
    padding: unset;
  }
}

</style>