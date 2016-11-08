function addloadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload!='function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addloadEvent(loadtitlecolor)
function loadtitlecolor(){

	var topnav = document.getElementById('topnav');
	var a = topnav.getElementsByTagName('a');
	console.log(window.location.href)
	for(i=0;i<a.length;i++){
		$(a[i]).removeClass('active');
		if(window.location.href.indexOf(a[i].href)!=-1||window.location.href=='https://309166513.github.io/'){
			$(a[i]).addClass('active');
		}
	}
	
}