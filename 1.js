var un = localStorage.getItem("uname");
n = document.getElementById("uname");
console.log(un);



n.innerHTML="Welcome Master "+un; 
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

function react() {
  console.log("donr boi");
}
function joke(){
  audio1 = new Audio("Joke 1.mp3");
  audio6 = new Audio("Joke 6.mp3");
  audio5 = new Audio("Joke 5.mp3");
  audio4 = new Audio("Joke 4.mp3");
  audio3 = new Audio("Joke 3.mp3");
  audio2 = new Audio("Joke 2.mp3");
 var x = Math.floor(Math.random () *6)+1;
console.log(x);
if (x==1) {
  audio1.play();

}else if (x==3) {
  audio2.play();
  
}else if (x==4) {
  audio3.play();
  
}
else if (x==5) {
  audio4.play();
  
}
else if (x==6) {
  audio5.play();
}
else {
  audio6.play();
}


}
function help() 
{
  let uname = document.querySelector(".uname");
  let uses1 = document.querySelector(".uses1");
  let uses = document.querySelector(".uses");
  uses1.style.visibility = "visible";
  uses.style.visibility = "visible";
  uname.style.visibility="hidden";
}
let uses2 = document.querySelector(".uses2");
function uses() {
  let uses2 = document.querySelector(".uses2");
  let uses = document.querySelector(".uses");
  uses2.style.visibility = "visible";
  uses.style.visibility = "hidden";
}
function closeuses() {
  let uses1 = document.querySelector(".uses1");
  let uses2 = document.querySelector(".uses2");
  uses2.style.visibility = "hidden";
  uses1.style.visibility = "hidden";
  uname.style.visibility="visible";
}

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const main = document.getElementsByTagName("main")[0];
  let listening = false;
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (typeof SpeechRecognition !== "undefined") {
    const recognition = new SpeechRecognition();

    const stop = () => {
      
      let e = document.getElementById("uname");
      uname =document.querySelector(".uname");
      uname.style.visibility="visible";
      recognition.stop();
      e.style.visibility="visible";
      lis.style.visibility = "hidden";
      let UserText = document.getElementById("result").textContent;
       UserText = UserText.toLowerCase();
       console.log(UserText);
      if (UserText.includes("instagram")) {
                say("Opening enstagram...");
                  window.open("https://www.instagram.com");
                  } else if (UserText.includes("youtube")) {
                    say("Opening Youtube...master"+un);
                    window.open("https://www.youtube.com");
                } else if (UserText.includes("whatsapp")) {
                 say("Opening whatsup..master"+un);
                 window.open("https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_ZA&gl=US")
                  } else if (UserText.includes("facebook") || UserText.includes("fb")) {
                   say("Opening facebook...master"+un);
                    window.open("https://www.facebook.com");
               }else if ((UserText.includes("thanks"))||(UserText.includes("thankyou"))||(UserText.includes("thank you"))) {
                 say("Welcome master"+un);
               }else if ((UserText.includes("day"))||(UserText.includes("date"))) {
                const d = new Date();
                let day = d.getDate();
                say("Sir ,Today  is ..."+d +"" +day)
               }else if (UserText.includes("joke")||UserText.includes("jokes")  ) {
                say("playing jokes from kapil sharma show sir..") 
                
                setTimeout(() => {
                  joke();
                }, 1000); 
               }else if (UserText.includes("close")) {
                 say("closing ...")
               setTimeout(() => {
                 location.replace("index.html")
               }, 2000);
                }else if (UserText.includes("abuse")){
                  say("bahanchood madharchoood laure bhag bhusdike")
                }
               else{
                 say("sorry ,i cant perform task: " + UserText);
                 }

    };

    const start = () => {
      let e = document.getElementById("uname");
      uname =document.querySelector(".uname");
      uname.style.visibility="hidden";
      e.style.visibility="hidden";
      recognition.start();
      lis.style.visibility = "visible";
    
    };

    const onResult = event => {
      result.innerHTML = "";
      for (const res of event.results) {
        const text = document.createTextNode(res[0].transcript);
        const p = document.createElement("p");
        if (res.isFinal) {
          p.classList.add("final");
        }
        p.appendChild(text);
        result.appendChild(p);
      }
    };
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.addEventListener("result", onResult);
    button.addEventListener("click", (event) => {
            listening ? stop() : start();
          listening = !listening;
      
        }); 

  } else {
    button.remove();
    const message = document.getElementById("message");
    message.removeAttribute("hidden");
    message.setAttribute("aria-hidden", "false");
  }
});
// window.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("button");
//   const result = document.getElementById("result");
//   lis = document.querySelector(".ss");
//   const main = document.getElementsByTagName("main")[0];
//   let listening = false;
//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;
//   if (typeof SpeechRecognition !== "undefined") {
//     const recognition = new SpeechRecognition();

//     const stop = () => {
//       recognition.stop();
//       lis.style.visibility = "hidden";
//       let UserText = document.getElementById("result").innerHTML;
//       UserText = UserText.toLowerCase();
//       console.log(UserText);
//       if (UserText.includes("instagram")) {
//             say("Opening enstagram...");
//             window.open("https://www.instagram.com");
//           } else if (UserText.includes("youtube")) {
//             say("Opening Youtube...");
//             window.open("https://www.youtube.com");
//           } else if (UserText.includes("the") && UserText.includes("time")) {
//             say("The time is: " + getCurrentTime());
//           } else if (UserText.includes("facebook") || UserText.includes("fb")) {
//             say("Opening facebook...");
//             window.open("https://www.facebook.com");
//           } else {
//             say("I cant perform task: " + UserText);
//           }
//          }

     
//     };

//     const start = () => {
//       recognition.start();
//       lis.style.visibility = "visible";
//     };

//     const onResult = (event) => {
//       result.innerHTML = "";

//       for (const res of event.results) {
//         const text = document.createTextNode(res[0].transcript);

//         const p = document.createElement("p");
//         if (res.isFinal) {
//           p.classList.add("final");
//         }
//         p.appendChild(text);
//         result.appendChild(p);
//       }
//     };

//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.addEventListener("result", onResult);
//     button.addEventListener("click", (event) => {
//       listening ? stop() : start();
//       listening = !listening;
//     }); 
function say(m) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();


  msg.voice = voices.filter(function(voice) { return voice.name == 'Google UK English Male'; })[0];
  msg.voiceURI = "native";
  msg.volume = 2;
  msg.rate = 1;
  msg.pitch = 1;
  msg.text = m;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
var speech_voices;
if ('speechSynthesis' in window) {  
 speech_voices = window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = function() {
 speech_voices = window.speechSynthesis.getVoices();
};
}
// }
// function handleResults(data) {
//   UserText = UserText.toLowerCase();
//   console.log(UserText);

//   ProcessCommand(text);
// }
// function ProcessCommand(UserText) {
//   if (UserText.includes("instagram")) {
//     Speak("Opening enstagram...");
//     window.open("https://www.instagram.com");
//   } else if (UserText.includes("youtube")) {
//     Speak("Opening Youtube...");
//     window.open("https://www.youtube.com");
//   } else if (UserText.includes("the") && UserText.includes("time")) {
//     Speak("The time is: " + getCurrentTime());
//   } else if (UserText.includes("facebook") || UserText.includes("fb")) {
//     Speak("Opening facebook...");
//     window.open("https://www.facebook.com");
//   } else {
//     Speak("I cant perform task: " + UserText);
//   }
// }
//

