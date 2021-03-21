//index.js

Page({
  data: {
    myCard:false,

    date:'',
    blood:'',
    ylzk:'',
    ylbj:'',
    gmfy:'',
    yy:'',
    qgjx:false,
    height:'',
    weight:'',
    tel:''
  },

  onShow:function(){
    //读取同步数据
    let myCard = wx.getStorageSync('myCard');
    this.setData({
      myCard:myCard
    });
  },

  goToForm:function(){
    wx.navigateTo({
      url: '/pages/form/form',
    });
  },

  makeCall:function(){
    let tel = this.data.tel;
    if(tel != ''){
      wx.makePhoneCall({
        phoneNumber: tel,
      });
    }
  }
})
