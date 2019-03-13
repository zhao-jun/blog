<template>
  <div class="about-container">
    <div class="about-content">
      <h3>联系方式</h3>
      <p>
        <span class="content-item">Email: </span
        ><a href="mailto:j_z@foxmail.com">j_z@foxmail.com</a>
      </p>
      <p><a href="https://github.com/zhao-jun" target="_blank">Github</a></p>
      <h3>关于网站</h3>
      <p class="content-item">
        采用前后端分离、服务器和客户端同构渲染的方式搭建
      </p>
      <p class="content-item">
        客户端采用 vue2 + vuex3 + vue-router3 + webpack4
      </p>
      <p class="content-item">服务端采用 koa2 + sequelize + mysql</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/default';

.about-container {
  position: relative;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 40px;
  .about-content {
    width: 1030px;
    padding: 40px;
    box-sizing: border-box;
  }
  .content-item {
    color: #6f6f6f;
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
