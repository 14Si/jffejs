// ==UserScript==
// @name         KissAnime Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kissanime.ru/Anime/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//     document.querySelector("#btnNext").parentElement.href.concat("&s=beta2");



    if ( !window.location.href.endsWith(document.querySelector('#selectServer').lastChild.value) ) {
//         window.location.href=document.querySelector('#selectServer').lastChild.value
    }

    var testj0=document.querySelector("#adsIfrme > div > div > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)");

    testj0.href=testj0.href.concat("&s=beta2");

  setTimeout(function() {
      document.querySelector("#my_video_1 > div.vjs-control-bar > div.vjs-fullscreen-control.vjs-control").click()
  }, 100);



//     window.alert(testj0.href);
//     console.log(testj0.href);
    // Your code here...
})();