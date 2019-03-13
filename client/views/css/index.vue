<template>
  <el-container class="css-container">
    <el-aside>
      <el-menu class="el-menu-vertical-css">
        <el-menu-item-group title="CSS">
          <el-menu-item>
            <router-link exact :to="getRouter('')" class="css-link"
              >引言</router-link
            >
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="布局">
          <el-menu-item>
            <router-link exact :to="getRouter('centering')" class="css-link"
              >垂直水平居中</router-link
            >
          </el-menu-item>
          <el-menu-item>
            <router-link exact :to="getRouter('waterfall')" class="css-link"
              >瀑布流布局</router-link
            >
          </el-menu-item>
          <el-menu-item>
            <router-link exact :to="getRouter('waterfall')" class="css-link"
              >三列布局</router-link
            >
          </el-menu-item>
          <el-menu-item>
            <router-link exact :to="getRouter('waterfall')" class="css-link"
              >转盘</router-link
            >
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="其他">
          <el-menu-item>
            <router-link exact :to="getRouter('anchor')" class="css-link"
              >锚点置顶</router-link
            >
          </el-menu-item>
          <el-menu-item>
            <router-link exact :to="getRouter('centering')" class="css-link"
              >滚动条遮住</router-link
            >
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-main> <router-view></router-view> </el-main>
  </el-container>
</template>

<script>
import routes from '../../config/routes';

export default {
  data() {
    return {
      routes
    };
  },
  methods: {
    getRouter(path) {
      return `${routes.css.path}/${path}`;
    }
  }
};
</script>

<style lang="less">
.css-container {
  height: calc(100vh - 160px);
  background-color: #fff;
  .el-menu-vertical-css {
    height: 100%;
  }
  // 一级菜单
  .el-menu-item-group__title {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    font-weight: 600;
    color: #3e3e3e;
  }
  // 二级菜单
  .el-menu-item {
    height: 30px;
    line-height: 30px;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    outline: 0;
    background-color: #fff;
  }
  .css-link {
    color: #6f6f6f;
    display: block;
  }
  .css-link.router-link-active {
    color: #409eff;
    // color: rgb(255, 208, 75);
  }
  .css-link:hover {
    color: #409eff;
    // color: rgb(255, 208, 75);
  }
}
</style>
