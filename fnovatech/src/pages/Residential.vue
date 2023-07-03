<template>
  <div class='residential'>
    <el-row>
      <h1>Tell us your seasonal Electric Charge</h1>
    </el-row>      
    <el-row>
      <el-input-number v-model="elCharge" :min="0" :max="1200" label="upper than $1200 may be applied for commercial plan" :precision="2" :step="1" controls-position="right"/>
      <el-button @click="onDisplayPlan">See your plan</el-button>
    </el-row>         
    <el-row v-if="displayOpts && displayOpts.length>0">
      <div v-for="(item, index) in displayOpts" :key="index" class='residential_opt'>
        <h3>{{item.panelCount * item.unitPower / 1000}} kW 
        ({{item.panelCount}} x {{item.unitPower}} W)</h3>
        <p>with {{item.inverterPower}} kW inverter</p>
        <p>All panels with your chosen!</p>
        <el-button @click="direct('/contact')">
            <Button type='primary'>Start your solar life now!</Button>
        </el-button>
      </div>
    </el-row>
  </div>  
</template>

<script setup>
import { ref } from 'vue'

const residentialOpts = [
  {panelCount:18,unitPower:370,inverterPower:5},
  {panelCount:20,unitPower:330,inverterPower:5},
  {panelCount:36,unitPower:370,inverterPower:10},
  {panelCount:40,unitPower:330,inverterPower:10},
  {panelCount:54,unitPower:370,inverterPower:15},
  {panelCount:60,unitPower:330,inverterPower:15},
  {panelCount:108,unitPower:370,inverterPower:30},
  {panelCount:121,unitPower:330,inverterPower:30},
  {}
]

const elCharge = ref(0)
const displayOpts = ref([])
const onDisplayPlan = () => {
  let fee= elCharge;
  let feeRange = [300,600,900];
  let index=0;
  while(fee > feeRange[index]){
      index++;
  }
  displayOpts.value = residentialOpts.slice(2*index,2*index+2)
}
const direct = (key) => () => {
  router.push(key)
}

</script>