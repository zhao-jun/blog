<template>
  <div class="test-containr">
    <el-menu
      default-active="1"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-menu-item index="1">工具</el-menu-item>
      <el-menu-item index="2"
        ><router-link to="/utils/test" class="header-link"
          >组件</router-link
        ></el-menu-item
      >
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect() {}
  }
};
</script>

<style lang="less" scoped>
.test-containr {
  width: 100vw;
}
</style>
