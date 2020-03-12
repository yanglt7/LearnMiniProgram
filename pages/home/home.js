// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: () => {
        console.log('展示弹窗成功')
      },
      fail: () => {
        console.log('展示弹窗失败')
      }, 
      complete: () => {
        console.log('完成函数的调用')
      }
    })
  },
  
  handleShowModal() {
    wx.showModal({
      title: '标题',
      content: '内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'grey',
      confirmColor: 'green',
      success: res => {
        console.log(res)
        if (res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if (res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },

  // 和showToast区别: 必须手动调用hideLoading函数
  handleShowLoading() {
    wx.showLoading({
      title: '全力加载中',
      mask: true
    })

    // 一般在发送网络请求时使用
    setTimeout(() => {
      wx.hideLoading()
    }, 3000)
  },

  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
        switch(res.tapIndex) {
          case 0: 
            console.log('用户选择了相册')
            break;
          case 1:
            console.log('用户选择了拍照')
            break;
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  onShareAppMessage: function(options) {
    return {
      title: 'hihihi',
      path: '/pages/about/about',
      imgUrl: ''
    }
  }
})