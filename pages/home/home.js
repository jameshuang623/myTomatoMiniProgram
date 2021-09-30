// pages/_home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: true
  },

  confirm(event){
    console.log(event.detail)
  },
  cancel(event){
    console.log(event.detail)
  }
})
