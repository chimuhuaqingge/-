        var ologinId=document.getElementById("loginId");
        
        var opassword=document.getElementById("password");
        
        var oBtn=document.getElementById("Submit");
        
        oBtn.onclick=function(){
            $.ajax({
            url:"http://localhost/1815/0918ajax/php/load.php",
            type:"GET",
            data:`username=${ologinId.value}&password=${opassword.value}`,
            datatype:"html",
            success:function(res){
                alert(res)
            }
        })

        }