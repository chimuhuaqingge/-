$('.Hovering').hover(function(){
    //alert();
   // $(this).find('.first').css("color","red");
    $(this).find("ul").css("display","block");
},function(){
    $(this).find("ul").css("display","none");
})
$('.first').hover(function(){
    $(this).css("color","red");
},function(){
    $(this).css("color","");
})
$(".aside li").hover(function(){
    $(this).find('a').css("color","red");
},function(){
    $(this).find('a').css("color","");
})
$(".li5-aside li p").mouseenter(function(){
    // alert()
    $(this).find('a').css("color","red");
})
$(".li5-aside li p").mouseleave(function(){
    // alert()
    $(this).find('a').css("color","");
})

// 侧面二级菜单
$(".type-li1").mouseenter(function(){
    //alert();
    $(this).siblings(".shop-type").css("display","block");
})
// $(".type-li1").mouseleave(function(){
//     //alert();
//     $(this).siblings(".shop-type").css("display","none");
// })