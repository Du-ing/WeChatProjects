Page({
  goToGame:function(){
    wx.navigateTo({
      url: '../game/game',
    })
  },
  goToRule:function(){
    wx.navigateTo({
      url: '../rule1/rule1',
    })
  },
  goToAbout:function(){
    wx.navigateTo({
      url: '../about/about',
    })
  }
})
