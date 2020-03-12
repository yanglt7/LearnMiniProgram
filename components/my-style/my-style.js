// components/my-style/my-style.js
Component({
  options: {
    // isolated: 互补影响
    // apply-shared: 外部样式影响组件样式
    // shared: 互相影响
    styleIsolation: 'shared'
  }
})
