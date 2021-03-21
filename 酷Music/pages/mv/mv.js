//获取随机颜色
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data:{
    mvUrl:"", //播放的mv的url
    mvList:[], //mv列表
    danmu:"", //弹幕内容
  },
  onLoad:function(){
    this.mvPlayer = wx.createVideoContext('myPlayer');
    this.getMvs();
  },
  //请求mv列表
  getMvs:function(){
    let that = this;
    let newMvs = [];
    wx.request({
      url: 'https://autumnfish.cn/mv/all?limit=10',
      success:function(res){
        //console.log(res);
        let data = res.data.data;
        for(let i = 0; i < 10; i++){
          newMvs.push({
            mvId:data[i].id,
            artist:data[i].artistName,
            coverPic:data[i].cover,
            mvName:data[i].name,
          });
        }
        that.setData({
          mvList:newMvs
        });
      }
    })
  },
  //请求mv的URL
  playMv:function(e){
    //console.log(e);
    let index = e.currentTarget.id;
    let mvId = this.data.mvList[index].mvId;
    let that = this;
    
    wx.request({
      url: 'https://autumnfish.cn/mv/url?id=' + mvId,
      success:function(res){
        //console.log(res);
        let url = res.data.data.url;
        that.setData({
          mvUrl:url
        });
      }
    })
  },
  //输入弹幕
  inputDanmu:function(e){
    //console.log(e);
    this.setData({
      danmu:e.detail.value
    });
  },
  //发送弹幕
  sendMyDanmu:function(){
    let danmu = this.data.danmu;
    //console.log(danmu);
    this.mvPlayer.sendDanmu({
      text:danmu,
      color:getRandomColor(),
    });
    //清空输入框
    this.setData({
      danmu:""
    });
  }
})