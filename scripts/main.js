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
window.onload=function(){
    showBlogContent();
}