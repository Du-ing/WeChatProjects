const ctx = wx.createCanvasContext('myCanvas');
var imagepath;
var fun = true;
Page({
  //选择图片
   click:function(e){
     wx.chooseImage({
       count: 1,
       sizeType:['original','compressed'],
       success:function(res){
         imagepath = res.tempFilePaths[0];
         ctx.drawImage(res.tempFilePaths[0],0,0,600,600);
         ctx.draw();
       }
     })
   },
   start:function(e){
     this.move(e);
   },
   //end:function(e){
   //  this.move(e);
   //},
   //手指移动
   move:function(e){
     //打马赛克
     if(fun){
       ctx.setFillStyle('#C0C0C0');
       ctx.fillRect(e.touches[0].x, e.touches[0].y, 5, 5);
       ctx.fillRect(e.touches[0].x+5, e.touches[0].y+5, 5, 5);
       ctx.setFillStyle('gray');
       ctx.fillRect(e.touches[0].x+5, e.touches[0].y, 5, 5);
       ctx.fillRect(e.touches[0].x, e.touches[0].y+5, 5, 5);
       ctx.draw(true);
     }else{
       //擦除
       ctx.clearRect(e.touches[0].x, e.touches[0].y, 15, 15);
       ctx.draw(true);
     }
   },
   cover:function(){
     fun = true;
   },
   clear:function(){
     fun = false;
   },
   save:function(){
     wx.canvasToTempFilePath({
       canvasId: 'myCanvas',
       success:function(res){
        var src = res.tempFilePath;
        wx.previewImage({
          current:src,
          urls: [src,imagepath],
        })
       }
     })
   }
})
