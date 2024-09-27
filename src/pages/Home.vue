<template>
  <div>
    <h1>About F.NOVA Technology</h1>
    <div class="display-row">
      <div v-for="(item, index) in aboutArr" class="display-column margin-2em about-item">
        <svg aria-hidden="true" data-prefix="fal" data-icon="mountain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#FDC4C4" :d="item.svgPath"></path>
        </svg>
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </div>
    </div>
    <div>
      <img style="width: 45px;height:45px" src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/yi3lnaos0hbznsh/68bab3ac008c455eba83d6be6d7073a6/original/04e354ff_E829102_e3e94c3c.png" alt="Achievements" />
      <h2>Achievements</h2>
    </div>
    <div class="bar">
      <div style="text-align: left">Unlock the power of renewable energy and save on your electricity bills with our cutting-edge solar solutions.</div>
      <div class="btn-group-left">
        <el-button type="primary" color="#FDC4C4">Learn More</el-button>
        <el-button plain color="#FDC4C4">Get a Quote</el-button>
      </div>
    </div>
    <div class="menu-group">
      <h2 v-for="(item, index) in menuItems" :id="item.id" @click="handleRoute(item.id)">{{ item.label }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const aboutArr = [
  {
    svgPath: 'M503.2 393.8 280.1 44.25C274.9 36.08 265.4 32 256 32c-9.4 0-18.9 4.08-24.1 12.25L8.807 393.8a55.906 55.906 0 0 0-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77 10.01-18.03 9.41-40.03-1.69-57.43zM256 66.01 346.6 208H256a16.003 16.003 0 0 0-12.8 6.406L208 261.3l-35.2-46.9c-2-2.7-5-4.3-8.1-5.3L256 66.01zM476.9 435.6c-4.2 7.6-12.4 12.4-21.2 12.4H56.31c-8.826 0-16.97-4.752-21.25-12.39-4.31-7.71-4.04-17.11.72-24.61L144.9 240h7.1l43.2 57.59c3 4.01 6.9 6.41 12.8 6.41s9.781-2.375 12.8-6.406L264 240h103.1l109.2 171c3.8 7.5 5 16.9.6 24.6z',
    title: 'Company Introduction',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    svgPath: 'M288 128H160c-35.2 0-64 28.8-64 64v16c0 61.8 50.2 112 112 112h32c61.75 0 112-50.25 112-112v-16c0-35.2-28.8-64-64-64zm32 80c0 44.1-35.9 80-80 80h-32c-44.1 0-80-35.9-80-80v-16c0-17.62 14.25-32 32-32h128c17.75 0 32 14.38 32 32v16zm-16 192H144c-26.5 0-48 21.5-48 48v48c0 8.8 7.2 16 15.1 16 9.7 0 16.9-7.2 16.9-16v-48c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-15.1V448c0-26.5-21.5-48-48-48zm-32 48c-8.75 0-16 7.25-16 16s7.25 16 16 16 16-7.25 16-16-7.2-16-16-16zm-96 0c-8.7 0-16 7.2-16 16v32c0 8.8 7.2 16 15.1 16 9.7 0 16.9-7.2 16.9-16v-32c0-8.8-7.2-16-16-16zm183.2-119.8c20.3-20 35.9-44.7 45.6-72.2H416c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-11.25C378.5 53.5 307.6 0 224 0S69.5 53.5 43.25 128H32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h11.25c9.625 27.5 25.38 52.25 45.63 72.25C37.13 347 0 396.2 0 454.4v41.63C0 504.8 7.2 512 15.1 512S32 504.8 32 496v-41.63c0-51.62 38.5-94 88.25-101C150.2 372.8 185.8 384 224 384s73.75-11.25 103.8-30.62C377.5 360.2 416 402.8 416 454.4v41.63c0 8.77 7.2 15.97 16 15.97s16-7.2 16-15.1v-41.63c0-59.07-37.1-108.27-88.8-127.07zM224 352c-88.25 0-160-71.75-160-160S135.75 32 224 32s160 71.75 160 160-71.8 160-160 160z',
    title: 'Team Quality',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim'
  },
  {
    svgPath: 'M300.9 32.58c-1.1 1.06-2.3 2.15-3.4 3.26C284.1 33.32 270.2 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224c0-14.2-1.3-28.1-3.8-41.5 1.1-1.1 2.2-2.3 3.2-3.4l22.8-25.4c6.4 22.3 9.8 45.9 9.8 70.3 0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0c24.4 0 47.1 3.406 70.3 9.768L300.9 32.58zm-25.4 72.62 4.2 25c-7.7-1.4-15.6-3.1-24.6-3.1-69.8 0-128 58.2-128 128 0 71.6 58.2 128.9 128 128.9 71.6 0 128.9-57.3 128.9-128.9 0-7.2-.8-16-2.2-22.8l25 4.2c2.7.4 5.4.7 8.1.9.7 6.1 1.1 12.3 1.1 17.7 0 89.3-71.6 160.9-160 160.9S96 344.4 96 255.1c0-87.5 71.6-160 160-160 6.3 0 12.5 1.26 18.6 1.97.2 2.71.5 5.43.9 8.13zm66 87.9-74.2 74.2c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l74.2-74.2-11.8-70.4c-2.7-16.31 3.1-32.84 15.5-43.8l48.5-43.93c14-11.652 34.8-5.759 39.8 11.05l17.9 59.73 59.8 17.95c16.8 5 22.7 25.8 11 38.9l-43.9 49.4c-11 12.4-27.5 18.2-43.8 15.5l-70.4-11.8zm27.8-27.8 47.9 8c5.4.9 10.9-1 14.6-5.1l35.6-40.1-46.8-14-51.3 51.2zm28.6-73.86-14-46.82-40.1 35.6c-4.1 3.65-6 9.16-5.1 14.58l8 47.9 51.2-51.26z',
    title: 'Goal',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusa ntium eius modi tempora'
  },
  {
    svgPath: 'M56.88 224h-7.91c-8.87 0-15.42 5.4-16.74 13.3C30.55 247.3 38.3 256 48 256h16.01L64 284.5c-.063 16.62-1.307 33.16-3.266 49.62C59.6 343.6 67.06 352 76.65 352c8.205 0 15.02-6.195 15.97-14.35C94.69 320 96 302.3 96 284.5V256h64v28.5c0 17.82 1.312 35.53 3.377 53.15C164.3 345.8 171.1 352 179.3 352c9.592 0 17.05-8.355 15.92-17.88-1.92-16.42-3.12-33.02-3.22-49.62V256h15.02c7.979 0 15.42-5.4 16.74-13.27C225.4 232.7 217.7 224 208 224h-8.882l31.75-84.75c5.197-13.69.549-29.54-12.61-38.22C212.1 97.53 206.6 96 200.2 96h-56.23V64h15.02c7.979 0 15.42-5.4 16.74-13.27C177.4 40.74 169.7 32 160 32h-16V16.97c0-7.979-5.4-15.42-13.27-16.74C120.7-1.449 112 6.303 112 16v16H96.86c-7.98 0-15.31 5.4-16.63 13.26C78.55 55.26 86.31 64 96.01 64h16v32H55.77c-6.35 0-12.74 1.53-18.04 5-13.16 8.689-17.81 24.54-12.61 38.22L56.88 224zM201 128l-36 96H91.13l-36-96H201zm41.6 300.4-18.6-9.3V408c0-13.23-10.77-24-24-24H56c-13.23 0-24 10.8-24 24v11.06l-18.58 9.344C5.266 432.3 0 440.7 0 449.9V488c0 13.2 10.77 24 24 24h208c13.23 0 24-10.77 24-24v-38.13c0-9.07-5.2-17.57-13.4-21.47zM224 480H32v-25.12l32-16.09V416h128v22.79l32 16.09V480z',
    title: 'Why Us',
    content: 'Foste natus error sit volupta tem accusa ntium eius modi tempora'
  }  
]
const menuItems = [
  {
    id: 'how',
    label: 'How Solar System Save Your Bill'
  },{
    id: 'size',
    label: 'Sizing Your Solar System'
  },{
    id: 'welcome',
    label: 'Welcome to F.NOVA Solar Mall'
  },{
    id: 'install',
    label: 'Installation and Maintenance'
  },{
    id: 'customer',
    label: 'Customer Testimonials'
  },{
    id: 'finance',
    label: 'Flexible Financing Options'
  },
]
const router = useRouter()
const handleRoute = (id) => {
  router.push('/'+id)
}

</script>
<style lang="less" scoped>
:deep(.el-button) {
  width: 10rem;
  height: 3rem;
  font-size: 1.25rem;
}
.about-item {
  svg {
    width: 45px;
    height: 45px;
  }
}
.display-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.margin-2em {
  margin: 1em;
}
.display-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.bar {
  margin: 2em 0;
  .btn-group-left {
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    button {
      margin-right: 20px;
    }
  }
}
.menu-group {
  width: 100%;
  h2 {
    width: 100%;
    text-decoration: underline;
  }
  h2:hover {
    cursor: pointer;
  }
  :nth-child(odd) {
    text-align: left;
  }
  :nth-child(even) {
    text-align: right;
  }
}
</style>