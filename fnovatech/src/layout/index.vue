<template>
  <div>
    <div>layout</div>
    <header></header>
    <router-view />
  </div>
</template>

<script >
import Header from './Header.vue'
export default {
  component: {
    Header
  }
}
</script>