// pages/game.js
Page({
  data:{
    x:-1,
    answer:0,
    tip:'',
    count:0,
    isGameStart:false,
  },

  onLoad:function(){
    this.reStart();
  },

  getNumber:function(e){
    this.setData({
      x:e.detail.value
    });
    //console.log(this.data.x);
  },

  guess:function(){
    let isGameStart = this.data.isGameStart;
    if(!isGameStart){
      wx.showToast({
        title: '游戏已经结束！',
      })
    }else{
      let x = this.data.x;

      this.setData({
        x:-1
      });

      if(x<0){
        wx.showToast({
          title: '不能小于0哦！',
        });
      }else if(x>100){
        wx.showToast({
          title: '不能大于100哦！',
        });
      }else{
        let answer = this.data.answer;
        let count = this.data.count;
        let tip = this.data.tip;

        if(x < answer){
          tip += '\n第'+count+'回合：'+x+'，猜小了';
        }else if(x == answer){
          tip += '\n第'+count+'回合：'+x+'，猜对了！';
          this.setData({
            isGameStart:false
          });
        }else{
          tip += '\n第'+count+'回合：'+x+'，猜大了';
        }

        if(count >= 8){
          tip += '\n回合到，游戏结束！';
          this.setData({
            isGameStart:false
          });
        }

        this.setData({
          tip:tip,
          count:count+1
        });
      }
    }
  },

  reStart:function(){
    this.setData({
      x:-1,
      answer:Math.round(Math.random()*100),
      tip:'',
      count:1,
      isGameStart:true
    })
  }
})