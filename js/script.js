function changeColor(color){ 

var p=document.getElementsByTagName("p");
for(var i=0;i<p.length;i++){

	p[i].setAttribute("style","font-color: white");
}
}