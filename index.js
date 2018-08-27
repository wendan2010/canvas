/*
* @Author: Administrator
* @Date:   2018-07-30 11:54:59
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-26 14:01:30
*/

'use strict';

let drawing=document.getElementById('drawing');
let context=drawing.getContext('2d');
let width=context.canvas.width;
let height=context.canvas.height;
let r=width/2;
//画1-12数字
function drawNum(){
	let num=[3,4,5,6,7,8,9,10,11,12,1,2];
	let deg=2*Math.PI/12;
	num.forEach((n,i)=>{
		let x=(r-30)*Math.cos(i*deg);
		let y=(r-30)*Math.sin(i*deg);
		context.fillText(n,x,y)
	})
}
//画刻度
function drawDrag(){
	context.font='10px Arial';
	let deg=2*Math.PI/60;
	let dragW=10;
	let dragH=5;
	Array.from(new Array(60)).forEach((_,i)=>{
		if(i%5){
			let x=(r-30)*Math.cos(i*deg);
			let y=(r-30)*Math.sin(i*deg);
			context.arc(x,y,15,0,2*Math.PI,false)
			// context.rotate(i*deg)
			context.stroke()
		}
	})
}

function drawBackground(){
	context.translate(r,r);
	context.beginPath();
	context.lineWidth=10;
	context.arc(0,0,r-5,0,2*Math.PI,false);
	context.stroke()

	
	context.font='40px Arial';
	context.textAlign='center';
	context.textBaseline='middle';

	drawNum();//画1-12数字
	drawDrag();//画刻度
	
}
drawBackground()