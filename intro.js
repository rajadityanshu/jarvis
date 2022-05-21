vid=document.getElementById("vid")
function btn()
{
    a=document.querySelector(".content");
    b=document.querySelector(".btn");
    vid.play();
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    setTimeout(() => {
       location.replace("jarvis.html");
    }, 20000);
}