function Banner (){}
$.extend(Banner.prototype,{
    init:function(options){
        /* options  选项
            {
                item_list: 
                left_btn :
                right_btn:
                btn_list:
            }                
        */
        //元素选择
        //所有的图片
        this.item_list = $(options.item_list);
        // 左按钮
        this.left_btn = $(options.left_btn);
        //右按钮
        this.right_btn = $(options.right_btn);
        // 按钮列表
        this.btn_list = $(options.btn_list);
        this.nowIndex = 0;
        //有多少元素
        this.item_num = this.item_list.length;
        this.ul = $("#show ul");
        //获取列表中的第一个元素的宽度值
        this.item_width = this.item_list.width();

        if(this.left_btn.length == 0 && this.right_btn.lengtn == 0 && this.btn_list.length == 0){
            this.autoPlay();
            return 0;
        }
        this.bindEvent();
    },
    bindEvent:function(){
        //this.left_btn.click(this.prev.bind(this));或者下面程序也可以
        this.left_btn.click($.proxy(this.prev,this));
        this.right_btn.click($.proxy(this.next,this));
        this.btn_list.mouseover($.proxy(this.toIndex,this));

    },
    next:function(){

        if(this.nowIndex == this.item_num - 1){
            this.nowIndex = 1;
            this.ul.css ({
                left:0
            })
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev:function(){
        //console.log(this)
        if(this.nowIndex == 0){
            this.nowIndex = this.item_num -2;
            this.ul.css({
                left : -(this.item_num - 1) * this.item_width
            })
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex:function(event){
        //获取事件源，即当前元素的下标
        
        var target = event.target || event.srcElement;
        //console.log($(target).index())
        this.nowIndex = $(target).index();
        this.animate()
    },
    animate:function(){
        //console.log(this.nowIndex)
        this.ul.stop().animate({
            left:-this.item_width * this.nowIndex
        })
        var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex;
        this.btn_list.eq(index)
        .addClass ("active")
        //兄弟级移除class
        .siblings("span")
        .removeClass("active");
    },
    autoPlay:function(){
        this.autoTimer = setInterval(function(){
                this.next()
        }.bind(this),1000)
    }
})

var banner = new Banner();
banner.init({
    item_list :"#show li",
    left_btn:"#left",
    right_btn:"#right",
    btn_list: "#list span"
})
banner.autoPlay()