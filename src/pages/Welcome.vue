<template>
  <div>
    <div class="display-row container justify-bottom">
    <div>
      <h2>Welcome to F.NOVA Solar Mall</h2>
      <div v-for="(item, index) in renderData" class="display-row">
        <div><div class="box">{{ index+1 }}</div></div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
    <img alt="figure" src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/yi3lnaos0hbznsh/generated-images/zqyxUqx4KhciOuhtTzrIv.png"/>
  </div>
  </div>
</template>
<script setup>

const renderData = [
  {
    title: 'Explore Our Products',
    content: 'Browse our extensive selection of high-efficiency solar panels, inverters, and batteries to find the perfect fit for your home or business.'
  },{
    title: 'Speak with Experts',
    content: 'Our knowledgeable solar consultants are here to guide you through the process and answer all your questions.'
  },{
    title: 'Visualize Your Installation',
    content: 'Use our interactive tools to see how a solar system would look on your roof and estimate your potential energy savings.'
  },
]
</script>
<style lang="less" scoped>
.container {
  text-align: left;
}
.display-row {
  display: flex;
  flex-direction: row;
}
.justify-bottom {
  align-items: end
}

.box {
  color: #C7CDD6;
  background: #434348;
  font-size: 1.75rem;
  border-radius: 2px;
  width: 3rem;
  width: 3rem;
  text-align: center;
  margin-right: 1rem;
}
h3 {
  margin-top: 0;
}
img {
  width: 40%;
  height: 100%;
}
</style>