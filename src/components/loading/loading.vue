<template>
  <transition name="loading">
    <div :class="['kfw-loading', hasTransition ? 'transition' : '']" v-show="visible">
      <div class="brands">
        <div class="text">快房传媒</div>
        <div class="line">
          <div class="ball"></div>
        </div>
      </div>
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
};
</script>

<style scoped>
.kfw-loading {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
  z-index: 120;
}

.brands {
  width: 300px;
  text-align: center;
}

.text {
  font-size: 28px;
  font-weight: 700;
  font-family: -apple-system-font, "Microsoft YaHei", sans-serif,
    "Helvetica Neue";
  color: #f04d22;
  margin-bottom: 20px;
}

.line {
  position: relative;
  width: 100%;
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(240, 77, 34, 0),
    rgba(240, 77, 34, 0.75),
    rgba(240, 77, 34, 0)
  );
}

.ball {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 8px;
  border-radius: 50%;
  /* background: -webkit-radial-gradient(contain, #f04d22, #f06d4d, rgba(255, 255, 255, 1)); */
  box-shadow: 0 0 15px rgb(241, 77, 35);
  background-color: #f04d22;
  animation: move 2.5s ease-in-out infinite;
}

@keyframes move {
  0% {
    left: 0;
    opacity: 0;
    width: 8px;
    height: 3px;
  }
  5% {
    opacity: 0;
    width: 8px;
    height: 3px;
  }
  50% {
    opacity: 1;
    width: 13px;
    height: 8px;
  }
  95% {
    opacity: 0;
    width: 8px;
    height: 3px;
  }
  100% {
    left: 100%;
    opacity: 0;
    width: 8px;
    height: 3px;
  }
}

.kfw-text {
  width: 100%;
  position: absolute;
  bottom: 20px;
  font-size: 14px;
  color: #2c3e50;
}
.transition {
  transition: opacity 0.2s linear;
}
.loading-enter,
.loading-leave-active {
  opacity: 0;
}

.loading-leave,
.loading-enter-active {
  opacity: 0;
}
</style>
