var arrayincp = [];
var arraycp = [];
var array;
var array1;
Page({
  data:{
    array:arrayincp,
    array1:arraycp,
    condition1:true,
    condition2:false,
    input:false,
    nav1:'nav1',
    nav2:'nav2',
  },
  onLoad:function(){
    wx.getStorage({
      key: 'array',
      success:function(){
        let arrayStore = res.data;
        arrayincp = arrayStore[0];
        arraycp = [];
      }
    });
  },
  click1:function(){
    this.setData({
      nav1:'nav1',
      nav2:'nav2',
      condition1:true,
      condition2:false,
      input:false
    });
  },
  click2:function(){
    this.setData({
      nav1:'nav2',
      nav2:'nav1',
      condition1:false,
      condition2:true,
      input:false
    });
  },
  click:function(){
    this.setData({
      nav1:'nav2',
      nav2:'nav2',
      condition1:false,
      condition2:false,
      input:true
    });
  },
  confirm:function(e){
    arrayincp.push(e.detail.value);
    this.setData({
      array:arrayincp,
      nav1:'nav1',
      nav2:'nav2',
      condition1:true,
      condition2:false,
      input:false
    });
  },
  short:function(e){
    let index = e.target.id;
    let newitem = arrayincp[index];
    arrayincp.splice(index,1);
    arraycp.push(newitem);
    this.setData({
      array:arrayincp,
      array1:arraycp
    });
  },
  onUnload:function(){
    let arrayStore = [arrayincp, arraycp];
    wx.setStorage({
      data: arrayStore,
      key: 'array'
    });
  }
})