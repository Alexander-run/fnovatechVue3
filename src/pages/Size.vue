<template>
  <h1>Sizing Your Solar System</h1>
  <div class="display-row">
    <div v-for="(item, index) in renderData" class="display-column">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
<script setup>
const renderData = [
  {
    title: 'Small Home',
    description: 'A 3-5 kW system is typically sufficient for a small home or townhouse, providing enough power to cover your basic electricity needs.'
  },{
    title: 'Medium Home',
    description: 'A 5-7 kW system is recommended for a medium-sized home, ensuring your solar panels can meet the majority of your energy demands.'
  },{
    title: 'Large Home',
    description: 'For a large home or if you have high energy consumption, a 7-10 kW system may be the optimal solution to maximize your solar savings.'
  },
]
</script>
<style lang="less" scoped>
.display-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.display-column {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>