function drawWidth(i) {
	if(i == 0) {
		context.moveTo(x + 5, 7);
		context.lineTo(x + 25, 7);
		context.stroke();
	} else if(i == 1) {
		context.moveTo(x + 5, 30);
		context.lineTo(x + 25, 30);
		context.stroke();
	} else {
		context.moveTo(x + 5, 53);
		context.lineTo(x + 25, 53);
		context.stroke();
	}
}
function drawHeight(i) {
	if(i == 0) {
		context.moveTo(x + 7, 5);
		context.lineTo(x + 7, 30);
		context.stroke();
	} else if(i == 1) {
		context.moveTo(x + 7, 30);
		context.lineTo(x + 7, 55);
		context.stroke();
	} else if(i == 2) {
		context.moveTo(x + 23, 5);
		context.lineTo(x + 23, 30);
		context.stroke();
	} else {
		context.moveTo(x + 23, 30);
		context.lineTo(x + 23, 55);
		context.stroke();
	}
}
function drawNum(i) {
	var num = 0;
	if(i == 0) {
		x = 30;
		num = Math.floor((now.getHours() % 12) / 10);
	} else if(i == 1) {
		x = 60;
		num = (now.getHours() % 12) % 10;
	} else if(i == 2) {
		x = 105;
		num = Math.floor(now.getMinutes() / 10);
	} else {
		x = 135;
		num = now.getMinutes() % 10;
	}
	switch(num) {
	case 0:
		drawWidth(0);
		drawWidth(2);
		drawHeight(0);
		drawHeight(1);
		drawHeight(2);
		drawHeight(3);
		break;
	case 1:
		drawHeight(2);
		drawHeight(3);
		break;
	case 2:
		drawWidth(0);
		drawWidth(1);
		drawWidth(2);
		drawHeight(1);
		drawHeight(2);
		break;
	case 3:
		drawWidth(0);
		drawWidth(1);
		drawWidth(2);
		drawHeight(2);
		drawHeight(3);
		break;
	case 4:
		drawWidth(1);
		drawHeight(0);
		drawHeight(2);
		drawHeight(3);
		break;
	case 5:
		drawWidth(0);
		drawWidth(1);
		drawWidth(2);
		drawHeight(0);
		drawHeight(3);
		break;
	case 6:
		drawWidth(0);
		drawWidth(1);
		drawWidth(2);
		drawHeight(0);
		drawHeight(1);
		drawHeight(3);
		break;
	case 7:
		drawWidth(0);
		drawHeight(2);
		drawHeight(3);
		break;
	case 8:
		drawWidth(0);
		drawWidth(1);
		drawWidth(2);
		drawHeight(0);
		drawHeight(1);
		drawHeight(2);
		drawHeight(3);
		break;
	case 9:
		drawWidth(0);
		drawWidth(1);
		drawWidth(2);
		drawHeight(0);
		drawHeight(2);
		drawHeight(3);
		break;
	}
}
function timer() {
	now = new Date();
	if(last != now.getMinutes()){
		delay = 60000;
	}
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.moveTo(95, 15);
	context.lineTo(95, 25);
	context.moveTo(95, 35);
	context.lineTo(95, 45);
	if(now.getHours() > 12){
		context.fillText("PM", 0, 55);
	} else {
		context.fillText("AM", 0, 25);
	}
	for(var i = 0; i < 4; i++){
		drawNum(i);
	}
	context.stroke();
	setTimeout(timer, delay);
}
var header = document.getElementById('header');
var nav = document.getElementById('nav');
var canvas = document.createElement('canvas');
var body = document.getElementById('body');
var context = canvas.getContext("2d");
var now = new Date();
var last = now.getMinutes();
var delay = 1000;
var x = 0;
var y = 0;
canvas.style.position = "fixed";
canvas.style.bottom = "5px";
canvas.style.left = "5px";
canvas.style.zIndex = 2;
canvas.width = 165;
canvas.height = 60;
context.strokeStyle = "black";
context.lineWidth = 5;
context.font = "20px arial";
body.appendChild(canvas);
header.onmouseenter = function(){
	nav.style.visibility = 'visible';
}
header.onmouseleave = function() {
	nav.style.visibility = 'hidden';
}
timer();