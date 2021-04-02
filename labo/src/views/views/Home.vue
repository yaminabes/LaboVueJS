<template>
  <div id="home">
    <v-container class="main-content">
      <v-container style="text-align: left" class="main-container">
        <div class="mc-txt-to-left">
          <h2 class="mn--subtitle">Welcome to</h2>
          <h1 class="mn--title">Dr. Mad P4 Laboratory</h1>
          <p class="mn--project-theme">
            Here you can create the most monstrous viruses ever
            known with a professionalism never seen before
          </p>
          <v-btn
            elevation="0"
            :ripple="false"
            class="mn--action-button"
            to="/library/view"
          >
            Get started
          </v-btn>
        </div>
      </v-container>
      <v-card flat class="chimist--container">
        <v-img class="chimist--img" src="chimist.png"></v-img>
        <div class="cc-info">
          <div>
            <h3 class="cc-dr-name">Dr. Mad P4</h3>
            <p class="cc-dr-job">professional virus chemist</p>
          </div>
          <div class="cc-dr-achievements">
            <v-card flat class="cc-dr-ac-card">
              <v-icon color="#fff">mdi-hand-okay</v-icon>
            </v-card>
            <v-card flat class="cc-dr-ac-card">
              <v-icon color="#fff">mdi-safety-goggles</v-icon>
            </v-card>
            <v-card flat class="cc-dr-ac-card">
              <v-icon color="#fff">mdi-eyedropper-variant</v-icon>
            </v-card>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style scoped>

</style>
