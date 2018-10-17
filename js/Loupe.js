function $(selector){
    var all = document.querySelectorAll(selector);
    if(all.length > 1) return all;
    return !all[0] ? null : all[0];
}
var details = $(".goods-display").children;    //details：细节说明
var buttons = $(".goods-button li");
// 绑定事件;
for(var i = 0 ; i < buttons.length ; i ++ ){          //绑定事件
buttons[i].index = i;
buttons[i].onmouseover = function(){
    for(var i = 0 ; i < buttons.length ; i ++){       //清空元素classname
        buttons[i].className = "";
        details[i].className = "";
    }
    this.className = "active";
    // 获取下标;
    var index = this.index;
    details[index].className = "active";
}   
}    



// 放大镜

var oSmall = document.getElementById("small");
var oSmallImg = oSmall.children[2]
// 小框;
var oFrame = document.getElementById("frame");
// 大框
var oBig = document.getElementById("big");
var oBigImg = oBig.children[0];
// var oBigImg1 = oBig.children[1];
// var oBigImg2 = oBig.children[2];

oSmall.onmouseenter = function(){
    // 小框和大图都显示出来;
    oBig.style.display = "block";
    oFrame.style.display = "block";
    oSmallImg.style.opacity = 0.3;
}
oSmall.onmouseleave = function(){
    // 小框和大图都隐藏;
    oBig.style.display = "none";
    oFrame.style.display = "none";
    oSmallImg.style.opacity = 1;
}
// 鼠标跟随事件
oSmall.onmousemove = function(event){
    // 1. 获取定位的x,y 值;
    var e = event || window.event;
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;
    // 2. 给元素设置的left 值 和top值;
    var nLeft = offsetX  - 50;
    var nTop = offsetY - 50;
    // 边界检测;  最小值 ; 最大值;
    
    // 最小值;
    nLeft = nLeft < 0 ? 0 : nLeft;
    nTop = nTop < 0 ? 0 : nTop;

    // 最大值;
    var maxLeft = oSmall.offsetWidth - oFrame.offsetWidth;
    var maxTop = oSmall.offsetHeight - oFrame.offsetHeight;
    
    nLeft = nLeft > maxLeft ? maxLeft : nLeft;
    nTop = nTop > maxTop ? maxTop : nTop;

    oFrame.style.left = nLeft +"px";
    oFrame.style.top = nTop +  "px";

    // 边界检测;
    
    // 比例 已知 是4;
    // 比例分成两部分;
    var propX = oBig.offsetWidth / oFrame.offsetWidth;
    var propY = oBig.offsetHeight / oFrame.offsetHeight;

    //console.log(propX,propY);
    
    oBigImg.style.left = -nLeft * propX + "px";
    oBigImg.style.top = -nTop * propY + "px";
    //console.log(oBigImg.style.left,oBigImg.style.top)
    oFrame.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
}	