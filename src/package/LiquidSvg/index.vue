<template>
  <div class="liquid-box" :style="{ '--w': width }" :theme="`theme-${theme}`">
    <div class="liquid-box-inner">
      <div class="inner" v-show="data" :style="`--per: ${data}%`">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 600 140"
          class="liquid-box-waves"
        >
          <path
            d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 600 140"
          class="liquid-box-waves"
        >
          <path
            d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 600 140"
          class="liquid-box-waves"
        >
          <path
            d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup name="LiquidSvg">
defineProps({
  // 百分比
  data: {
    type: Number,
    default: 0,
  },
  // 宽度
  width: {
    type: Number,
    default: 100,
  },
  // 主题色-支持三种 blue green yellow,默认蓝色
  theme: {
    type: String,
    default: "blue",
  },
});
</script>
<style lang="less" scoped>
@import url("./style/index.less");
</style>
