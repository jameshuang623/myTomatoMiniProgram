// pages/tomato/tomato.js
Page({

    /**
     * 页面的初始数据
     */
    timer: null,
    data: {
        defaultSecond: 30,
        time: "",
        timerStatus: "stop"

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.startTimer()
    },
    startTimer() {
        this.setData({timerStatus: "start"})
        this.changeTime()
        this.timer = setInterval(() => {
            if (this.data.defaultSecond === 0) {
                return this.clearTimer()
            }
            this.data.defaultSecond = this.data.defaultSecond - 1
            this.changeTime()
        }, 1000)
    },
    clearTimer() {
        clearInterval(this.timer)
        this.timer = null
        this.setData({timerStatus: "stop"})
    },
    changeTime() {
        let m = Math.floor(this.data.defaultSecond / 60)
        let s = Math.floor(this.data.defaultSecond % 60)
        if (s === 0) {
            s = '00'
        }
        if ((s + '').length === 1) {
            s = '0' + s
        }
        if ((m + '').length === 1) {
            m = '0' + m
        }
        this.setData({time: `${m}:${s}`})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.changeTime()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
