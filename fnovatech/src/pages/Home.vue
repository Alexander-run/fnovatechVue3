<template>
  <el-main class="home-container">
    <div class="welcome-page">
      <h2>Find your future energy</h2>
      <el-button 
        round
        size="large"
        type="primary"
        @click="handleRoute('/contact')"
      >Contact Us</el-button>
    </div>
    <div class="choice-block-container">
      <h2>On Your Choice</h2>
      <el-row class="choice-block">
        <el-col :span="10">
          <div class="choice-block-item">
            <h3>Residential Solar</h3>
            <p>Help you make your bill 0, using Tier 1 panels and CEC approved inverter</p>
            <p>With multiple choices from 6.66 kW to 40 kW</p>
            <el-button type="primary">Learn More</el-button>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="choice-block-item">
            <h3>Commercial Solar</h3>
            <p>If you’re running a large warehouse, an office complex, or something else entirely a 50KW solar power system is big enough to meet the demands of most medium-large commercial operations across Australia.</p>
            <el-button type="primary">Learn More</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const handleRoute = (path) => {
  router.push({path})
}
</script>
<style scoped>
.home-container {
  width: 100%;
}
.welcome-page {
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../assets/homeBack.jpg') no-repeat center;
  background-size: cover;
}
.welcome-page h2 {
  color: antiquewhite;
}
.choice-block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.choice-block-item {
  
}
</style>