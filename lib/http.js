const app = getApp()
const { host, t_app_id, t_app_secret} = app.globalData



const _http = (method, url, data) => {
  let header = {
    "t-app-id": t_app_id,
    "t-app-secret": t_app_secret
  }
  if (wx.getStorageSync('X-token')){
    header["Authorization"] = `Bearer ${wx.getStorageSync('X-token')}`
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      data,
      header,
      method,
      dataType: 'json',
      success: (response) => {
        let statusCode = response.statusCode
        if (statusCode >= 400){
          if (statusCode === 401){
            wx.redirectTo({ url: "/pages/login/login" })
          }
          reject({ statusCode, response })
        } else {
          resolve(response)
        }
      },
      fail: (errors) => {
        wx.showToast({ title: '请求失败', icon: 'none' })
        reject(errors)
      }
    })
  })
}

const http = {
  get: (url,params) => _http('GET', url, params),
  post: (url,params) => _http('POST', url, params),
  put: (url,params) => _http('PUT', url, params),
  delete: (url,params) => _http('DELETE', url, params),
}

module.exports = {
  http
}
