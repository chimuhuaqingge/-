// 相见恨晚选项卡
function $(selector){
    var all = document.querySelectorAll(selector);
    if(all.length > 1) return all;
    return !all[0] ? null : all[0];
}
var details = $("#left-img").children;    //details：细节说明
var buttons = $("#btn2 button");
// 绑定事件;
for(var i = 0 ; i < buttons.length ; i ++ ){          //绑定事件
buttons[i].index = i;
buttons[i].onmouseover = function(){
    //alert("1")
    for(var i = 0 ; i < buttons.length ; i ++){       //清空元素classname
        buttons[i].className = "";
        details[i].className = "";
    }
    this.className = "active1";
    // 获取下标;
    var index = this.index;
    details[index].className = "active";
}   
}     