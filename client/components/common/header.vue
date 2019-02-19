<template>
  <header>
    <!-- router -->
    <h1 class="logo">
      <router-link class="logo-title" :to="routes.home.path"
        >阿夸漫谈</router-link
      >
    </h1>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item :index="routes.home.path"
        ><router-link exact :to="routes.home.path" class="header-link"
          >首页</router-link
        ></el-menu-item
      >
      <el-submenu index="2" show-timeout="0" popper-class="header-el-submenu">
        <template slot="title"
          >分类</template
        >
        <el-menu-item :index="routes.fe.path"
          ><router-link :to="routes.fe.path" class="category-link"
            >前端</router-link
          ></el-menu-item
        >
        <el-menu-item :index="routes.nodejs.path"
          ><router-link :to="routes.nodejs.path" class="category-link"
            >Node.js</router-link
          ></el-menu-item
        >
        <el-menu-item :index="routes.other.path"
          ><router-link :to="routes.other.path" class="category-link"
            >其他</router-link
          ></el-menu-item
        >
      </el-submenu>
      <!-- <el-menu-item :index="routes.fe.path"
        ><router-link :to="routes.fe.path" class="header-link"
          >前端</router-link
        ></el-menu-item
      > -->
      <!-- <el-menu-item :index="routes.nodejs.path"
        ><router-link :to="routes.nodejs.path" class="header-link"
          >Node.js</router-link
        ></el-menu-item
      > -->
      <!-- <el-menu-item :index="routes.other.path"
        ><router-link :to="routes.other.path" class="header-link"
          >其他</router-link
        ></el-menu-item
      > -->
      <!-- <el-menu-item :index="routes.utils.path"
        ><router-link :to="routes.utils.path" class="header-link"
          >工具</router-link
        ></el-menu-item
      > -->
      <el-menu-item :index="routes.about.path"
        ><router-link :to="routes.about.path" class="header-link"
          >关于</router-link
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
      // 移至 beforeRouteEnter
      // document.title = this.$route.meta.title;
      if (this.$route.meta.category)
        return this.getBlogList({ category: this.$route.meta.category });
      this.getBlogList();
    }
  }
};
</script>

<style lang="less">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(84, 92, 100);
  box-sizing: border-box;
  height: 60px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding-left: 40px;
    margin: 0;
    height: 60px;
    line-height: 60px;
    text-indent: -100rem;
    width: 170px;
    background: url('../../assets/images/logo.png') no-repeat 40px center;
    background-size: 180px;
  }
  .logo-title {
    display: block;
  }
  .el-menu {
    padding-right: 30px;
    height: 60px;
  }
  .el-menu-item {
    padding: 0;
  }
  .header-link {
    display: inline-block;
    padding: 0 20px;
  }
}
.header-el-submenu {
  /**
    * 头部 submenu
    * 是否存在间隙
    * a 标签大小
    */
  .el-menu--popup-bottom-start {
    margin-top: 0;
  }
  .category-link {
    display: block;
    color: inherit;
  }
}
</style>
