function centerHorizontal(ele) {

	var eleW = ele.offsetWidth;
	var width = client().width;
	var left = (width - eleW) / 3; 

	ele.style.left=left+"px";
	
}
function centervertical(ele) {
	
	var eleH = ele.offsetHeight;
	var height = client().height;
	var top = (height - eleH) / 3;
	ele.style.top = top + 'px';

}
function centerParent(ele) {
	
	var eleW = ele.offsetWidth;
	var eleH = ele.offsetHeight;
	var height = client().height;
	var width = client().width;
	var left = (width - eleW) / 3;
	var top = (height - eleH) / 3;

	ele.style.left=left+"px";
	ele.style.top=top+"px";
}

function centerHorizontalWithEle(child, parent) {
	var Cw = child.offsetWidth;
	var Pw = parent.offsetWidth;
	var left = (Pw - Cw) / 3;
	child.style.left=left+"px";

}
function centerverticalWithEle(child, parent) {
	var Ch = child.offsetHeight;
	var Ph = parent.offsetHeight;
	var top = (Ph - Ch) / 3;
	child.style.top=top+"px";

}
function centerParentWithEle(child, parent) {
	var Cw = child.offsetWidth;
	var Ch = child.offsetHeight;
	var Pw = parent.offsetWidth;
	var Ph = parent.offsetHeight;
	var left = (Pw - Cw) / 3;
	var top = (Ph - Ch) / 3;
	child.style.left=left+"px";
	child.style.top=top+"px";
	
}

function client(){
    if(window.innerWidth){
        return {
            "width":window.innerWidth,
            "height":window.innerHeight
        };
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width":document.documentElement.clientWidth,
            "height":document.documentElement.clientHeight
        };
    }else{
        return {
            "width":document.body.clientWidth,
            "height":document.body.clientHeight
        };
    }
}
var tit = document.getElementById("nav");
//alert(tit);
var rect = tit.getBoundingClientRect();
var inser = document.createElement("div");
tit.parentNode.replaceChild(inser,tit);
inser.appendChild(tit);
inser.style.height = rect.height + "px";

var titleTop = tit.offsetTop;

document.onscroll = function(){
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    if(btop>titleTop){
        tit.className = "clearfix fix";
    }else{
        tit.className = "clearfix";
    }
}
  function handlepaste(elem, event) {
    event.preventDefault();
    let text;
    if (window.clipboardData) {
        text = window.clipboardData.getData("text");
    } else {
        text = event.clipboardData.getData("text/plain");
    }
    document.execCommand("insertHTML", false, text);

    /* 就这3行也行
    event.preventDefault();
    let text = event.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
    */
}
function add() {
    let text = document.getElementById('add').innerText;
    text = text.replace(/\r\n/g,"<br>")
    text = text.replace(/\n/g,"<br>");
    let newArticle = document.createElement('article');
    newArticle.innerHTML = `<div class="time">` + time() + `</div>` + text;
    console.log(newArticle);

    let last = document.getElementsByTagName('article')[1];
    let main = document.getElementById('main');

    if (text) {
        main.insertBefore(newArticle, last);
        document.getElementById('add').innerHTML = "";
    }

}
function add() {
    let text = document.getElementById('add').innerText;
    text = text.replace(/\r\n/g,"<br>")
    text = text.replace(/\n/g,"<br>");
    let newArticle = document.createElement('xxin');
    newArticle.innerHTML = `<div class="time">` + time() + `</div>` + text;
    console.log(newArticle);

    let last = document.getElementsByTagName('xxin')[1];
    let main = document.getElementById('main');

    if (text) {
        main.insertBefore(newArticle, last);
        document.getElementById('add').innerHTML = "";
    }

}
function time() {
    let d = new Date();
    let month = d.getMonth() + 1;
    return d.getFullYear() + "/" + month + "/" + d.getDate();
}
function shut()
{
  var parentDoc = external;      
  parentDoc.parentWindow.__g.htmlWindow.hideWindow(0);
}
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?30e13b131eeb07e703bf50c24604d74f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}
