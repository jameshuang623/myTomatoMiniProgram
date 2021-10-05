// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: "tomato",
    lists: {
      "本周四": [
        {time: "14:00", text: "jameshuang623", id: 1},
        {time: "14:00", text: "jameshuang623", id: 4},
      ],
      "本周五": [{time: "14:00", text: "jameshuang623", id: 2}],
      "本周天": [{time: "14:00", text: "jameshuang623", id: 3}],
      "本周一": [{time: "14:00", text: "jameshuang623", id: 3}],
      "本周二": [{time: "14:00", text: "jameshuang623", id: 3}],
      "本周三": [{time: "14:00", text: "jameshuang623", id: 3}],
    }
  },
  onShow(){},
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({tab:name})
  }
})
