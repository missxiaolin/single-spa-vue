# single-spa-vue

https://single-spa.js.org/

### 缺陷

- 不够灵活
- 不能动态加载js
- 样式不隔离

### css 隔离

子应用间样式隔离

- Dynamic Stylesheet 动态样式表，当应用切换时移除老应用样式，添加新应用

主应用和子应用样式隔离

- BEM （Block Element Modifier）约定项目前缀
- CSS-Modules 打包时生成不冲突的选择器名
- Shadow DOM 真正意义上的隔离
- css-in-js

### js 沙箱机制

