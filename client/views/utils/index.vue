<template>
  <div class="utils-containr">
    <el-menu default-active="1">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i> <span slot="title">工具</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i> <span slot="title">组件</span>
        </template>
        <el-menu-item index="2-1"
          ><i class="el-icon-document"></i
          ><router-link to="/utils/test" class="header-link"
            >常见 CSS Loading</router-link
          ></el-menu-item
        >
      </el-submenu>
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
.utils-containr {
  display: flex;
  .el-menu {
    width: 240px;
    height: 100%;
  }
}
</style>
