Page({
  data:{
    musicPlayer:null, //播放器对象
    playing:false, //播放器状态
    swiperImages:[], //轮播图列表
    musicList:[], //音乐列表
    musicPic:"", //正在播放的音乐图标
    name:"", //正在播放的音乐名
    singer:"", //正在播放的音乐歌手名
    musicUrl:"", //正在播放的音乐URL
  },

  onLoad:function(){
    this.data.musicPlayer = wx.createAudioContext('myPlayer');
    this.getPics();
    this.getSongs();
  },
  //请求轮播图
  getPics:function(){
    let that = this;
    let picUrls = [];

    wx.request({
      url: 'https://autumnfish.cn/banner?type=5',
      success:function(res){
        //console.log(res);
        //将前5个轮播图url保存到临时数组
        for(let i = 0; i < 5; i++){
          picUrls.push(res.data.banners[i].imageUrl);
        }
        //将临时数组赋值给页面数据
        that.setData({
          swiperImages:picUrls,
        });
      }
    })
  },
  //请求音乐歌单
  getSongs:function(){
    let that = this;
    let newSongs = [];
    wx.request({
      url: 'https://autumnfish.cn/personalized/newsong',
      success:function(res){
        //console.log(res.data.result);
        for(let i = 0; i < res.data.result.length; i++){
          let info = res.data.result[i];
          newSongs.push({
            musicPic:info.picUrl,
            name:info.song.name,
            singer:info.song.artists[0].name,
            songId:info.id,
          })
        }
        that.setData({
          musicList:newSongs
        });
      }
    })
  },
  //播放点击的歌曲
  playMusic:function(e){
    //console.log(e);
    let that = this;
    let index = e.currentTarget.id;
    let music = this.data.musicList[index];

    //请求歌曲的点击的歌曲的URL
    wx.request({
      url: 'https://autumnfish.cn/song/url?id=' + music.songId,
      success:function(res){
        //console.log(res);
        let url = res.data.data[0].url;        
        that.setData({
          musicPic:music.musicPic,
          name:music.name,
          singer:music.singer,
          musicUrl:url,
          playing:true,
        });
        //自动播放点击的音乐
        that.data.musicPlayer.play();
      }
    })
  },
  //切换播放器状态
  change:function(){
    if(this.data.playing){
      this.data.musicPlayer.pause();
      this.setData({
        playing:false
      });
    }else{
      this.data.musicPlayer.play();
      this.setData({
        playing:true
      });
    }
  }
})
