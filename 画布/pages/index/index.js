Page({
  data:{

  },
  onLoad:function(options){
    //创建画布上下文
    const ctx = wx.createCanvasContext('myCanvas');
    //设置填充颜色
    ctx.setFillStyle('orange');
    //设置矩形填充区域
    ctx.fillRect(20,20,150,80);
    //矩形框区域
    ctx.strokeRect(10,10,50,50);
    //矩形清空区域
    ctx.clearRect(20,20,30,20);
    //画图
    ctx.draw();
  }
})
