<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="3"
        ><router-link to="/other" class="header-link"
          >其他</router-link
        ></el-menu-item
      >
      <el-menu-item index="2"
        ><router-link to="/plugin" class="header-link"
          >插件</router-link
        ></el-menu-item
      >
      <el-menu-item index="1"
        ><router-link exact to="/home" class="header-link"
          >首页</router-link
        ></el-menu-item
      >
    </el-menu>
  </header>
</template>

<script>
// import { menu } from 'element-ui';
export default {
  // components() {
  //   menu;
  // },
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
header {
  .el-menu {
    padding-right: 30px;
  }
  .el-menu-item {
    float: right;
    padding: 0;
  }
  .header-link {
    display: inline-block;
    padding: 0 20px;
  }
}
</style>
