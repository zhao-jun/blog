<template>
  <el-card class="search-container" shadow="hover">
    <div slot="header">搜索</div>
    <div class="search">
      <i class="el-icon-search search-icon" @click="search"></i>
      <input
        class="search-input"
        type="text"
        ref="input"
        placeholder="搜索标题或摘要"
        @keyup.enter="search"
      />
    </div>
    <p>
      微信公众号：
      <!-- <span class="wechat" @click="chose">阿夸漫谈</span> -->
      <el-popover
        popper-class="qr-popper"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <img src="../../assets/images/qrcode.jpg" class="qr-img" alt="qr" />
        <span class="wechat" slot="reference">阿夸漫谈</span>
      </el-popover>
    </p>
  </el-card>
</template>

<script>
export default {
  methods: {
    search(e) {
      let keyword = this.$refs.input.value;
      this.$store.dispatch('blog/list/getBlogList', {
        keyword
      });
    }
  }
};
</script>

<style lang="less">
.search-container {
  width: 250px;
  height: 140px;
  font-size: 14px;
  cursor: default;
  // 卡片头部
  .el-card__header {
    font-weight: bold;
    padding: 10px 0;
    text-indent: 1em;
  }
  .search {
    position: relative;
    height: 36px;
  }
  .search-icon {
    cursor: pointer;
  }
  .el-icon-search {
    position: absolute;
    font-size: 14px;
    left: 10px;
    top: 11px;
    color: #c0c4cc;
    z-index: 100;
  }
  .search-input {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    font-size: 13px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    height: 36px;
    line-height: 36px;
    outline: 0;
    padding: 0 15px 0 30px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &::placeholder {
      color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
      outline: 0;
    }
  }
  .wechat {
    // color: rgba(245, 137, 7);
    cursor: pointer;
    color: #409eff;
  }
}
.qr-popper {
  padding: 0;
  .qr-img {
    width: 200px;
    height: 200px;
  }
}
</style>
