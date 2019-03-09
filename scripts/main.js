function showBlogContent(){
    if(!document.querySelectorAll(".blog"))
        return false;
    let blogs=document.querySelectorAll(".blog");
    for(let i=0;i<blogs.length;i++){
        let url=blogs[i].querySelector("a").href;
        let xhr=new XMLHttpRequest();
        xhr.open("get",url,false);
        xhr.send(null);
        if(xhr.status>=200 && xhr.status<300 || xhr.status == 304){
            content=xhr.responseText;
        }
        else{
            alert("博客资源请求失败");
            return false;
        }
        let start=content.indexOf("<p>");
        let end=content.indexOf("</p>");
        let paraContent=content.substring(start+3,end);
        let para=document.createElement("p");
        para.innerHTML=paraContent;
        para.style.color="gray";
        para.style.height="100px";
        para.style.overflow="hidden";
        blogs[i].appendChild(para);

    }
}
let num=5;
function resumeSlide(){
    $(".resume:not(#education)").hide();
    $("#aboutArticle #pre").hide();
    $("#aboutArticle #pre").click(
        function(){
            num++;
            if(num==5){
                $("#aboutArticle #pre").hide();
            }else{
                $("#aboutArticle img").show();
            }
            $(".resume:eq("+num+")").fadeIn(1000);
            $(".resume:eq("+(num-1)+")").hide(1000);
            //$(".resume:not(:eq("+num+"))").hide();
        });
    $("#aboutArticle #next").click(
        function(){
            num--;
            if(num==0){
                $("#aboutArticle #next").hide();
            }else{
                $("#aboutArticle img").show();
            }
            $(".resume:eq("+num+")").fadeIn(1000);
            //$(".resume:eq("+(num-1)+")").animate({right:"+=500px"},3000);
            $(".resume:eq("+(num+1)+")").hide(1000);
            //$(".resume:not(:eq("+num+"))").hide();
        });
}
//登录功能
/*
$("#loginButton").click(
    function () {
        if($("#loginForm #user").val()==""||$("#loginForm #password").val()==""){
            alert("用户名或密码不能为空!");
            return false;
        }
        let flag=true;
        $.ajax({
            url:"loginMessage.json",
            type:"get",
            dataType:"json",
            async:false,
            success:function(data){
                if($("#loginForm #user").val()==data["user"]&&
                $("#loginForm #password").val()==data["password"]){
                    alert("登陆成功");
                    $("#loginForm #user").val("");
                    $("#loginForm #password").val("");
                    flag=true;
                }else{
                    alert("密码或用户名错误，请重新登录");
                    $("#loginForm #user").val("");
                    $("#loginForm #password").val("");
                    flag=false;
                }
            }
            }
        )
        return flag;
    }
)
*/
//用Promise实现ajax
function ajax(url,type){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.send();
        xhr.onreadystatechange=function (){
            if(xhr.readyState==4){
                if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                    let response=JSON.parse(xhr.responseText);
                    resolve(response);
                }
                else{
                    reject(new Error(xhr.statusText));
                }
            }
        }
    })
}
function addLoginEvent(){
    if(document.getElementById("loginButton")){
        document.getElementById("loginButton").onclick=function(){
            ajax("loginMessage.json","get").then(function (response) {
                if($("#loginForm #user").val()==response["user"]&&
                    $("#loginForm #password").val()==response["password"]){
                    alert("登陆成功");
                    $("#loginForm #user").val("");
                    $("#loginForm #password").val("");
                    let event=new MouseEvent('click',{
                            cancelable:true,
                            bubbles:true,
                            view:window
                        }
                    );
                    document.querySelector("#realLoginButton").dispatchEvent(event);

                }else{
                    alert("用户名或密码错位，请重新登录");
                    $("#loginForm #user").val("");
                    $("#loginForm #password").val("");
                }
            });
            return false;
        }

    }
}

$(document).ready(
    showBlogContent()
);
$(document).ready(
    resumeSlide()
);
$(document).ready(
  addLoginEvent()
);