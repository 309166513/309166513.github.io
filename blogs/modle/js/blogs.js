function showtit(){
	var tit= document.getElementsByClassName('tit')[0];
	var blog_tit = document.getElementsByClassName('blog_tit')[0];
	tit.innerHTML=blog_tit.innerHTML;
}

addloadEvent(showtit);


addloadEvent(movenav);
function movenav(){
	var side_nav = document.getElementById('side_nav');

	var x = side_nav.offsetLeft;
	var y = side_nav.offsetTop;
	var oriy = $('#side_nav').offset().top;
	$('#side_nav').css({
		'position': 'absolute',
		'top':y+'px',
		'left':x+'px',
		'margin-top':'0'
	});
	$(window).scroll(function(){
		var scrolT= document.documentElement.scrollTop||document.body.scrollTop;
		if(scrolT>=oriy){
			$('#side_nav').css({
				'top':y+scrolT+'px',
			});
		}else{
			$('#side_nav').css({
			'position': 'absolute',
			'top':y+'px',
			'left':x+'px',
			'margin-top':'0'
	});
		}
		
	})
}
/*代码高亮*/
SyntaxHighlighter.all()