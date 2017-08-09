<template>
  <transition name="loading">
    <div :class="['kfw-loading', hasTransition ? 'transition' : '']" v-show="visible">
      <p class="kfw-text">页面加载中，请稍候...</p>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        hasTransition: false
      };
    }
  }
</script>

<style scoped>
  .kfw-loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    background-image: url("../../assets/loading.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    text-align: center;
  }
  .transition {
    transition: opacity .2s linear;
  }

  .kfw-text {
    width: 100%;
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    color: #2c3e50;
  }

  .loading-enter, .loading-leave-active {
    opacity: 0;
  }

  .loading-leave, .loading-enter-active {
    opacity: 0;
  }
</style>
