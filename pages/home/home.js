// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log('---------------', event)
    this.setData({
      counter: this.data.counter + 1
    }) 
  },
  handleTabControlClick(event) {
    console.log(event)
  },
  handleCpnIncrement() {
    // console.log('++++++++++++++++++')
    // 目的:修改my-sel中的counter
    // 拿到组件对象, 调用setData

    // 1.获取组件对象
    // const my_sel = this.selectComponent('.sel-class')
    const my_sel = this.selectComponent('#sel-id')
    // console.log(my_sel)
    // 2. 方式一: 通过setData修改组件的数据(不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 2
    // })
    // 3. 方式二: 调用组件内方法修改数据
    my_sel.incrementCounter(2)
  },
  handleShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})