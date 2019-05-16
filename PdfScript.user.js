// ==UserScript==
// @name         Pdf Script
// @namespace    http://tampermonkey.net/
// @version      0.4
// @updateURL    https://github.com/14Si/jffejs/raw/master/PdfScript.user.js
// @description  hmmmmmm
// @author       Silicon
// @match        https://arxiv.org/pdf/*
// @grant        none
// ==/UserScript==



(function() {
//     'use strict';
	

document.querySelector("head").outerHTML+=String.raw`<style>
.tooltipdiv:hover .mousetooltip {
    display: block;
}


.mousetooltip {
    display: none;
    position: absolute;
    background: #C8C8C8;
    margin-left: 16px;
    padding: 10px;
    position: absolute;
    z-index: 1000;
    /*width:200px;
    height:100px;*/
}

p {
  margin: 0;
  text-indent: 1.5em;
}
</style>`;

var pdfdiv=document.querySelector("#content");


var htmldoc=document.querySelector("html");

var tooltipelem=document.createElement("span");

tooltipelem.setAttribute("class","mousetooltip");

pdfdiv.setAttribute("class","tooltipdiv");

tooltipelem.innerHTML="tooltip";

pdfdiv.appendChild(tooltipelem);

var tooltip_jfe = document.querySelectorAll('.mousetooltip');

// function showCoords(e) {
//   var xc = e.clientX;
//   var yc = e.clientY;
//   // var xp = e.pageX;
//   // var yp = e.pageY;
//   // var coor = "client: <p>X coords: " + xc + ", Y coords: " + yc + "<br> page:<p> " + "X coords: " + xp + ", Y coords: " + yp;
//   var coor = "X coords: " + xc + ", Y coords: " + yc;
//   tooltipelem.innerHTML = coor;
// }

// function clearCoor() {
//   tooltipelem.innerHTML = "";
// }

function fntooltip(e) {
    // for (var i=tooltip_jfe.length; i--;) {
    //     tooltip_jfe[i].style.left = e.clientX + 'px';
    //     tooltip_jfe[i].style.top = e.clientY + 'px';
    //     // tooltip_jfe[i].style.left = (e.pageX ) + 'px';
    //     // tooltip_jfe[i].style.top = (e.pageY - htmldoc.scrollTop) + 'px';
    // }
    var x = e.clientX;
    var y = e.clientY;
    tooltipelem.style.left = x + 'px';
    tooltipelem.style.top = y + 'px';
    var coor = "X coords: " + x + ", Y coords: " + y;
    tooltipelem.innerHTML = coor;
    
}

document.addEventListener('mousemove', fntooltip, false);
document.addEventListener('scr', fntooltip, false);
// document.addEventListener('mousemove', showCoords, false);
// document.addEventListener('mouseout', clearCoor, false);

})();
