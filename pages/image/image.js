// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: ''
  },

  handleChooseAlbum() {
    // 系统API, 让用户在相册选择图片或拍照
    wx.chooseImage({
      success: res => {
        // console.log(res)

        // 1.取出路径
        const path = res.tempFilePaths[0]
        // console.log(path)

        // 2.设置imgPath
        // this: undefined
        this.setData({
          imgPath: path
        })
      }
    })
  },

  handleImageLoad() {
    console.log('图片加载完成')
  }
})