const ctx = wx.createCanvasContext('myCanvas');
Page({
  onShow:function(e){
    setInterval(show,1000);
    function show(){
      backShow();
      numberShow();
      secShow();
      minShow();
      hourShow();
      ctx.draw();
    }
  }
})

//表盘
function backShow(){
  ctx.beginPath();
  ctx.setLineWidth(3);
  ctx.arc(150, 150, 120, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
}
//数字
function numberShow(){
  ctx.beginPath();
  ctx.setFontSize(20);
  for(let i = 1; i < 13; i++){
    let angle = i * Math.PI / 6;
    let x = 145 + 100 * Math.sin(angle);
    let y = 155 - 100 * Math.cos(angle);
    ctx.fillText(i, x, y);
  }
  ctx.closePath();
  ctx.stroke();
}
//秒针
function secShow(){
  let now = new Date();
  let sec = now.getSeconds();
  //角度弧度
  let angle = sec * Math.PI / 30;
  let x = 150 + 100 * Math.sin(angle);
  let y = 150 - 100 * Math.cos(angle);
  ctx.beginPath();
  ctx.setLineWidth(1);
  ctx.setStrokeStyle('red');
  ctx.moveTo(150, 150);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
}
//分针
function minShow(){
  let now = new Date();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let angle = (min + sec / 60) * Math.PI / 30;
  let x = 150 + 80 * Math.sin(angle);
  let y = 150 - 80 * Math.cos(angle);
  ctx.beginPath();
  ctx.setLineWidth(5);
  ctx.setStrokeStyle('green');
  ctx.moveTo(150, 150);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
}
//时针
function hourShow(){
  let now = new Date();
  let hour = now.getHours() % 12;
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let angle = (hour + min / 60 + sec / 3600) * Math.PI / 6;
  let x = 150 + 50 * Math.sin(angle);
  let y = 150 - 50 * Math.cos(angle);
  ctx.beginPath();
  ctx.setLineWidth(8);
  ctx.setStrokeStyle('yellow');
  ctx.moveTo(150, 150);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
}