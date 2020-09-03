//app.js
App({
  onLaunch: function () {

     // 隐藏系统tabbar
    //  wx.hideTabBar();

     // 获取设备信息
     this.getSystemInfo();

    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },

  onShow: function () {
    //隐藏系统tabbar
    // wx.hideTabBar();
  },

  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },

  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },

  globalData: {
    userInfo: null,
    
    tabBar:{
      "backgroundColor": "#ffffff",
      "color": "#CCCCCC",
      "selectedColor": "#CC0000",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "icon/tab1.png",
        "selectedIconPath": "icon/tab1-active.png",
        "text": "码上服务"
      },
      {
        "pagePath": "/pages/assemblyNumber/assemblyNumber",
        "iconPath": "icon/tab2.png",
        "selectedIconPath": "icon/tab2-active.png",
        "text": "集结号"
      },
      {
        "pagePath": "/pages/middle/middle",
        "iconPath": "icon/icon_release.png",
        "isSpecial": true,
        "text": ""
      },
      {
        "pagePath": "/pages/message/message",
        "iconPath": "icon/tab3.png",
        "selectedIconPath": "icon/tab3-active.png",
        "text": "消息"
      },
      {
        "pagePath": "/pages/my/my",
        "iconPath": "icon/tab4.png",
        "selectedIconPath": "icon/tab4-active.png",
        "text": "我的"
      },

    ]
  }
  }
})