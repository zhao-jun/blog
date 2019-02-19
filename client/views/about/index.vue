<template>
  <div class="about-container">
    <div class="about-content">
      <h3>联系方式</h3>
      <p class="">
        Github:
        <a href="https://github.com/zhao-jun" target="_blank"
          >https://github.com/zhao-jun</a
        >
      </p>
      <p>Email: <a href="mailto:j_z@foxmail.com">j_z@foxmail.com</a></p>
      <h3>关于网站</h3>
      <p>客户端采用 Vue2 的服务端渲染搭建</p>
      <p>服务端采用 Koa2 + Mysql 搭建</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/default';

.about-container {
  position: relative;
  background-color: #fff;
  margin-bottom: 40px;
  .about-content {
    width: 1030px;
    padding: 40px;
    box-sizing: border-box;
  }
  // .about-content:before {
  //   content: '';
  //   position: absolute;
  //   left: 30px;
  //   top: 30px;
  //   right: 30px;
  //   bottom: 30px;
  //   border: 1px solid #999;
  //   transform: scale(1.1);
  //   opacity: 0;
  //   transition: all 1s;
  // }
  &:hover {
    .about-content:before {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
