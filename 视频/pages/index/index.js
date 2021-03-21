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
    videoSrc:"http://data.vod.itc.cn/?new=/188/31/YEqfy9hWpUPeCwFZYsdFFH.mp4&vid=86960274&plat=17&mkey=ciyviaQL3LzTXnOFW9tWvMzcqxuZVS6B&ch=null&user=api&uid=1608272337357415&SOHUSVP=2OI4DeR9cmVp4IzkqJn0j5VAwfnhtxPbx1EzpkHUGp4&pt=1&prod=56&pg=1&eye=0&cv=1.0.0&qd=680&src=11050001&ca=4&cateCode=308&_c=1&appid=tv&ugu2=288954075&ugcode2=M9EsqjTdkNrw3xQp-SymOUMUXc1Cql8AV2FAnf_-OW9eKo4knmVM8rW93rGmtQo53a3PzA6xrjLfrAR_gz4Y6GPGYdnr-XcxznT_",
    videoTitle:"",
    videoList:[
      {
        src:"http://data.vod.itc.cn/?new=/91/42/pZqBu6MSS6qxJ83Lg979vf.mp4&vid=103937904&plat=17&mkey=9Zkmfv9_NLjEW2Q9OEqQYH7OCZZGplH2&ch=null&user=api&uid=1608272337357415&SOHUSVP=5YexdA7YeUvTMX6hlFnAut-CuQFWXNtNTUzobOAOOn0&pt=1&prod=56&pg=1&eye=0&cv=1.0.0&qd=680&src=11050001&ca=4&cateCode=300&_c=1&appid=tv",
        title:"周星驰搞笑",
      },
      {
        src:"http://data.vod.itc.cn/?new=/163/137/S4IMDQUrT6G1uNOpmgYxBB.mp4&vid=101612193&plat=17&mkey=2X1XS7hZbX2RoubVOUO1GpwQeIQwW6z1&ch=null&user=api&uid=1608272337357415&SOHUSVP=5YexdA7YeUueNMOia1drBjN0b-nsO11gAL5gabkPyg4&pt=1&prod=56&pg=1&eye=0&cv=1.0.0&qd=680&src=11050001&ca=4&cateCode=300&_c=1&appid=tv",
        title:"外国恶搞",
      },
      {
        src:"http://data.vod.itc.cn/?new=/0/155/e6qnmnZgRp2zuUhc6923pH.mp4&vid=103035078&plat=17&mkey=mzfHU3LFWcIJADUoUPssqKnU9bOa87_9&ch=null&user=api&uid=1608272337357415&SOHUSVP=5YexdA7YeUtoO2M-lp48UIrwZm1iltpJBlKWuCliOxo&pt=1&prod=56&pg=1&eye=0&cv=1.0.0&qd=680&src=11050001&ca=4&cateCode=303&_c=1&appid=tv",
        title:"搞笑动画",
      },
      {
        src:"http://data.vod.itc.cn/?new=/26/31/sUMuRiqvTx2c1YJqDAbdsB.mp4&vid=102628809&plat=17&mkey=9jgnB__FXgKD-5qj13wNouLZA1S47qcV&ch=null&user=api&uid=1608272337357415&SOHUSVP=2OI4DeR9cmVnp-lk3eKNzKIBXw8jwQGXnKHeF1EKTQc&pt=1&prod=56&pg=1&eye=0&cv=1.0.0&qd=680&src=11050001&ca=4&cateCode=327&_c=1&appid=tv",
        title:"沈腾贾琳搞笑"
      }
    ],
    danmu:'',
  },
  onLoad:function(){
    //创建视频播放上下文
    this.videoPlayer = wx.createVideoContext('myVideo');
  },
  playVideo:function(e){
    this.videoPlayer.stop();
    let index = e.currentTarget.id;
    let video = this.data.videoList[index];
    this.setData({
      videoSrc:video.src,
      videoTitle:video.title,
    });
    this.videoPlayer.play();
  },
  getDanmu:function(e){
    this.setData({
      danmu:e.detail.value
    });
  },
  sendDanmu:function(){
    let danmu = this.data.danmu;
    
    this.videoPlayer.sendDanmu({
      text:danmu,
      color:getRandomColor(),
    });
  }
})
