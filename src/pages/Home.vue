<template>
  <div class="home-container">
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
      <el-row>
        <el-col :span="10">
          <h2>Our Customers say:</h2>
        </el-col>
        <el-col :span="10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/X8aMjjKLv2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </el-col>
      </el-row>
      <el-row class="center-flex">
        <h2>Main Panels We Install</h2>
        <div class="img-group">
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Canadian" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Canadian Solar/Canadian_Solar-Datasheet-HiKu_CS3L-MS_BF_v5.59_AU.pdf"><p>HiKu_CS3L</p></a>
              <a target="_blank" href="/static/Panels/Canadian Solar/Canadian_Solar-Datasheet-KuPower_CS3K-MS_EN.pdf"><p>KuPower_CS3K</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Jinko" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Jinko/JKM350-370M-66HB-A1-EN-ForAUSCEC-1.pdf"><p>JKM350-370M</p></a>
              <a target="_blank" href="/static/Panels/Jinko/CheetahPerc-JKM310-330M-60-V-A2-EN.pdf"><p>JKM310-330M</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Longi" /></template>
            <div>
              <a target="_blank" href="/static//Panels/Longi/longi_lr6_72hph_365_385w_v09__ds.pdf"><p>longi_lr6_72hph</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Qcell" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Qcell/Hanwha_Q_CELLS_Data_sheet_QPLUS_L-G4.2_340-350_2018-03_Rev01_AU.pdf"><p>QPLUS_L-G4.2</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Risen" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Risen/RSM144-6-370-390M-IEC26UL1500V-40mm-2019H1-3-EN.pdf"><p>RSM144-6</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Seraphim" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Seraphim/SRP-(370-385)-BMA_EN.pdf"><p>BMA</p></a>
              <a target="_blank" href="/static/Panels/Seraphim/SRP-(320-335)-BMB_158.75_EN_2019V2.0.pdf"><p>BMB</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Suntech" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Suntech/AU_HyPro_STP370S_VfhMC4_370_365_360_2G_1000V.pdf"><p>STP370S_VfhMC4</p></a>
              <a target="_blank" href="/static/Panels/Suntech/HyPro_STP330S_21_WfhmMC4_330_325_320_2G_1000V.pdf"><p>STP330S_21_WfhmMC4</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt='' :src="Trina" /></template>
            <div>
              <a target="_blank" href="/static/Panels/Trina/Trina Splitmax 365_370w 03 PS-M-0531 B Datasheet SPLITMAX_144_Mono Perc.pdf"><p>370W</p></a>
              <a target="_blank" href="/static/Panels/Trina/Trina-330W-Panel-Brochure.pdf"><p>330W</p></a>
            </div>
          </el-popover>
        </div>
      </el-row>
      <el-row class="center-flex">
        <h2>Main Inverter We Install</h2>
        <div class="img-group">
          <el-popover trigger="hover">
            <template #reference><img alt="" :src="Fronius" /></template>
            <div>
              <a target="_blank" href="/static/Inverter/Fronius/SE_DS_Fronius_Primo_UL_EN_CA.pdf"><p>Fronius Primo</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt="" :src="Growatt" /></template>
            <div>
              <a target="_blank" href="/static/Inverter/Growatt/growatt-2.5-6kw-TL-X.pdf"><p>2500~6000TL-X</p></a>
              <a target="_blank" href="/static/Inverter/Growatt/growatt-3p-10kw.pdf"><p>10000~15000TL3-S</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt="" :src="SMA" /></template>
            <div>
              <a target="_blank" href="/static/Inverter/SMA/SB30-50-DEN1708-V22web.pdf"><p>Sunny Boy</p></a>
              <a target="_blank" href="/static/Inverter/SMA/Sunny_Tripower_8000-17000TL_Datasheet.pdf"><p>Sunny Tripower</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt="" :src="Solax" /></template>
            <div>
              <a target="_blank" href="/static/Inverter/Solax/X1-Smart-Technical-Datasheet solax.pdf"><p>X1-Smart</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt="" :src="Solis" /></template>
            <div>
              <a target="_blank" href="/static/Inverter/Solis/solis.pdf"><p>3P-4G (new)</p></a>
              <a target="_blank" href="/static/Inverter/Solis/Solis_datasheet_3P5-20kW_4G_AUS-compressed071019.pdf"><p>3P-4G</p></a>
            </div>
          </el-popover>
          <el-popover trigger="hover">
            <template #reference><img alt="" :src="Sungrow" /></template>
            <div>
              <a target="_blank" href="/static/Inverter/Sungrow/SG10KTL-MT_datasheet.pdf"><p>SG10KTL-MT</p></a>
              <a target="_blank" href="/static/Inverter/Sungrow/Sungrow-SG5KTL-MT-Three-Phase-Gen-2-Inverter.pdf"><p>SG RT series</p></a>
            </div>
          </el-popover>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Canadian from '../assets/Panels/Canadian Solar/logo.png'
import Jinko from '../assets/Panels/Jinko/logo.png'
import Longi from '../assets/Panels/Longi/logo.png'
import Qcell from '../assets/Panels/Qcell/logo.png'
import Risen from '../assets/Panels/Risen/logo.png'
import Seraphim from '../assets/Panels/Seraphim/logo.png'
import Suntech from '../assets/Panels/Suntech/logo.png'
import Trina from '../assets/Panels/Trina/logo.png'

import Fronius from '../assets/Inverter/Fronius/logo.png'
import Growatt from '../assets/Inverter/Growatt/logo.png'
import SMA from '../assets/Inverter/SMA/logo.png'
import Solax from '../assets/Inverter/Solax/logo.png'
import Solis from '../assets/Inverter/Solis/logo.png'
import Sungrow from '../assets/Inverter/Sungrow/logo.png'

const router = useRouter()

const handleRoute = (path) => {
  router.push({path})
}
</script>
<style lang="less" scoped>
.center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    width: 100%;
    background:lightblue;
    color: white;
  }
}
.img-group {
  img {
    width: 200px;
    height: 80px;
    margin: 12px;
  }
}
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
  margin: 20px 0;
}
.choice-block-item {
  
}
</style>