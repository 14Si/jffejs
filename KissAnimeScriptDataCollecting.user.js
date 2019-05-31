// ==UserScript==
// @name         KissAnime Data Collecting Script
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  hmmmmm
// @updateURL    https://github.com/14Si/jffejs/raw/master/KissAnimeScriptDataCollecting.user.js
// @author       Silicon
// @match        https://kissanime.ru/Special/AreYouHuman2*
// @grant        none
// ==/UserScript==

(function () {
    var stringout="";
    stringout+="{";
    for(let item of document.querySelectorAll('span[style="font-weight: bold; color: #d5f406"]')){
        stringout+=item.innerText;
        stringout+="; ";
    }
    stringout+="} ;; {";

    for(let item of document.querySelectorAll('img[indexvalue]')){
        stringout+=item.src;
        stringout+="; ";
    }
    stringout+="}";
    {
        let a = document.createElement('a');
        let item = 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringout);
        a.href = item;
        a.download = "data.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    

})();
