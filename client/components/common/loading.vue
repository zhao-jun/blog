<template>
  <div class="loading-container">
    <div class="rect rect1"></div>
    <div class="rect rect2"></div>
    <div class="rect rect3"></div>
    <div class="rect rect4"></div>
    <div class="rect rect5"></div>
  </div>
</template>

<style lang="less" scoped>
.loading-container {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  margin: 150px auto;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
  .rect {
    background-color: #409eff;
    width: 6px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
}

@keyframes stretchdelay {
  /*五等分*/
  0%,
  40%,
  100% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(2.5);
  }
}
</style>
