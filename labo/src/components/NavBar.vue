<template>
  <div id="nav-bar">
    <v-app-bar class="nv-container" flat>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(title,index) in titles"
        :key="index"
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

</style>