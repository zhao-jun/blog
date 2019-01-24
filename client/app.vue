<template>
  <div class="home">
    <com-header />
    <div class="center">
      <router-view class="content" />
      <!-- <div class="sidebar"><com-wxqr /></div> -->
    </div>
    <com-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .center {
    // https://segmentfault.com/q/1010000016433717
    // flex: 1;
    min-height: calc(100vh - 160px);
    box-sizing: border-box;
    display: flex;
    padding-top: 30px;
    justify-content: center;
  }
  // .content {
  //   width: 72%;
  // }
  // .sidebar {
  //   width: 28%;
  // }
}
</style>
