<template>
  <div id="articles">
    <h2 style="text-align: left">Available viruses</h2>
    <v-data-table
      :headers="headers"
      :items="collec"
      class="article-table"
    >
      <template v-slot:item.mortalite="{ item }">
        <v-chip
          :style="'background:'+getColor(item.mortalite)+';'"
          dark
        >
          {{ item.mortalite }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          elevation="0"
          class="btn"
          @click="addToBasket(item)"
        >
          Add
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import vuex from 'vuex'
export default {
  name: 'Articles',
  props: ['collec'],
  data () {
    return {
      headers: [
        { text: 'Name', align: 'start', value: 'name',},
        { text: 'Code', value: 'code' },
        { text: 'Mortality (%)', value: 'mortalite' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  methods: {
    getColor (mortalite) {
      if (mortalite > 50) return 'red'
      else if (mortalite > 25) return 'orange'
      else return 'green'
    },
    ...vuex.mapActions(['addToBasket'])
  },
}
</script>
<style scoped>
#articles {
  margin-bottom: 20px;
}

.article-table {
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
</style>
