// pages/index/index.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    //tabbar
    tabbar: {},

    //宫格导航数据
    navGird: [
      {
        icon: '/images/index/icon_first.png',
        url: '',
        txt: '码上医'
      },
      {
        icon: '/images/index/icon_second.png',
        url: '',
        txt: '码上吃'
      },
      {
        icon: '/images/index/icon_third.png',
        url: '',
        txt: '码上住'
      },
      {
        icon: '/images/index/icon_fourth.png',
        url: '',
        txt: '码上行'
      },
      {
        icon: '/images/index/icon_fifth.png',
        url: '',
        txt: '码上游'
      },
      {
        icon: '/images/index/icon_sixth.png',
        url: '',
        txt: '码上购'
      },
      {
        icon: '/images/index/icon_seventh.png',
        url: '',
        txt: '码上查'
      },
      {
        icon: '/images/index/icon_eighth.png',
        url: '',
        txt: '码上帮'
      },
      {
        icon: '/images/index/icon_eighth.png',
        url: '',
        txt: '码上学'
      },
      {
        icon: '/images/index/icon_tenth.png',
        url: '',
        txt: '全部'
      }
    ],

    //轮播图数据
    swiperList: [
      '/images/index/swiper_first.png',
      '/images/index/swiper_first.png',
      '/images/index/swiper_first.png',
      '/images/index/swiper_first.png'
    ],

    //内容标题数据
    title: [
      '热门资讯',
      '推荐视频',
      '推荐视频',
      '推荐视频'
    ],

    //内容列表数据(风格一)
    contentListFirst: [
      {
        txt: '当兵不是儿戏！一旦成为逃兵户口本将印上4个字，一生都无法翻身', //标题
        url1: '/images/index/imageFirst.png', //图片1地址
        url2: '/images/index/imageSecond.png', //图片2地址
        url3: '/images/index/imageThird.png', //图片3地址
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1
        num: 210, //评论数
        icon2: '/images/index/content_icon2.png' //icon图标2
      },
      {
        txt: '关于“不忘初心、牢记使命”，这些妙喻直击人心，触及灵魂', //标题
        url1: '/images/index/imageFourth.png', //图片1地址
        url2: '/images/index/imageFifth.png', //图片2地址
        url3: '/images/index/imageSixth.png', //图片3地址
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1
        num: 210, //评论数
        icon2: '/images/index/content_icon2.png' //icon图标2
      },
      {
        txt: '二战：各国单兵手枪装备大盘点（喜欢手枪收藏的军迷朋友有眼福了）', //标题
        url1: '/images/index/imageFourth.png', //图片1地址
        url2: '/images/index/imageFifth.png', //图片2地址
        url3: '/images/index/imageSixth.png', //图片3地址
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1
        num: 210, //评论数
        icon2: '/images/index/content_icon2.png' //icon图标2
      }
    ],

    //内容列表数据(风格二)
    contentListSecond: [
      {
        txt: '骗子入戏太深？他冒充军人15年骗了400万，被抓才知自己不是少将', //标题
        url: '/images/index/imageEighth.png', //图片路径
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1路径
        icon2: '/images/index/content_icon2.png', //icon图标2路径
        num: 210 //评论数
      },
      {
        txt: '15分钟就能吃上热饭 解放军的单兵自热饭 质量不输美军！', //标题
        url: '/images/index/imageEighth.png', //图片路径
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1路径
        icon2: '/images/index/content_icon2.png', //icon图标2路径
        num: 210 //评论数
      },
      {
        txt: '15分钟就能吃上热饭 解放军的单兵自热饭 质量不输美军！', //标题
        url: '/images/index/imageEighth.png', //图片路径
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1路径
        icon2: '/images/index/content_icon2.png', //icon图标2路径
        num: 210 //评论数
      },
      {
        txt: '15分钟就能吃上热饭 解放军的单兵自热饭 质量不输美军！', //标题
        url: '/images/index/imageEighth.png', //图片路径
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1路径
        icon2: '/images/index/content_icon2.png', //icon图标2路径
        num: 210 //评论数
      }
    ],

    //内容列表数据(风格三)
    contentListThird: [
      {
        txt: '15分钟就能吃上热饭 解放军的单兵自热饭 质量不输美军！', //标题
        url: '/images/index/imageSeventh.png', //图片路径
        from: '中国新人网', //来源
        time: '5分钟前', //时间
        icon1: '/images/index/content_icon1.png', //icon图标1路径
        icon2: '/images/index/content_icon2.png', //icon图标2路径
        num: 210 //评论数
      }
    ]

  },

  //删除内容
  fel: function() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})