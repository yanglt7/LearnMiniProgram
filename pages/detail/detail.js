// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload() {
    // 1.获取首页页面对象
    // getCurrentPages获取当前所有栈(活跃)的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    // 2.调用页面对象的setData方法
    home.setData({
      title: '呵呵呵'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1,
    })
  }
})