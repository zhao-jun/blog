<template>
  <el-container class="css-container">
    <el-aside>
      <el-menu default-active="2" class="el-menu-vertical-css">
        <el-menu-item-group title="CSS 走廊">
          <el-menu-item index="1">
            <!-- <router-link exact :to="routes.css.children[0].path" class=""
              >引言</router-link
            > -->
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="布局">
          <el-menu-item index="1"> <a href="">垂直水平居中</a> </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-main> </el-main>
  </el-container>
</template>

<script>
// import routes from '@/config/routes';

// export default {
//   data() {
//     return {
//       routes
//     };
//   }
// };
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
