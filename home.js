no=document.querySelector(".content");
no1=document.querySelector(".txt");


setInterval(() => {
  if(window.innerHeight > window.innerWidth){
    no.style.visibility = "visible";
    no1.style.visibility = "hidden";
  }else{
    no.style.visibility = "hidden";
    no1.style.visibility = "visible";
  }
}, 100);
function btn()
{
  const val = document. querySelector('input'). value;

  if (val!="") {
  
    let a=val;
  localStorage.setItem("uname", a);
    console.log(val);
  btn = document.getElementById("btn1");
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
      location.replace("intro.html");
})
.catch(function(err) {
  console.log('No mic for you!')
  btn.textContent="Mic required sir";
});
  }else{
    alert("name required ")
  }
}
