<template>
  <div>
    <h1>House Page vue</h1>
    <button>Add New House</button>
  </div>

  <House v-for="house in state.houses" :key="house.id" :house="house" />
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import House from '../components/HouseComponent'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'

export default {
  name: 'HousesPage',
  setup() {
    const state = reactive({
      houses: computed(() => AppState.houses)
    })

    onMounted(async() => {
      try {
        await housesService.getHouses()
      } catch (error) {
        // console.error(error)
      }
    })
    return {
      state
    }
  },
  components: {
    House
  }
}
</script>

,<style lang="scss">
h1{
  color: red;
}
button{
  background-color: greenyellow
}
</style>
