<template>
  <header>
    <h3>{{ header }}</h3>
    <nav>
      <router-link exact to="/" class="header-link">首页</router-link>
      <router-link to="/blog" class="header-link">插件</router-link>
      <router-link to="/other" class="header-link">其他</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
header {
  nav {
    position: absolute;
    right: 0;
    font-size: 14px;
  }
  .header-link {
    padding: 3px;
    display: inline-block;
    color: #369fff;
    &:hover {
    }
  }
  .header-link + .header-link {
    margin-left: 20px;
  }
  .router-link-active {
    border-bottom: 1px solid #369fff;
  }
}
</style>
