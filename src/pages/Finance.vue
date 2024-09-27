<template>
  <div class="display-row">
    <div class="main-container">
      <h2>Flexible Financing Options</h2>
      <div v-for="(item, index) in renderData">
        <svg aria-hidden="true" data-prefix="fal" data-icon="mountain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#FDC4C4" :d="item.svgPath"></path>
        </svg>
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
    <img src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/yi3lnaos0hbznsh/generated-images/sQndlyOTGp9N40sB0qyyT.png" />
  </div>
</template>
<script setup>
const renderData = [
  {
    title: 'No Money Down',
    svgPath: "M176 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V63.5c-6.3 .1-12.6 .3-18.8 .9c-24 2-47.9 7.8-67.4 20.6C37.7 98.1 23.2 118 17.9 146c-3.8 20.3-1.9 38.2 5.7 53.7C31 215 43.1 226.5 57.1 235.4c26.7 17 63.6 26.7 97.2 35.5l1.7 .4c35.7 9.4 67.8 17.9 89.8 31.9c10.6 6.8 17.8 14.2 21.9 22.6c4 8.3 5.8 19 3 33.8c-3.9 20.7-18.4 36.4-42.9 46c-24.9 9.8-59.1 12.6-98 7c-24.4-3.6-61-12.1-91.3-25.2c-8.1-3.5-17.5 .2-21 8.4s.2 17.5 8.4 21c33.6 14.5 73.1 23.5 99.3 27.4l.1 0c6.4 .9 12.7 1.6 18.9 2.1V496c0 8.8 7.2 16 16 16s16-7.2 16-16V447.4c23.2-.7 44.8-4.7 63.4-11.9c32-12.5 56.2-35.7 62.7-69.9c3.8-20.3 1.9-38.2-5.7-53.7c-7.4-15.3-19.6-26.8-33.5-35.6c-26.7-17-63.6-26.7-97.2-35.5l-1.7-.4c-35.7-9.4-67.8-17.9-89.8-31.9c-10.6-6.8-17.8-14.2-21.9-22.6c-4-8.3-5.8-19-3-33.8c3.6-19.3 13.1-31.8 26-40.2c13.4-8.8 31.5-13.7 52.6-15.5c42.3-3.5 91.3 6 124.3 14c8.6 2.1 17.2-3.2 19.3-11.8s-3.2-17.2-11.8-19.3c-21.9-5.3-52.1-11.7-83.8-14.4V16z",
    content: 'Lease or finance your solar system with $0 upfront cost.'
  },{
    title: 'Tax Credits',
    svgPath: 'M64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96A64 64 0 1 0 64 64a64 64 0 1 0 0 128zM320 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM379.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-352 352c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l352-352z',
    content: 'Take advantage of federal, state, and local solar incentives.'
  },{
    title: 'Customized Plans',
    svgPath: 'M352 160V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160H352zm0-32H32V64c0-17.7 14.3-32 32-32H320c17.7 0 32 14.3 32 32v64zm32 0V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v64 16 16V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160 144 128zM72 224a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM264 416a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM80 400c-8.8 0-16 7.2-16 16s7.2 16 16 16H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z',
    content: 'We\'ll work with you to find the best financing solution.'
  },
]
</script>
<style lang="less" scoped>
.main-container {
  text-align: left;
}
.display-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
img {
  width: 40%;
}
svg {
  width: 45px;
  height: 45px;
}
</style>