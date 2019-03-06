<template>
  <el-container class="css-container">
    <el-aside>
      <el-menu :default-active="getRouter(0)" class="el-menu-vertical-css">
        <el-menu-item-group title="CSS" :index="getRouter(0)">
          <el-menu-item :index="getRouter(0)">
            <router-link exact :to="getRouter(0)" class="">引言</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="布局">
          <el-menu-item :index="getRouter(1)">
            <router-link exact :to="getRouter(1)" class=""
              >垂直水平居中</router-link
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
    getRouter(index) {
      return `${routes.css.path}/${routes.css.children[index].path}`;
    }
  }
};
</script>

<style lang="less" scoped>
.css-container {
  height: calc(100vh - 160px);
  background-color: #fff;
  .el-menu-vertical-css {
    height: 100%;
  }
}
</style>
