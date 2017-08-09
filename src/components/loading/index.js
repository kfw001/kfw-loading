import Vue from 'vue';
import LoadingComponent from './loading.vue';

let $vm;
const plugin = {
  install (Vue, options = {}) {
    const Loading = Vue.extend(LoadingComponent);
    let removeDom = event => {
      if (event.target.parentNode.childNodes.length > 1) {
        event.target.parentNode.removeChild(event.target)
      } else {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
      }
    };
    const loading = {
      open (options = { hasTransition: false }) {
        $vm = new Loading({
          el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
        $vm.visible = true;
        $vm.hasTransition = options.hasTransition
      },
      close () {
        $vm.visible = false;
        $vm.$el.addEventListener('transitionend', removeDom);
      }
    };
    Vue.prototype.$kfw = loading;
  }
};

export default plugin;
