<template>
  <div id="basket">
    <h2 style="text-align: left">In my basket</h2>
    <v-data-table
      v-if="basket.length !== 0"
      :headers="headers"
      :items="basket"
      class="basket-table"
    >
      <template v-slot:item.mortalite="{ item }">
        <v-chip
          :style="'background:'+getColor(item.mortalite)+';'"
          dark
        >
          {{ item.mortalite }}
        </v-chip>
      </template>
    </v-data-table>
    <p v-else class="empty-table-info">You have nothing in your basket.</p>
    <v-btn
      :disabled="basket.length === 0"
      elevation="0"
      class="btn"
      @click="sendToLab(basket)"
    >
      Send to the lab
    </v-btn>
  </div>
</template>

<script>
import vuex from 'vuex'
export default {
  name: 'Basket',
  props: ['operation','name','code'],
  data : () => {
    return {
      headers: [
        { text: 'Name', align: 'start', value: 'name',},
        { text: 'Code', value: 'code' },
        { text: 'Mortality (%)', value: 'mortalite' },
      ],
    }
  },
  methods: {
    ...vuex.mapActions(['sendToLab']),
    getColor (mortalite) {
      if (mortalite > 50) return 'red'
      else if (mortalite > 25) return 'orange'
      else return 'green'
    },
  },
  computed: {
    ...vuex.mapGetters(['basket'])
  },

}
</script>

<style scoped>
.basket-table {
  text-align: center;
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

.empty-table-info {
  width: 100%;
  text-align: center;
  color: gray;
  margin: 50px auto;
  line-height: 2rem;
  max-width: 400px;
}
</style>