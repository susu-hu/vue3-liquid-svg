<script setup>
// 本地
// import LiquidSvg from "./package/LiquidSvg/index.vue";
// npm
import { LiquidSvg } from "liquid-svg";
import "liquid-svg/style.css";
</script>

<template>
  <div class="flex-row">
    <LiquidSvg :data="50" :width="300" theme="blue" />
    <LiquidSvg :data="50" :width="300" theme="green" />
    <LiquidSvg :data="50" :width="300" theme="yellow" />
  </div>
</template>
<style>
#app {
  width: 100%;
}
</style>
<style scoped lang="less">
.flex-row {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
