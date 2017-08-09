<template>
  <div id="app">
    <p>页面载入前显示无淡入效果的loading</p>
    <p>点击 logo 显示含有淡入过渡的效果</p>
    <p>使用方法及代码请看：<a href="https://github.com/kfw001/kfw-loading">kfw-loading</a></p>
    <img src="./assets/logo.png" @click="transitionDemo">
  </div>
</template>

<script>

  export default {
    name: 'app',
    methods: {
      showLoading() {
        console.log('Page is loading.');
        this.$kfw.open();
        // 模拟页面加载完毕
        let _this = this;
        setTimeout(function () {
          console.log('Page has loaded.');
          _this.$kfw.close();
        }, 2000)
      },
      // 过渡效果demo显示
      transitionDemo() {
        this.$kfw.open({hasTransition: true});
        let _this = this;
        setTimeout(function () {
          console.log('Page has loaded.');
          _this.$kfw.close();
        }, 2000)
      }
    },
    created() {
      this.showLoading();
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
