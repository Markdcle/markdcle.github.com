var timer;
		var btn = document.getElementById('btn');
		btn.onclick = function() { addBarrage();}
		document.onkeydown = function(evt) {var event = evt || window.event;if (event.keyCode == 13) {addBarrage();}}
		var colors = "grey";
		function addBarrage() {
			clearInterval(timer);
			var text = document.getElementById('text').value;
			document.getElementById('text').value = "";
			var index = parseInt(Math.random() * colors.length);
			var screenW = window.innerWidth;
			var height = 10 + 40 * (parseInt(Math.random() * 16) + 1);
			var size = parseInt(Math.random() * 30)+15;
			var span = document.createElement('span');
			span.style.left = screenW + 'px';
			span.style.top = 0.45*height + 'px';
			span.style.fontSize = colors[index];
			span.style.size = size + 'px';
			span.innerHTML = text;
			var dmDom = document.getElementById('dm');
			dmDom.appendChild(span);
			timer = setInterval(move, 20);
		}
		function move() {
			var arr=[];
			var oSpan=document.getElementsByTagName('span');
			for(var i=0;i<oSpan.length;i++){
				arr.push(oSpan[i].offsetLeft);
				arr[i] -= 2;
				oSpan[i].style.left = arr[i]+'px';
				if(arr[i]<-oSpan[i].offsetWidth){
					var dmDom=document.getElementById('dm');
					dmDom.removeChild(dmDom.childNodes[0]);
				}
			}
		}