<template>
  <div class="header-container">
    <h1 class="logo">Fnovatech</h1>
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

<style scoped>
.logo {
  color: var(--el-color-primary);
}
.header-container {
  width: 100%;
}
.header-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.el-menu-item {
  font-size: 20px;
  font-weight: 700;
}
</style>