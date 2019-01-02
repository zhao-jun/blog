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
      <el-menu-item index="5"
        ><router-link to="/plugin" class="header-link"
          >工具</router-link
        ></el-menu-item
      >
      <el-menu-item index="4"
        ><router-link to="/other" class="header-link"
          >其他</router-link
        ></el-menu-item
      >
      <el-menu-item index="3"
        ><router-link to="/plugin" class="header-link"
          >Node</router-link
        ></el-menu-item
      >
      <el-menu-item index="2"
        ><router-link to="/plugin" class="header-link"
          >前端</router-link
        ></el-menu-item
      >
      <el-menu-item index="1"
        ><router-link exact :to="routes.home.path" class="header-link"
          >首页</router-link
        ></el-menu-item
      >
    </el-menu>
  </header>
</template>

<script>
import routes from '@/config/routes';
export default {
  data() {
    return {
      activeIndex: '1', // TODO
      routes
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // TODO
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
