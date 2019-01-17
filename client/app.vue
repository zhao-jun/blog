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
    flex: 1;
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
