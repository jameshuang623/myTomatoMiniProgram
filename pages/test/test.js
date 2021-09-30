// pages/test/test.js
Page({

  data: {
    str: '我是一条信息',
    arr: [1,2,3,4]

  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  reverseStr(){
    this.setData({str: this.data.str.split('').reverse().join('')})
  },
  pushItem(){
    let last = this.data.arr[this.data.arr.length-1] + 1
    // let newArr = this.data.arr.push(last)
    // this.setData({arr: newArr})
    // push返回的是新数组的长度，所以会出错
    this.data.arr.push(last)
    this.setData({arr: this.data.arr})
  }
})
