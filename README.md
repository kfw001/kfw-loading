# kfw-loading

> 适用于快房传媒的加载页面

# Install
1. 拷贝目录 `components/loading` 至项目的 `components`
2. 在 `main.js` 中引入
```
import Loading from './components/loading'
Vue.use(Loading)
```
3. 组件中即可使用

# Use
- 开启loading：`this.$kfw.open({hasTransition: true});`（可不传参数，默认无过渡效果）
- 关闭loading：`this.$kfw.close();`


## Demo

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
