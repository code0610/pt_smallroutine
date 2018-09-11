
new Page({

  /**
   * 页面的初始数据
   */
  data: {
    // testData:[1,2,3,4,5,6,7,8,9],
    imgPosition: ["0rpx 0rpx", "-220rpx 0rpx", "-440rpx 0rpx", "0rpx -330rpx", "-220rpx -330rpx", "-440rpx -330rpx", "0rpx -660rpx", "-220rpx -660rpx", "-2000rpx -2000rpx"],
    myImgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536573416201&di=b8948ee2f330e87475dd266c02f1e718&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130402%2F0034034401816783_b.jpg"
  },

  setImg:function(options){
    // console.log("进入",options);
    var obj = parseInt(options.target.dataset.imgid);
    // console.log("出现",obj)
    var num = parseInt(obj) + 1;
    this.kk(obj, num);
    var num = parseInt(obj) + 3;
    this.kk(obj, num);
    var num = parseInt(obj) - 3;
    this.kk(obj, num);
    var num = parseInt(obj) - 1;
    this.kk(obj, num);
  },

  kk:function(obj,num){
    if (num >= 0 && num < 9) {
      if (this.data.imgPosition[num] == "-2000rpx -2000rpx") {
        // let a = this.data.imgPosition[8];
        this.data.imgPosition[num] = this.data.imgPosition[obj];
        this.data.imgPosition[obj] = "-2000rpx -2000rpx";
        // document.getElementById(num).style.backgroundPosition = document.getElementById(obj).style.backgroundPosition;
        // document.getElementById(obj).style.backgroundPosition = img[8];
      }
    }
    this.setData({
      imgPosition:this.data.imgPosition
    })
  },
  getImages2:function(){
    console.log(111111);
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        
        console.log(tempFilePaths);
        that.setData({
          myImgs: tempFilePaths
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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