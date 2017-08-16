<template>
  <transition name="loading">
    <div :class="['kfw-loading', hasTransition ? 'transition' : '']" v-show="visible">
      <div class="loading-img"></div>
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
    display: flex;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 263px;
    height: 130px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.17);
    border-radius: 5px;
    border: 1px solid #eee;
    cursor: wait;
  }

  .transition {
    transition: opacity .2s linear;
  }

  .loading-img {
    width: 294px;
    height: 110px;
    background-image: url("loading.gif");
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 50% 5px;
  }

  .kfw-text {
    width: 100%;
    position: absolute;
    bottom: 10px;
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
