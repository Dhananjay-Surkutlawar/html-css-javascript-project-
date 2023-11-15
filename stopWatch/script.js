let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

setInterval(() => {
let curr=new Date();
hrs.innerHTML=(curr.getHours()<10?'0':'')+curr.getHours();;
min.innerHTML=(curr.getUTCMinutes()<10?'0':'')+curr.getUTCMinutes();
sec.innerHTML=(curr.getSeconds()<10?'0':'')+curr.getSeconds();

}, 1000);
