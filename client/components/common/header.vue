<template>
  <header>
    <!-- router -->
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-menu-item :index="routes.utils.path"
        ><router-link :to="routes.utils.path" class="header-link"
          >工具</router-link
        ></el-menu-item
      > -->
      <el-menu-item :index="routes.other.path"
        ><router-link :to="routes.other.path" class="header-link"
          >其他</router-link
        ></el-menu-item
      >
      <el-menu-item :index="routes.nodejs.path"
        ><router-link :to="routes.nodejs.path" class="header-link"
          >Node.js</router-link
        ></el-menu-item
      >
      <el-menu-item :index="routes.fe.path"
        ><router-link :to="routes.fe.path" class="header-link"
          >前端</router-link
        ></el-menu-item
      >
      <el-menu-item :index="routes.home.path"
        ><router-link exact :to="routes.home.path" class="header-link"
          >首页</router-link
        ></el-menu-item
      >
    </el-menu>
  </header>
</template>

<script>
import routes from '@/config/routes';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  'blog/list'
);

export default {
  data() {
    return {
      activeIndex: this.$route.path, // TODO
      routes
    };
  },
  methods: {
    ...mapActions(['getBlogList']),
    handleSelect(key, keyPath) {
      if (this.$route.meta.category)
        return this.getBlogList({ category: this.$route.meta.category });
      this.getBlogList();
    }
  }
};
</script>

<style lang="less" scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
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
