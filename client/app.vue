<template>
  <div class="home">
    <com-header />
    <router-view class="content" />
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 800px;
  margin: 0 auto;
  .content {
    flex: 1;
  }
}
</style>
