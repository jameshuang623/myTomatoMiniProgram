// pages/_home/home.js
Page({
  data: {
    lists: [
      {id: 1, text:"我今天干了什么", finished: true},
      {id: 2, text:"我今天干了sdfsdf么", finished: true},
      {id: 3, text:"我今天干了sdfsdf333什么", finished: false},
      {id: 4, text:"我今天干了什rrr么", finished: false}
    ],
    visibleConfirm: false
  },

  confirm(event){
    console.log(event.detail)
  },
  confirmCreate(event){
    let content = event.detail
    if (content){
      let todo = {id: this.data.lists.length+1,text: content,finished: false}
      this.data.lists.unshift(todo)
      this.setData({lists: this.data.lists})
      this.hideConfirm()
    }
  },
  destroyedTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({lists: this.data.lists})
  },
  hideConfirm(){
    this.setData({visibleConfirm: false})
  },
  showConfirm(){
    this.setData({visibleConfirm: true})
  }
})
