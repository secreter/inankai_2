function so_slider(id){
		var slider=document.getElementById(id);
		var ul=slider.getElementsByTagName("ul")[0];
		var lis=ul.children;
		var spans=slider.nextElementSibling.children;
		var num=0;
		var speed=6;
		var during=3000;
		var timeHander=start();
		function init(){
			for(var i=0;i<lis.length;i++){
				lis[i].style.top=0;
				lis[i].style.left=i*100+"%";
			}
			for(var i=0;i<spans.length;i++){
				spans[i].onclick=dotsClick;
				spans[i].onmouseover=function(){
					clearInterval(timeHander);
				}
				spans[i].onmouseout=function(){
					timeHander=start();
				}
			}
		}
		function dotsClick(){
			for(var i=0;i<spans.length;i++){
				if (spans[i]==this) {
					slide(i,num);
					num=i;
					dots(num);
				}
			}
		}
		function dots(num){
			for(var i=0;i<lis.length;i++){
				// console.log(spans[i]);
				if (i==num) {
					spans[i].style.opacity=1;
				}else{
					spans[i].style.opacity=0.6;
				}

			}
			
		}
		function start(){
			return setInterval(function(){
				curNum=num;
				nextNum=num=(num+1)%lis.length;
				dots(nextNum);
				slide(nextNum,curNum);
			},during);
		}
		function slide(nextNum,curNum){
			var pos=curNum*100;
			var step=nextNum-curNum;
			var i=100;
			var posHander=setInterval(function(){
				pos=pos+step;
				i--;
				if (i<0) {
					i=0;
					clearInterval(posHander);
				}else{
					position=pos;
					ul.style.left='-'+position+"%";
				}
				
			},speed);
		}
		
		slider.onmouseover=function(){
			clearInterval(timeHander);
		}
		slider.onmouseout=function(){
			timeHander=start();
		}
		init();
	}