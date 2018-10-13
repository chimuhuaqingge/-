//临界值    最后一张图片   和  0
function Banner(){}
    //Object.assign()方法   浅拷贝，对象合并
    //对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的
    Object.assign(Banner.prototype,{
        init(){
            //初始化，当前图片下标
            this.nowIndex = 0;
            //元素
            this.btn_left = document.querySelector("#left");
            this.btn_right = document.querySelector("#right");
            this.btn_list = document.querySelectorAll("#btnlist span");
            this.banner_list = document.querySelectorAll("#banner-list li");
            this.ul =  document.querySelector("#banner-list ul");
            this.itmeNum = this.banner_list.length;
            this.bindEvent();
        },
        bindEvent(){
            this.btn_left.onclick = this.prev.bind(this);
            this.btn_right.onclick = this.next.bind(this);
            for(var i = 0 ; i < this.btn_list.length ;i++ ){
                this.btn_list[i].index = i;
                this.btn_list[i].onmouseover = this.toIndex.bind(this); 
            }

            // //额外加的随机背景颜色
            // for(var i = 0 ; i< this.show_list.length ; i++){
            //     this.show_list[i].style.background = (function(){
            //         var randomColor = "";
            //         randomColor = Math.round(parseInt("FFFFFF",16)*Math.random()).toString(16);
            //         if(randomColor .length != 6){
            //             arguments.callee()
            //         };
            //         return "#"+ randomColor;
            //     })()
            // }
            
        },
        next(){
            if(this.nowIndex == this.itmeNum - 1){
                //到了最后一张
                this.ul.style.left = 0
                this.nowIndex = 1 ;
            }else{
                this.nowIndex ++;
            }
            this.animate();
        },
        prev(){
            if(this.nowIndex == 0){
                this.ul.style.left = -(this.itmeNum - 1)*1550 +"px";
                this.nowIndex = this.itmeNum - 2;
                
            }else{
                this.nowIndex -- ;
            }
            this.animate(); 
        },
        toIndex(event){
            var e = event || Window.event;
            var target = e.target || e.srcElement;
            this.nowIndex = target.index;
            this.animate();
        },
        animate(){
            //console.log(this.nowIndex)
            //图片li的动画
            //this.ul.style.left = - this.nowIndex * 100 + "px";
            //jquery dom对象调用animate方法

            $(this.ul).stop().animate({
                left : -this.nowIndex *1550 ,
            })
            //按钮button的动画
            $(this.btn_list).removeClass("active")
            if(this.nowIndex == this.itmeNum -1 ){
                //图片有5张  按钮有4个   最后一个图片对应第一个按钮
                this.btn_list[0].className ="active"
            }else{
                this.btn_list[this.nowIndex].className ="active"
            }
        },
        // autoPlay(){
        //     this.autoTimer = setInterval(function(){
        //         this.next()
        //     }.bind(this),1000)
        // }
    })
var banner = new Banner();
banner.init();
//banner.autoPlay();