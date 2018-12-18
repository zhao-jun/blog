<template>
  <div class="home-container">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix"><span>文章标题</span></div>
      <div v-for="o in 3" :key="o" class="text item">{{ '文章内容 ' + o }}</div>
    </el-card>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix"><span>文章标题</span></div>
      <div v-for="o in 3" :key="o" class="text item">{{ '文章内容 ' + o }}</div>
    </el-card>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix"><span>文章标题</span></div>
      <div v-for="o in 3" :key="o" class="text item">{{ '文章内容 ' + o }}</div>
    </el-card>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix"><span>文章标题</span></div>
      <div v-for="o in 3" :key="o" class="text item">{{ '文章内容 ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('home');

export default {
  asyncData({ store, router }) {
    return store.dispatch('home/getHomeList');
  },
  computed: {
    ...mapState(['text', 'list'])
  },
  mounted() {
    // this.getHomeList()
  },
  methods: {
    ...mapMutations(['updateText']),
    ...mapActions(['getHomeList'])
  }
};
</script>

<style lang="less" scoped>
.home-container {
  .box-card {
    margin-top: 30px;
  }
}
</style>
