<template>
  <div>
    <ul
      style="
        list-style: none;
        text-align: left;
        align-items: center;
        display: inline-block;
        justify-content: center;
      "
    >
      <v-list-item
        style="padding: unset"
        v-for="(e,index) in entries"
        :key="index"
      >
        <input
          style="margin: 0 10px"
          type="checkbox"
          :id="index"
          :value="index"
          v-model="chosenEntries"
          @change="$emit('chosen-changed',chosenEntries)"
        >
        <label :for="index">
          <span v-for="(f,index) in fields" :key="index">
            {{ e[f] }}
          </span>
        </label>
      </v-list-item>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckedList',
  props: ['entries', 'fields'],
  data: () => {
    return {
      index: 0,
      headers: [
        {text: 'Name', align: 'start', value: 'name',},
        {text: 'Code', value: 'code'},
        {text: 'Mortality (%)', value: 'mortalite'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      chosenEntries: []
    }
  },
  methods: {
    setIndex(item) {
      item.index = this.index++;
    },
  }
}
</script>

<style scoped>

</style>