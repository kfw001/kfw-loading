# kfw-loading

> 适用于快房传媒 `移动端` 的加载页面

> PC端请看 `pc` 分支，预览地址：https://kfw001.github.io/kfw-loading/pc.html

## Install
1. 拷贝目录 `components/loading` 至项目的 `components`
2. 在 `main.js` 中使用
```
// 目录请对应自己本地的路径
import Loading from './components/loading'
Vue.use(Loading)
```

## Usage
- 开启loading：`this.$kfw.loading.open({hasTransition: true});`（可不传参数，默认无过渡效果）
- 关闭loading：`this.$kfw.loading.close();`


## Demo

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8585
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
