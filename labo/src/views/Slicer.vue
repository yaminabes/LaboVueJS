<template>
  <div id="slicer">
    <v-container class="main-content">
      <v-container class="operations">
        <h2>Operations</h2>
        <div class="cut">
          <label class="input-label" for="cut">Virus part length</label>
          <div>
            <input id="cut" v-model.number="cutFactor">
          </div>
          <v-btn
              class="btn"
              elevation="0"
              :disabled="chosenViruses.length === 0"
              @click="cutViruses({chosenViruses, cutFactor})"
          >
            Cut
          </v-btn>
        </div>
        <div class="mutation">
          <label class="input-label" for="mute">Number of mutations</label>
          <div>
            <input id="mute" v-model.number="nbMutation">
          </div>
          <v-btn
              class="btn"
              elevation="0"
              :disabled="chosenViruses.length === 0"
              @click="mutateViruses({chosenViruses, nbMutation})"
          >
            Mutation
          </v-btn>
        </div>
        <v-btn
            class="btn"
            elevation="0"
            style="margin: 10px auto; width: 100%"
            @click="$router.push({path:'/labo/mix'})"
        >
          Go to mixer
        </v-btn>
      </v-container>
      <v-container class="viruses">
        <h2 style="text-align: left">Available Viruses</h2>
        <CheckedList
            v-if="samples.length > 0"
            :fields="['name','code']"
            :entries="samples"
            @chosen-changed="chosenViruses = $event"
        />
        <div v-else>
          <p class="empty-table-info">
            You dont have any virus here, to get one go to the library and add some to your basket.
            Then send all the virus of your basket to the laboratory and comeback here.
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
  name: 'Slicer',
  props: ['samples', 'parts'],
  data: () => {
    return {
      headers: [
        {text: 'ID', value: '_id'},
        {text: 'Name', align: 'start', value: 'name'},
        {text: 'Code', value: 'code'},
      ],
      chosenViruses: [],
      cutFactor: 5,
      nbMutation: 10,
    }
  },
  components: {
    CheckedList
  },
  methods: {
    ...vuex.mapActions(['cutViruses', 'mutateViruses'])
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

.viruses {
  margin-left: 30%;
}

@media screen and (max-width: 1271px){
  .operations {
    width: 100%;
    position: unset;
    max-width: fit-content;
  }

  .viruses {
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

.cut {
  margin: 20px 0;
}

.mutation {
  margin: 20px 0;
}

.empty-table-info {
  color: gray;
  margin: 20px 0;
  line-height: 2rem;
  max-width: 400px;
}
</style>