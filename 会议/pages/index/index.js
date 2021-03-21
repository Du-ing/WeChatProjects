Page({
  data:{
    lat:30.514676,
    lon:114.339401,
    guests:[
      {
        avatar:"/pages/images/avatar1.png",
        name:"陈女士"
      },
      {
        avatar:"/pages/images/avatar2.png",
        name:"王经理"
      }
    ]
  },
  showGuide:function(){
    let that = this;
    wx.openLocation({
      latitude: that.data.lat,
      longitude: that.data.lon,
    })
  }
})
