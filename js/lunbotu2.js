var aItem = document.querySelectorAll("#box1 li");
var oLeft = document.getElementById("left1");
var oRight = document.getElementById("right1");
var nowIndex = 0; // 当前显示的下标;



oRight.onclick = function(){
    //alert("1")
    //                 4;
    if(nowIndex == aItem.length - 1){
        nowIndex = 0;
    }else{
        nowIndex ++;
    }
    // console.log(nowIndex);// 1 2 3 4 0  
    
    // 动画效果;
    for(var i = 0 ; i < aItem.length ; i ++){
        aItem[i].className = "";
    }
    aItem[nowIndex].className = "active";
    
}
oLeft.onclick = function(){
    //alert("1")
    // nowIndex --;
    // console.log(nowIndex);
    if(nowIndex == 0){
        nowIndex = aItem.length - 1;
    }else{
        nowIndex --;
    }

    // 动画效果;
    for(var i = 0 ; i < aItem.length ; i ++){
        aItem[i].className = "";
    }
    aItem[nowIndex].className = "active";
    // span效果;
}




