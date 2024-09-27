<template>
  <div class="display-row">
    <img alt="figure for installation" src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/yi3lnaos0hbznsh/generated-images/RVEx9IVu4hXB5YvIOS3SN.png"/>
    <div class="main-container">
      <h2>Installation and Maintenance</h2>
      <div v-for="(item, index) in renderData" class="display-row">
        <div class="step-icon">
          <svg width="90" height="144">
            <path fill="#434348" d="
              M 0 126
              L 45 144
              L 90 126
              L 90 0
              L 45 18
              L 0 0 Z">
            </path>
            <text x="50%" y="50%" text-anchor="middle" fill="#C7CDD6">{{ index+1 }}</text>
          </svg>
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const renderData = [
  {
    title: 'Site Evaluation',
    content: 'Our experts will assess your property and determine the optimal solar system design.'
  },{
    title: 'Installation',
    content: 'Our certified installers will handle the entire process, from permitting to connecting your new solar panels.'
  },{
    title: 'Maintenance',
    content: 'We provide regular inspections and maintenance to ensure your solar system operates at peak efficiency.'
  },
]
</script>
<style lang="less" scoped>
.main-container {
  padding: 2rem;
  text-align: left;
}
.display-row {
  display: flex;
  flex-direction: row;
}
img {
  width: 40%;
}
svg {
  font-size: 1.75rem;
}
.step-icon {
  margin-right: 2rem;
}
</style>