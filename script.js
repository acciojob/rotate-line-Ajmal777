const line = document.getElementById('line');
let val = 90;
setInterval(()=>{
	line.style.transform = `rotate(${val}deg)`;
	val += 90;
},500);


