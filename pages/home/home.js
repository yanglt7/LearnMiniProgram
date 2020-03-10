// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleClick() {
    console.log('按钮发生了点击')
  },

  // 常见的一些事件
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTag() {
    console.log('handleTag')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },

  // 事件对象分析
  handleEventClick(event) {
    console.log('--------', event)
  },
  handleEventEnd(event) {
    console.log('+++++++', event)
  },
  handleInner(event) {
    console.log('handleInner', event)
  },
  handleOuter(event) {
    console.log('handleOuter', event)
  },

  // 事件的传递参数
  handleItemClick(event) {
    console.log('handleItemClick', event)
    // title - index
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index

    console.log(index, title)
  },

  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },

})