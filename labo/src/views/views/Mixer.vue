<template>
  <div id="Mixer">
    <v-container class="main-content">
      <v-container class="operations">
        <h2>Operations</h2>
        <div v-if="newVirus != null" class="new-virus">
          <label for="newVirus" class="input-label">New virus</label>
          <div>
            <input type="text" id="newVirus" v-model="newVirus.name">
          </div>
          <p class="virus-info"><b>Code: </b>
            <span>{{ newVirus.code}}</span>
          </p>
          <p class="virus-info"><b>Mortalite: </b>
            <span>{{ newVirus.mortalite}}</span>
          </p>
          <v-btn
            class="btn"
            elevation="0"
            @click="addVirus(newVirus)"
          >
            Add to library
          </v-btn>
        </div>
        <div class="mix">
          <v-btn
              class="btn"
              elevation="0"
              :disabled="chosenParts.length === 0"
              @click="mixParts(chosenParts)"
          >
            Mixing
          </v-btn>
        </div>
        <v-btn
          class="btn"
          style="margin: 10px auto; width: 100%"
          elevation="0"
          @click="$router.push({path:'/labo/slice'})"
        >
          Go to slicer
        </v-btn>
      </v-container>
      <v-container class="parts">
        <h2 style="text-align: left">Available parts</h2>
        <CheckedList
            v-if="parts.length > 0"
            :fields="['code']"
            :entries="parts"
            @chosen-changed="chosenParts = $event"
        />
        <div v-else>
          <p class="empty-table-info">
            You dont have any parts here, to get parts go to slicer in the lab and cut a virus.
          </p>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import CheckedList from '../components/CheckedList.vue'
import vuex from 'vuex'
export default {
  name: 'Mixer',
  props: ['parts'],
  data : () => {
    return {
      chosenParts:[],
    }
  },
  components: {
    CheckedList
  },
  computed: {
    ...vuex.mapGetters(['newVirus'])
  },
  methods: {
    ...vuex.mapActions(['mixParts', 'addVirus'])
  }
}
</script>

<style scoped>
.main-content {
  width: 100%;
  margin: 0 auto;
}
.operations {
  position: fixed;
  border: 1px solid #e0e0e0;
  padding: 20px 30px;
  border-radius: 20px;
  width: fit-content;
}

.parts {
  margin-left: 30%;
}

@media screen and (max-width: 1271px){
  .operations {
    width: 100%;
    position: unset;
    max-width: fit-content;
  }

  .parts {
    width: 100%;
    display: block;
    margin: unset;
  }
}

.btn[disabled] {
  background: #606060;
  border: 1px solid #bfbfbf;

  color: #fff;
  padding: 0 25px!important;
  text-transform: capitalize;
  border-radius: 5px!important;
}

.btn[disabled]:after {
  content: '';
  position:absolute;
  width:100%;
  bottom:1px;
  z-index:-1;
  transform: scale(.89);
  box-shadow: none;
}

.btn {
  background: linear-gradient(#0b4fd2, #0b58e0);
  border: 1px solid #104ebd;
  border-bottom: none;
  color: #fff;
  padding: 0 25px!important;
  text-transform: capitalize;
  border-radius: 5px!important;
}

.btn:after {
  content: '';
  position: absolute;
  width: 100%;
  bottom: 1px;
  z-index: -1;
  transform: scale(.89);
  box-shadow: 0 0 10px 5px rgba(7, 85, 221, 0.50);
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.input-label {
  margin-left: 20px;
  color: #606060;
  font-size: 12px;
  font-weight: 500;
}

input {
  margin-bottom: 10px;
  height: 40px;
  border: 1px solid #eee;
  background: #eee!important;
  border-radius: 20px;
  padding: 10px 20px;
  outline: none;
  width: 100%;
  transition: 200ms border ease-in-out;
}

input:focus {
  border: 1px solid #bfbfbf;
}

.virus-info {
  margin-bottom: 10px;
  max-width: 200px;
  word-break: break-all;
}

.mix {
  margin: 20px 0;
}

.new-virus {
  margin: 20px 0;
}

.empty-table-info {
  color: gray;
  margin: 20px 0;
  line-height: 2rem;
  max-width: 400px;
}
</style>