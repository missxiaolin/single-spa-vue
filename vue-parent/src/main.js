import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApplication, start } from 'single-spa'

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
  
}

Vue.config.productionTip = false

// single-spa 缺陷 不够灵活 不能动态加载js
// 样式不隔离

registerApplication('myVueApp', async () => {
  console.log('加载模块')
  await loadScript(`http://localhost:10000/js/chunk-vendors.js`)
  await loadScript(`http://localhost:10000/js/app.js`)
  return window.singleVue

},
  location => location.pathname.startsWith('/vue'), // 用户切换到 /vue 路径，我需要加载刚才定义
)

start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
