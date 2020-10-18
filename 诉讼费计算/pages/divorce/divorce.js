// pages/divorce/divorce.js
Page({
  data: {
    flag:false,
    money1:'',
    money2:'',
    res:false,//用于记录用户是否输入金额
  },

  changeFlag:function(){
    let flag = this.data.flag;
    this.setData({
      flag:!flag
    })
  },

  formSubmit:function(e){
    let a = Number(e.detail.value.input);
    let b = 0;
    let c = 0;
    //如果没有输入则弹出提示
    if (a == '' || a == null) {
      wx.showToast({
        title: '请输入金额！',
        icon:'none',
      })
      return;
    }
    else if(a <= 200000) {b = 300;}
    else if(a > 200000) {b = 0.005*a;}

    c = 0.5 * b;
    this.setData({
      money1:b,
      money2:c,
      res:true,
    })
  },

  formReset:function(){
    this.setData({
      money1:'',
      money2:'',
      res:false,
    })
  }
})