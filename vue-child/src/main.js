import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// 需要父应用加载子应用

const appOptions = {
  el: '#vue', // 挂载父应用id 为vue标签中
  router,
  render: h => h(App)
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})

// 如果是父应用引用我
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10000/'
}

if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}


// 协议接入 父应用会调用这个方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount

// 将子应用打包成一个个lib交给父应用使用
