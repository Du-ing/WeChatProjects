// pages/history/history.js
Page({
  data:{
    exprs:[],
    id1:'cleanHistory'
  },
  onLoad:function(options){
    this.setData({
      exprs:wx.getStorageSync('exprs')
    });
  },
  clickButton:function(e){
    //var data = this.data.result;
    if(e.target.id == 'cleanHistory'){
      wx.clearStorageSync();
      this.setData({
        exprs:[]
      });
    }
  }
})