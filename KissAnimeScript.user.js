// ==UserScript==
// @name         KissAnime Script
// @namespace    http://tampermonkey.net/
// @version      1.1
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


    function video_skip_fn(skip_start_time,skip_end_time){
        video.addEventListener('timeupdate',function(){
            if(skip_start_time<video.currentTime){
                if(video.currentTime<skip_end_time){
                    video.currentTime=skip_end_time;
                    video.removeEventListener('timeupdate',arguments.callee);
                }
            }
        });
        return;
    }

    function video_skip_fn_inc(skip_start_time,skip_inc_time){
        video_skip_fn(skip_start_time,skip_start_time+skip_inc_time);
        return;
    }

    if(window.location.href.includes('Anime/Mayo-Chiki/')){
        video_skip_fn(1330.514499,1418.493547);
        if(window.location.href.includes('Episode-008')){
            video_skip_fn_inc(97,90);
        } else if(window.location.href.includes('Episode-009')){
            video_skip_fn_inc(41,90);
        }
    } else if(window.location.href.includes('Anime/Mahou-Sensei-Negima/')){
        video_skip_fn(0,90);
    } else if(window.location.href.includes('Anime/Ore-no-Kanojo-to-Osananajimi-ga-Shuraba-Sugiru/')){
        if(window.location.href.includes('Episode-001')){
            video_skip_fn_inc(29.537888,90);
        } else if(window.location.href.includes('Episode-002')){
            video_skip_fn_inc(102.231999,90);
        } else if(window.location.href.includes('Episode-003')){
            video_skip_fn_inc(97.126749,90);
        } else if(window.location.href.includes('Episode-004')){
            video_skip_fn_inc(26.249208,90);
            video_skip_fn_inc(1298.18138,90);
        } else if(window.location.href.includes('Episode-005')){
            video_skip_fn_inc(24.298805,90);
            video_skip_fn_inc(1315.665789,90);
        } else if(window.location.href.includes('Episode-006')){
            video_skip_fn_inc(31.35056,90);
            video_skip_fn_inc(1268.438949,90);
        }
    }

//     window.alert(testj0.href);
//     console.log(testj0.href);
    // Your code here...
})();
