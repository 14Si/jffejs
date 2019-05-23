// ==UserScript==
// @name         KissAnime Script
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  hmmmmm
// @updateURL    https://github.com/14Si/jffejs/raw/master/KissAnimeScript.user.js
// @author       Silicon
// @match        https://kissanime.ru/Anime/*
// @grant        none
// ==/UserScript==

(function () {
    //     'use strict';
    //     document.querySelector("#btnNext").parentElement.href.concat("&s=beta2");



    // if (!window.location.href.endsWith(document.querySelector('#selectServer').lastChild.value)) {
    //     window.location.href = document.querySelector('#selectServer').lastChild.value
    // }

    var testj0 = document.querySelector("#adsIfrme > div > div > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)");
    if (window.location.href.endsWith("&reb=1")) {
        window.location.href = window.location.href.replace(/&s=nova&reb=1/gi, '&s=beta2');
    }
    
    if(testj0){
        testj0.href = testj0.href.concat("&s=beta2");
    
//         testj0.href=testj0.href.replace(/(id=\d+)/g,/(id=\d+)/g.exec(window.location.href)[0]);
    }
    
    
    setTimeout(function () {
        document.querySelector("#my_video_1 > div.vjs-control-bar > div.vjs-fullscreen-control.vjs-control").click()
    }, 100);

    var elemvid = document.querySelector('video');
    function video_skip_fn(skip_start_time_arg, skip_end_time) {
        let skip_start_time;
        if (skip_start_time_arg < 0) {
            skip_start_time = elemvid.duration + skip_start_time_arg;
        } else {
            skip_start_time = skip_start_time_arg;
        }
        elemvid.addEventListener('timeupdate', function () {
            if (skip_start_time < elemvid.currentTime) {
                if (elemvid.currentTime < skip_end_time) {
                    elemvid.currentTime = skip_end_time;
                    elemvid.removeEventListener('timeupdate', arguments.callee);
                }
            }
        });
        return;
    }

    function video_skip_fn_inc(skip_start_time, skip_inc_time) {
        video_skip_fn(skip_start_time, skip_start_time + skip_inc_time);
        return;
    }

    if (window.location.href.includes('Anime/Mayo-Chiki/')) {
        video_skip_fn(1330.514499, 1418.493547);
        if (window.location.href.includes('Episode-008')) {
            video_skip_fn_inc(97, 90);
        } else if (window.location.href.includes('Episode-009')) {
            video_skip_fn_inc(41, 90);
        }
    } else if (window.location.href.includes('Anime/Mahou-Sensei-Negima/')) {
        video_skip_fn_inc(1285, 90);
        video_skip_fn_inc(0, 90);

    } else if (window.location.href.includes('Anime/Ore-no-Kanojo-to-Osananajimi-ga-Shuraba-Sugiru/')) {
        if (window.location.href.includes('Episode-001')) {
            video_skip_fn_inc(29.537888, 90);
        } else if (window.location.href.includes('Episode-002')) {
            video_skip_fn_inc(102.231999, 90);
        } else if (window.location.href.includes('Episode-003')) {
            video_skip_fn_inc(97.126749, 90);
        } else if (window.location.href.includes('Episode-004')) {
            video_skip_fn_inc(26.249208, 90);
            video_skip_fn_inc(1298.18138, 90);
        } else if (window.location.href.includes('Episode-005')) {
            video_skip_fn_inc(24.298805, 90);
            video_skip_fn_inc(1315.665789, 90);
        } else if (window.location.href.includes('Episode-006')) {
            video_skip_fn_inc(31.35056, 90);
            video_skip_fn_inc(1268.438949, 90);
        }
    }

    var btnNext = document.querySelector('#btnNext');
    if (btnNext) {
        elemvid.addEventListener('ended', function () {
            btnNext.click()
        });
    }



    /*
    var elemvid=document.querySelector('video');
    [elemvid.currentTime,elemvid.currentTime-elemvid.duration]
    [1284.933416, -119.94349999999986]
    [1286.453834, -118.35342200000014]
    
    
        Episode-001
            video_skip_fn_inc(29.537888,90);
        Episode-002
            video_skip_fn_inc(102.231999,90);
        Episode-003
            video_skip_fn_inc(97.126749,90);
        Episode-004
            video_skip_fn_inc(26.249208,90);
            video_skip_fn_inc(1298.18138,90);
        Episode-005
    
    
    */

})();
