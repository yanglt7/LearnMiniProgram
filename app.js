App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成了: onLuanch')

    // 获取用户信息
    // 异步调用
    // wx.getUserInfo({
    //   // 数据拿到之后，再进行回调的
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 模拟小程序发生错误
    setTimeout(() => {
      const err = new Error()
      throw err
    }, 1000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序界面显示: onShow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时执行: onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生错误时: onError')
  }
})
