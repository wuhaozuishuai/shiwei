//Page Object
Page({
    data: {
        msg:'123',
        num:0
    },
    //options(Object)
    onLoad: function(options) {
        
    },
    onReady: function() {
        
    },
    onShow: function() {
        
    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item) {

    },
    onde(e){
        console.log(e.detail.value);
        this.setData({
            num:e.detail.value
        })
    },
    //加减按钮的事件
    handletap(e){
        console.log(e)
        // 获取自定义属性operation
        const _operation = e.currentTarget.dataset.operation;
        this.setData({
            num:this.data.num+=_operation
        })
    }
});
  