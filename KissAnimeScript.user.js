// ==UserScript==
// @name         KissAnime Script
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  hmmmmm
// @updateURL    https://github.com/14Si/jffejs/raw/master/KissAnimeScript.user.js
// @author       Silicon
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
    if(window.location.href.endsWith("&reb=1")){
       window.location.href=window.location.href.replace(/&s=nova&reb=1/gi,'&s=beta2');
    }
    testj0.href=testj0.href.concat("&s=beta2");

  setTimeout(function() {
      document.querySelector("#my_video_1 > div.vjs-control-bar > div.vjs-fullscreen-control.vjs-control").click()
  }, 100);


    var intro_start_time=-1;
    var intro_end_time=-1;
    function video_intro_fn(){
        if(intro_start_time<video.currentTime){
            if(video.currentTime<intro_end_time){
                video.currentTime=intro_end_time;
                video.removeEventListener("timeupdate",video_intro_fn);
            }
        }
    }

    if(window.location.href.includes('Mahou-Sensei-Negima')){
        intro_start_time=0;
        intro_end_time=90;
        video.addEventListener("timeupdate",video_intro_fn);
    }

//     window.alert(testj0.href);
//     console.log(testj0.href);
    // Your code here...
})();
