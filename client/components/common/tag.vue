<template>
  <el-card class="tag-container" shadow="hover">
    <div slot="header">标签</div>
    <el-tag
      :type="item.closableinfo || 'info'"
      v-for="(item, index) in category"
      :key="index"
      :closable="item.closable"
      @click.native="chose(index)"
      @close="close(index)"
      >{{ item.name }}</el-tag
    >
  </el-card>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    chose(index) {
      // 已经选中
      if (this.category[index].closable) return;
      let newCategory = [...this.category];
      // 修改 tag 样式
      newCategory[index].closable = true;
      newCategory[index].closableinfo = ' ';
      // 获取选中 id
      let idArr = this.category.reduce(function(res, cur) {
        if (cur.closable) res.push(cur.id);
        return res;
      }, []);
      this.$emit('choseCategory', idArr, newCategory);
    },
    close(index) {
      let newCategory = [...this.category];
      // 修改 tag 样式
      newCategory[index].closable = false;
      newCategory[index].closableinfo = 'info';
      // 获取选中 id
      let idArr = this.category.reduce(function(res, cur) {
        if (cur.closable) res.push(cur.id);
        return res;
      }, []);
      this.$emit('choseCategory', idArr, newCategory);
    }
  }
};
</script>

<style lang="less">
.tag-container {
  width: 250px;
  // height: 140px;
  font-size: 14px;
  cursor: default;
  // 卡片头部
  .el-card__header {
    font-weight: bold;
    padding: 10px 0;
    text-indent: 1em;
  }
  // tag
  .el-tag {
    margin: 6px 4px;
    cursor: pointer;
  }
}
</style>
