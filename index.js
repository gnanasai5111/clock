
function displayTime(){
  var pd="AM";
  var d=new Date();
  var h=d.getHours();
  var m=d.getMinutes();
  var s=d.getSeconds();
  if(h>12){
    h=h-12;
    pd="PM"
  }
  if(h==0){
    h=12;
  }
  h=(h<10)?"0"+h:h;
  m=(m<10)?"0"+m:m;
  s=(s<10)?"0"+s:s;
    var show=h+":"+m+"."+s+pd;
  document.querySelector(".wrapper").innerHTML=show;
  setTimeout(displayTime, 1000);
}
