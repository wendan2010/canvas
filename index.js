/*
* @Author: Administrator
* @Date:   2018-07-30 11:54:59
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-30 15:53:30
*/

'use strict';

function getXY(canvas,x,y){
	let rect=canvas.getBoundingClientRect();

	return {
        x: x - rect.left * (canvas.width/rect.width),
        y: y - rect.top * (canvas.height/rect.height)
    }
}