// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序',
    firstname: 'kobe',
    lastname: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 38,
    movies: ['叶问', '海王', '岁月神偷'],
    nums: [[10, 20, 30], [11, 22, 33]],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      }, 1000)
    })
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow :!this.data.isShow
    }) 
  },
  handleIncrement() {
    if (this.data.score <= 94) {
      this.setData({
        score: this.data.score + 6
      })
    }
  },
  numberToFixed(value) {
    return value.toFixed(2)
  }
})