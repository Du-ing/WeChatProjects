var saveExprs = function(expr){
  var exprs = wx.getStorageSync("exprs") || [];
  exprs.unshift(expr);
  wx.setStorageSync('exprs', exprs);
}
var calculate = function(data1,oper,data2){
  console.log("计算"+data1+""+oper+""+data2);
  
  let data;
  data1 = parseFloat(data1);
  data2 = parseFloat(data2);
  switch(oper){
    case "+":
      data = data1 + data2;break;
    case "-":
      data = data1 - data2;break;
    case "×":
      data = data1 * data2;break;
    case "÷":
      if(data2 != 0){
        data = data1 / data2;
      }else{
        data = 0;
      };break;
  }
  return data;
}
Page({
  data:{
    temp:"0",
    lastoper:'+',
    flag:true,
    result:"0",
    id1:"history",
    id2:"clear",
    id3:"back",
    id4:"div",
    id5:"num_7",
    id6:"num_8",
    id7:"num_9",
    id8:"mul",
    id9:"num_4",
    id10:"num_5",
    id11:"num_6",
    id12:"sub",
    id13:"num_1",
    id14:"num_2",
    id15:"num_3",
    id16:"add",
    id17:"negative",
    id18:"num_0",
    id19:"dot",
    id20:"equ",
    expr:"",
  },
  clickButton:function(e){
    let data = this.data.result;
    let tmp = this.data.temp;
    let lastoper1 = this.data.lastoper;
    let noNumFlag = this.data.flag;
    let expr1 = this.data.expr;

    if(e.target.id >= "num_0" && e.target.id <= "num_9"){
      data += e.target.id.split("_")[1];
      if(this.data.result == '0' || noNumFlag){
        data = e.target.id.split("_")[1];
      }
      noNumFlag = false;
      console.log("==>"+data);
    }
    else if(e.target.id == "dot"){
      if(data.indexOf(".") == -1){
        data += ".";
      }
    }
    else if(e.target.id == "back"){
      if(data.length > 1){
        data = data.substr(0, data.length - 1)
      }else{
        data = 0;
      }
    }
    else{
      noNumFlag = true;
      if(e.target.id == "clear"){
        expr1 = expr1.substr(0,expr1.length-1)+'='+tmp;
        saveExprs(expr1);
        expr1="";
        data = 0;
        tmp = 0;
        lastoper1 = "+";
      }
      else if(e.target.id == "negative"){
        data = -1 * data;
      }
      else if(e.target.id == "history"){
        wx.navigateTo({
          url: '../history/history',
        });
      }
      else if(e.target.id == "div"){
        expr1 = data + "÷";
        data = calculate(tmp,lastoper1,data);
        tmp = data;
        lastoper1 = "÷";
      }
      else if(e.target.id == "mul"){
        expr1 = data + "×";
        data = calculate(tmp,lastoper1,data);
        tmp = data;
        lastoper1 = "×";
      }
      else if(e.target.id == "sub"){
        expr1 = data + "-";
        data = calculate(tmp,lastoper1,data);
        tmp = data;
        lastoper1 = "-";
      }
      else if(e.target.id == "add"){
        expr1 = data + "+";
        data = calculate(tmp,lastoper1,data);
        tmp = data;
        lastoper1 = "+";
      }
      else if(e.target.id == "equ"){
        expr1 += data;
        //console.log(data);
        data = calculate(tmp,lastoper1,data);
        expr1 += "="+data;
        saveExprs(expr1);
        expr1="";
        tmp = 0;
        lastoper1 = "+";
      }
    }

    
    console.log(expr1);
    this.setData({
      result:data,
      lastoper:lastoper1,
      temp:tmp,
      flag:noNumFlag,
      expr:expr1
    });
  }
})