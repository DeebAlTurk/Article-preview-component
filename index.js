
window.addEventListener("load", start,false);
var share;
var shareMenuPhone ;
var shareButtons;
var shareMenuPC;
function start() {
    share = document.getElementById("share");
    shareMenuPhone = document.getElementById("socialMediaPhone");
    shareMenuPC =document.getElementById("socialMediaPC");
    shareButtons= document.getElementsByClassName("icon");
    shareButtons[0].addEventListener("click",()=>{window.open("http://facebook.com/")},false);
    shareButtons[1].addEventListener("click",()=>{window.open("https://twitter.com/?lang=en")},false);
    shareButtons[2].addEventListener("click",()=>{window.open("https://www.pinterest.com/")},false);
    share.addEventListener("click",showShare,false)
}
function showShare() {
    if (screen.width>1000){
        if(shareMenuPC.style.display==="inline"){
            shareMenuPC.style.display="none";
        }
        else {
            shareMenuPC.style.display="inline";
        }
    }
    else{
        if(shareMenuPhone.style.display==="block"){
            shareMenuPhone.style.display="none";
        }
        else {
            shareMenuPhone.style.display="block";
        }
    }
}

