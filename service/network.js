import {
  baseURL
} from './config.js'

export default function(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      data: options.data || {},
      method: options.method || 'get',
      success: resolve,
      fail: reject
    })
  })
}