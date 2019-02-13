<template>
  <transition name="back-top">
    <div
      class="back-top-container"
      @click="handleBackTop"
      v-show="scrollTop > 100"
    >
      <i class="el-icon-caret-top back-top-icon"></i>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling);
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
    if (this.scrollTime) clearTimeout(this.scrollTime);
    window.removeEventListener('scroll', this.scrolling);
  },
  methods: {
    scrolling() {
      if (this.scrollTime) clearTimeout(this.scrollTime);
      this.scrollTime = setTimeout(() => {
        this.scrollTop = Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
      }, 100);
    },
    handleBackTop() {
      let top = this.scrollTop;
      this.timer = setInterval(() => {
        top -= Math.abs(top * 0.1);
        if (top <= 1) {
          top = 0;
          clearInterval(this.timer);
        }
        window.scrollTo(0, top);
      }, 20);
    }
  }
};
</script>

<style lang="less" scoped>
.back-top-container {
  transition: all 0.3s ease;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
  .back-top-icon {
    color: rgb(84, 92, 100);
    display: block;
    line-height: 35px;
    text-align: center;
    font-size: 18px;
  }
}
.back-top-enter-active {
  animation: back-top-in 0.5s;
}
.back-top-leave-active {
  animation: back-top-in 0.5s reverse;
}
@keyframes back-top-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
