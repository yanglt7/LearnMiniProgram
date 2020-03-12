// pages/home/home.js
import request from '../../services/network.js'

Page({
  onLoad: function (options) {
    // 1.原生的方式发送网络请求
    // this.get_data_origin()

    // 2.使用封装的request发送网络请求
    request({
      url: 'http://123.207.32.32:8000/recommend',
    }).then(res => {
      console.log(res)
    }).catch (err => {
      console.log(err)
    })
  },
  get_data_origin() {
    // 1.发送最简单的get请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
    })

    // 2.发送get请求, 携带参数
    wx.request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        type: 'sell',
        page: 1
      },
      success: res => {
        console.log(res)
      }
    })

    // 3.post请求, 携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'yanglt',
        age: 18
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})