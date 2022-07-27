<template>
  <div class="header-container">
    <div>Fnovatech</div>
    <el-menu
      class="header-menu"
      default-active="/"
      mode="horizontal"
      router
    >
      <el-menu-item 
        class="header-menu-item"
        v-for="item in MENU_CONFIG" 
        :key="item.label" 
        :index="item.path"
      >
        {{item.label}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { MENU_CONFIG } from '../lib/configs'
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  .header-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>