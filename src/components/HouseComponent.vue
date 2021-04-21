<template>
  <div>
    <p>House{{ [houses.length] }}</p>
    <img :src="house.imgUrl">
    <p>House Description: {{ house.description }}</p>
    <p>PRICE: ${{ house.price }}.00 | YEAR:{{ house.year }}</p>

  </div>

</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object
    }

  },

  setup() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
