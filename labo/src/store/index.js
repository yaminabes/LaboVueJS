import Vue from 'vue'
import Vuex from 'vuex'
import {Virus, viruses} from "../model";

Vue.use(Vuex)

const state = {
  viruses: viruses,
  samples: [],
  basket: [],
  parts: [],
  newVirus: null,
}

const mutations = {
  ADD_VIRUS(state, virus) {
    state.viruses.push(virus)
    state.newVirus = null
  },
  ADD_TO_SAMPLE(state, viruses) {
    viruses.forEach((virus) => {
      state.samples.push(virus)
    })
    state.basket.splice(0, state.basket.length)
  },
  ADD_TO_BASKET(state, virus) {
    state.basket.push(virus)
  },
  CUT(state, {chosenViruses, cutFactor}) {
    if (cutFactor === 0) return;
    chosenViruses.forEach(e => {
      let s = state.samples[e];
      for (let i = 0; i < s.code.length; i += cutFactor) {
        state.parts.push({code: s.code.substring(i, i + cutFactor)});
      }
    });
    // remove chosen viruses
    for (let i = chosenViruses.length - 1; i >= 0; i--) {
      state.samples.splice(chosenViruses[i], 1);
    }
    // unselect all
    chosenViruses.splice(0, chosenViruses.length)
  },
  MUTATION(state, {chosenViruses, nbMutation}) {
    chosenViruses.forEach(e => {
      let newCode;
      let s = state.samples[e];
      for (let i = 0; i < nbMutation; i++) {
        let idx = Math.floor(Math.random() * s.code.length);
        let chr = String.fromCharCode(Math.floor(Math.random() * 4) + "A".charCodeAt(0));
        newCode = s.code.substring(0, idx) + chr + s.code.substring(idx + 1);
        s.code = newCode;
        s.updateCaracs();
      }
    });
  },
  MIX(state, chosenParts) {
    let newCode="";

    let chosen = [...chosenParts]; // real copy so that we can splice on the copy
    let nb = chosen.length;
    for(let i=0;i<nb;i++) {
      // choose randomly a part among the selected ones
      let idx = Math.floor(Math.random() * chosen.length);
      let p = state.parts[chosen[idx]];
      newCode = newCode+p.code;
      chosen.splice(idx,1);
    }
    state.newVirus = new Virus(viruses.length,'mixedvirus',newCode);
    // remove chosen parts
    for(let i=chosenParts.length-1;i>=0;i--) {
      state.parts.splice(chosenParts[i],1);
    }
    // unselect all
    chosenParts.splice(0,chosenParts.length)
  }
}

const getters = {
  viruses: state => state.viruses,
  samples: state => state.samples,
  basket: state => state.basket,
  parts: state => state.parts,
  newVirus: state => state.newVirus,
}

const actions = {
  addVirus: (store, virus) => {
    store.commit('ADD_VIRUS', virus)
  },
  sendToLab: (store, basketViruses) => {
    store.commit('ADD_TO_SAMPLE', basketViruses)
  },
  addToBasket: (store, virus) => {
    let virusToAdd = new Virus(0, virus.name, virus.code);
    store.commit('ADD_TO_BASKET', virusToAdd)
  },
  cutViruses: (store, {chosenViruses, cutFactor}) => {
    store.commit('CUT', {chosenViruses, cutFactor})
  },
  mutateViruses: (store, {chosenViruses, nbMutation}) => {
    store.commit('MUTATION', {chosenViruses, nbMutation})
  },
  mixParts: (store, chosenParts) => {
    store.commit('MIX', chosenParts)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
})

global.store = store

export default store;
