<span class="glowblue" id="neko-time" style="display:block;font-size: 24px;padding-top: 10px;" ></span>

* THE IMAGE HERE MUST BE VALID OR IT WON'T TRIGGER THE ONLOAD WHICH BEGINS THE COUNTDOWN SEQUENCE*
* <span class="code">var event_time = new Date("March 29, 2024 25:00:00 GMT-05:00").getTime();</span> USE THIS TO ADJUST THE TIME END, ANY TIMEZONE IS VALID IF YOU SET THE GMT TO THE CORRECT VALUE *
<img onload='


var event_time = new Date("March 29, 2024 25:00:00 GMT-05:00").getTime();

var interval = window.setInterval(function() {
if(!document.getElementById("neko-time")){
window.clearInterval(interval);
return;
}

var t = Math.floor((event_time  - Date.now()) / 1000);

var d = "" + Math.floor(t / 60 / 60 / 24);
var h = "" + Math.floor(t / 60 / 60 % 24);
var m = "" + Math.floor(t / 60 % 60);
var s = "" + t % 60;

h = h.length == 2 ? h : "0" + h;
m = m.length == 2 ? m : "0" + m;
s = s.length == 2 ? s : "0" + s;

if(t < 0 ){
document.getElementById("neko-time").textContent = `00:00:00`;
} else{
document.getElementById("neko-time").textContent = `${d == "0" ? "" : (d + ":")}${h}:${m}:${s}`;
}


} , 1000);


var t = Math.floor((event_time  - Date.now()) / 1000);

var d = "" + Math.floor(t / 60 / 60 / 24);
var h = "" + Math.floor(t / 60 / 60 % 24);
var m = "" + Math.floor(t / 60 % 60);
var s = "" + t % 60;

h = h.length == 2 ? h : "0" + h;
m = m.length == 2 ? m : "0" + m;
s = s.length == 2 ? s : "0" + s;

if(t < 0 ){
document.getElementById("neko-time").textContent = `00:00:00`;
} else{
document.getElementById("neko-time").textContent = `${d == "0" ? "" : (d + ":")}${h}:${m}:${s}`;
}
' style="display:inline;width: 0;height: 0;" 
src="https://luna.kissu.moe/qa/src/1637468876024.png"
/>
