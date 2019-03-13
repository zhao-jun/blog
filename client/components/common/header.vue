<template>
  <header>
    <!-- router -->
    <h1 class="logo">
      <router-link class="logo-title" :to="routes.home.path"
        >阿夸漫谈</router-link
      >
    </h1>
    <!-- @select="handleSelect" -->
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item :index="routes.home.path"
        ><router-link exact :to="routes.home.path" class="header-link"
          >首页</router-link
        ></el-menu-item
      >
      <!-- <el-submenu index="2" :show-timeout="0" popper-class="header-el-submenu">
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
      </el-submenu> -->
      <!-- CSS 部分暂时隐藏，写的时候再打开 -->
      <!-- <el-menu-item :index="routes.css.path"
        ><router-link :to="routes.css.path" class="header-link"
          >CSS</router-link
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
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
//   'blog/list'
// );

export default {
  data() {
    return {
      activeIndex: this.$route.path.match(/\/\w*/)[0], // TODO
      routes
    };
  }
  // methods: {
  //   ...mapActions(['getBlogList']),
  //   handleSelect(key, keyPath) {
  //     // 移至 beforeRouteEnter
  //     // document.title = this.$route.meta.title;
  //     if (this.$route.meta.category)
  //       return this.getBlogList({ category: this.$route.meta.category });
  //     this.getBlogList();
  //   }
  // }
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
    width: 150px;
    // 图片字体为站酷高端黑，暂时不用
    // text-indent: -100rem;
    // background: url('../../assets/images/logo.png') no-repeat 40px center;
    background-size: 180px;
  }
  .logo-title {
    display: block;
    color: #fff;
    font-family: '宋体', '黑体', 'Helvetica Neue', Helvetica, STHeiTi,
      sans-serif;
  }
  .logo-title:hover {
    animation: shadow 1.5s ease-in-out infinite alternate;
  }

  @keyframes shadow {
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #545c64,
        0 0 70px #545c64, 0 0 80px #545c64, 0 0 100px #545c64, 0 0 150px #545c64;
    }
    from {
      filter: brightness(110%);
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #545c64,
        0 0 35px #545c64, 0 0 40px #545c64, 0 0 50px #545c64, 0 0 75px #545c64;
    }
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
