import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Labo from "../views/Labo";
import Library from "../views/Library";
import Basket from "../views/Basket";
import Mixer from "../views/Mixer";
import Slicer from "../views/Slicer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    components: {
      locCentral: Home
    }
  },
  {
    path: '/labo',
    name: 'Labo',
    components: {
      locCentral: Labo
    },
    children: [
      {
        path: 'slice',
        components: {
          locSubCentral: Slicer
        }
      },
      {
        path: 'mix',
        components: {
          locSubCentral: Mixer
        }
      }
    ]
  },
  {
    path: '/library',
    name: 'Library',
    components: {
       locCentral: Library
    },
    children: [
      {
        path: ':op',
        components: {
          locDown : Basket
        },
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

export default router
