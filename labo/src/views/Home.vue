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
#home {
  max-width: 1280px;
  padding: 0 80px;
  margin: 0 auto;
}

@media screen and (max-width: 900px){
  #home {
    padding: unset;
  }
}

.main-container {
  margin-top: 5%;
  display: flex;
  justify-content: flex-end;
  color: #0d0e1a!important;
}

.mc-txt-to-left {
  text-align: left!important;
}

.mn--subtitle {
  font-weight: 300;
}

.mn--title {
  margin-top: 10px;
  font-weight: 500;
}

.mn--project-theme {
  max-width: 400px;
  margin: 20px auto;
  color: #9a9a9a;
  line-height: 2em;
}

.mn--action-button {
  background: linear-gradient(#0b4fd2, #0b58e0)!important;
  border: 1px solid #104ebd;
  border-bottom: none;
  color: #fff;
  padding: 0 25px!important;
  text-transform: capitalize;
  border-radius: 5px!important;
}

.mn--action-button:after {
  content: '';
  position:absolute;
  width:100%;
  bottom:1px;
  z-index:-1;
  transform: scale(.89);
  box-shadow: 0 0 10px 5px rgba(7, 85, 221,0.50);
}

.chimist--container {
  margin-top: 10%;
  position: relative;
  height: 225px;
  min-width: 200px;
  background: linear-gradient(180deg, #0b4fd2, #0b58e0)!important;
  border: 1px solid #104ebd;
  border-bottom: none;
  border-radius: 15px!important;
}

.chimist--container:after {
  content: '';
  position: absolute;
  width: 100%;
  bottom: 1px;
  z-index: -1;
  transform: scale(.94);
  box-shadow: 0 0 40px 15px rgba(7, 85, 221,0.50);
}

@media screen and (max-width: 1077px){
  .chimist--container {
    height: 690px;
  }
}

@media screen and (max-width: 300px){
  .chimist--container {
    height: 500px;
  }
}

.chimist--img {
  bottom: 0;
  margin-left: 40px;
  position: absolute;
  width: 380px;
  height: auto;
}

@media screen and (max-width: 1077px){
  .chimist--img {
    transform: translate(-50%);
    left: 50%;
    margin-left: unset;
  }
}

.cc-info {
  display: grid;
  justify-content: center;
  padding: 50px;
}

@media screen and (max-width: 1077px){
  .cc-info {
    text-align: center;
  }
}

.cc-dr-name {
  color: #fff;
  font-size: 20px;
}

.cc-dr-job {
  color: rgba(255,255,255,0.5);
  font-size: 12px;
}

.cc-dr-achievements {
  display: flex;
}

.cc-dr-ac-card:first-child{
  margin: 20px 5px 0 0;
}

.cc-dr-ac-card {
  margin: 20px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 10px!important;
  background: rgba(0,0,0,0.20)!important;
}
</style>
