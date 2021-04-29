function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));
 
   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}
// JavaScript Document
function qc_register(id, def) 
{ 
var obj = document.getElementById(id); 
if (!obj || !obj.hasChildNodes()) 
{ 
alert('ERROR: the object was not defined for #' + id + '#'); 
return; 
} 

// get head & body object 
var head = null; 
var body = null; 
for (var i = 0; i < obj.childNodes.length; i++) 
{ 
var node = obj.childNodes[i]; 
if (node.tagName == 'DIV') 
{ 
if (node.className == 'qc-head') 
head = node; 
else if (node.className == 'qc-body') 
body = node; 
} 
} 
if (!head) { alert('ERROR: head elements was not found for #' + id + '#'); return; } 
if (!body) { alert('ERROR: body elements was not found for #' + id + '#'); return; } 

// set action & default 
var items = head.getElementsByTagName('LI'); 
var datas = body.getElementsByTagName('DL'); 
if (items.length == 0) { alert('ERROR: empty set for head elements on #' + id + '#'); return; } 
if (items.length != datas.length) 
{ 
alert('ERROR: not equal between body.length and head.length for #' + id + '#'); 
return; 
} 

var total = items.length; 
if (typeof def == 'undefined') def = 0; 
else def = parseInt(def)%total; 
if (def < 0) def += total; 
for (var i = 0; i < total; i++) 
{ 
datas[i].style.display = (i == def ? '' : 'none'); 
items[i].className = (i == def ? 'current' : ''); 
items[i].onmouseover = function() { 
for (var k = 0; k < total; k++) 
{ 
datas[k].style.display = (this == items[k] ? '' : 'none'); 
items[k].className = (this == items[k] ? 'current' : ''); 
} 
} 
} 
} 
