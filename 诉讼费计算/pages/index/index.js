//index.js
Page({
  data:{
    money1:'',
    money2:'',
    res:false,//用于记录用户是否输入金额
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
    else if(a <= 10000) {b = 50;}
    else if(a > 10000 && a <= 100000) {b = 0.025*a-200;}
    else if(a > 100000 && a <= 200000) {b = 0.02*a+300;}
    else if(a > 200000 && a <= 500000) {b = 0.015*a+1300;}
    else if(a > 500000 && a <= 1000000) {b = 0.01*a+3800;}
    else if(a > 1000000 && a <= 2000000) {b = 0.009*a+4800;}
    else if(a > 2000000 && a <= 5000000) {b = 0.008*a+6800;}
    else if(a > 5000000 && a <= 10000000) {b = 0.007*a+11800;}
    else if(a > 10000000 && a <= 20000000) {b = 0.006*a+21800;}
    else if(a > 20000000) {b = 0.005*a+41800;}

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
