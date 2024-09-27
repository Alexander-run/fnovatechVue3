<template>
  <div class="main-container">
    <div class="container">
      <router-view/>
    </div>
  </div>
  <div v-if="isShowContact" class="contact-us-container">
    <h2>Contact Us</h2>
  </div>
  <div class="hover-bottom-right" @click="isShowPopUp=true">
    <img src="./assets/special-offer.png" alt="special offer icon"/>
  </div>
  <el-dialog v-model="isShowPopUp" custom-class="special-pop-up">
    <img src="./assets/special-page.png">
  </el-dialog>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const isShowPopUp = ref(false)
const route = useRoute()
const isShowContact = computed(() => {
  return route.fullPath === '/'
})
</script>
<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    max-width: 60%;
    padding: 4em;
  }
  .contact-us-container {
    background-image: url(https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2400/https://cdn.gamma.app/yi3lnaos0hbznsh/generated-images/osfzZnbX2PrCCc1Dk_RtA.png);
    background-size: 100% 100%;
    width: 100%;
    height: 500px;
    opacity: 50%;
  }
  .hover-bottom-right {
    :hover {
      cursor: pointer
    }
    img {
      width: 6rem;
    }
    position: fixed;
    right: 2rem;
    bottom: 2rem;
  }
</style>