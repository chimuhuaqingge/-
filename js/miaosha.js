
var timer = setInterval(function(){
    var end = new Date("2018/11/1 00:00:00");      
    var endTime = end.getTime();
    //console.log(endTime)
    var now = new Date();
    var nowTime = now.getTime();
    //console.log(nowTime)
    var a = (endTime - nowTime)/1000;
    //console.log(a)
    var nDay = parseInt(a / 60 / 60 / 24);
    var nHour = parseInt(a / (60*60));
    //console.log(nHour);
    var nMinute = parseInt((a / 60) % 60);
    var nSecond = parseInt(a % 60);   
    if( a <= 0){
        clearInterval(timer);
        return 0;
    }
    if( nHour < 10){
        nHour = "0" + nHour
    }
    if( nMinute < 10){
        nMinute = "0" + nMinute;
    }
    if( nSecond < 10){
        nSecond = "0" + nSecond;
    }
    day.innerHTML = nDay;
    hours.innerHTML = nHour;
    minutes.innerHTML = nMinute;
    seconds.innerHTML = nSecond;
    //console.log(1);
},1000)
