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

/*导航高亮控件*/

function loadtitlecolor(){

	var topnav = document.getElementById('topnav');
	var a = topnav.getElementsByTagName('a');
	
	for(i=0;i<a.length;i++){
		$(a[i]).removeClass('active');
		if(window.location.href.indexOf(a[i].href)!=-1){
			$(a[i]).addClass('active');
		}
	}
	
}


addloadEvent(showme);
function showme(){
	$('aside .me a').mousemove(function(){
		$('aside .me span').css({
			'margin-top': '0'
		});

	});
	$('aside .me a').mouseout(function(){
		$('aside .me span').css({
			'margin-top': '63px'
		});

	})
}


/*设置时间和地区*/

function gettime(){
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getUTCMonth()+1;
	if(month<9){
		month='0'+month;
	}
	var date = time.getDate()>9?time.getDate():'0'+time.getDate();
	var hour = time.getHours()>9?time.getHours():'0'+time.getHours();
	var minute = time.getMinutes()>9?time.getMinutes():'0'+time.getMinutes();
	var str = year+'年'+month+'月'+date+'日'+hour+':'+minute;
	return str;

}

addloadEvent(getpos);
function getpos(){
	var time_location = document.getElementById('time_location');
	var span = time_location.getElementsByTagName('span');
	setInterval(function(){
		var time = gettime();
		span[0].innerHTML=time;

	}, 1000)
	
	 $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
            if (remote_ip_info.ret == '1') {
                
            	var loca = remote_ip_info.country+remote_ip_info.province+'省'+remote_ip_info.city+'市';
            	
            } else {
                var loca ='无法获取当前所在地区信息';
            }
           span[1].innerHTML=loca; 
        });

	 

}

