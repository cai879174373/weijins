$(function() {
    //获取工具提示的元素 初始化工具提示插件
    // 默认没有初始化需要手动初始化
    $('[data-toggle="tooltip"]').tooltip()

    //滑动轮播图事件

    // 修改轮播图自动轮播图间隔时间
    $('.carousel').carousel({
        interval: 2000
    });
    // 声明2个全局变量
    var startX=0;
    var endX=0;
    $('#slide').on('touchstart',function(e){
        // console.log(e.originalEvent.touches[0].clientX);
         startX=e.originalEvent.touches[0].clientX;
    });

    $('#slide').on('touchend',function(e){
        // console.log(e.originalEvent.changedTouches[0].clientX);
         endX=e.originalEvent.changedTouches[0].clientX;
        if(endX-startX>0){//大于0是滑动到上一页
           
            $('.carousel').carousel('prev');
        }else if(endX-startX<0){
            $('.carousel').carousel('next');
        }
        console.log(endX-startX);
    });

    // var startX = 0;
    // var endX = 0;
    // $('#slide').on('touchstart',function (e){     
    //     // jquery添加的事件 事件对象是jquery的事件对象
    //     // 取里面原生事件对象e.originalEvent
    //     // console.log(e);
    //     // console.log(e.originalEvent);
    //     startX = e.originalEvent.touches[0].clientX;
    //     console.log(startX);
    // });
    // $('#slide').on('touchend',function (e){        
    //     // console.log(e);
    //     // console.log(e.originalEvent);
    //     // 结束事件只能使用changedTouches 来获取手指位置
    //     endX = e.originalEvent.changedTouches[0].clientX;
    //     console.log(endX);
    //     // 判断endX - startX的值 如果是正值 从左往右 就切换到上一张
    //     if(endX - startX > 0){
    //         $('.carousel').carousel('prev')
    //     }else if(endX - startX < 0){// 当小于0的时候 从右往左 切换到下一张
    //         $('.carousel').carousel('next')
    //     }
    // });
})