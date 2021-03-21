var defaultcity,getweather,getwind,gettemp,getpic,getdate;
var bmap = require("../../bmap-wx.js");
Page({
  data:{
    city:"",
    weather:"",
    wind:"",
    temp:"",
    pic:"",
    date:"",
    Bmap:null,
  },
  onLoad:function(){
    var that = this;
    defaultcity = "合肥";
    var Bmap = new bmap.BMapWX({
      ak:"4VoGpYbNrFs9lE7LtXD8MHc4otL1L9dq"
    });
    Bmap.weather({
      success:function(res){
        console.log(res);
        
      },
      fail:function(res){
        console.log(res);
        
      }
    })
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=4VoGpYbNrFs9lE7LtXD8MHc4otL1L9dq&location='+defaultcity,
      success:function(res){
        //console.log(res);
        getweather = res.data.results[0].weather_data[0].weather;
        getpic = res.data.results[0].weather_data[0].dayPictureUrl;
        gettemp = res.data.results[0].weather_data[0].temperature;
        getwind = res.data.results[0].weather_data[0].wind;
        getdate = res.data.date;
        that.setData({
          city:defaultcity,
          weather:getweather,
          wind:getwind,
          temp:gettemp,
          pic:getpic,
          date:getdate,
        })
      },
      fail:function(res){
        
      }
    })
  },
  bindKeyInput:function(e){
    defaultcity=e.detail.value;
  },
  search:function(){
    var that = this;
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=4VoGpYbNrFs9lE7LtXD8MHc4otL1L9dq&location='+defaultcity,
      success:function(res){
        //console.log(res);
        getweather = res.data.results[0].weather_data[0].weather;
        getpic = res.data.results[0].weather_data[0].dayPictureUrl;
        gettemp = res.data.results[0].weather_data[0].temperature;
        getwind = res.data.results[0].weather_data[0].wind;
        that.setData({
          city:defaultcity,
          weather:getweather,
          wind:getwind,
          temp:gettemp,
          pic:getpic,
        })
      },
      fail:function(res){
        
      }
    })
  }
})