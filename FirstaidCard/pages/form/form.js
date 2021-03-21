// pages/form/form.js
Page({
  data: {
    date:'2000-01-01',
    blood:'A型',
    bloodItems:['A型','B型','O型','AB型'],
    ylzk:'无',
    ylbj:'无',
    gmfy:'无',
    yy:'无',
    qgjx:false,
    height:'170cm',
    weight:'50kg',
    tel:'1008611'
  },

  onLoad:function(){
    let myCard = wx.getStorageSync('myCard');
    if(myCard != false && myCard != ''){
      this.setData({
        date:myCard.date,
        blood:myCard.blood,
        ylzk:myCard.ylzk,
        ylbj:myCard.ylbj,
        gmfy:myCard.gmfy,
        yy:myCard.yy,
        qgjx:myCard.qgjx,
        height:myCard.height,
        weight:myCard.weight,
        tel:myCard.tel
      });
    }
  },

  dateChange:function(e){
    this.setData({
      date:e.detail.value
    });
  },

  bloodChange:function(e){
    let i = e.detail.value;
    this.setData({
      blood:this.data.bloodItems[i]
    });
  },

  submitForm:function(e){
    //保存同步数据
    wx.setStorageSync('myCard', e.detail.value);
    wx.navigateBack();
  },

  delMyCard:function(e){
    //删除同步数据
    wx.removeStorageSync('myCard');
    wx.navigateBack();
  }

})