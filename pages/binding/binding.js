
Page({
  data: {
    account: "",
    password_digest: "",
    isBinding: true
  },
  watchAccount(){

  },
  watchPassword(event){

  },
  goToSignUp(){
    this.setData({isBinding: false})
  },
  goToBinding(){
    this.setData({isBinding: true})
  },
})
