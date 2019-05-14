// ==UserScript==
// @name         Arxiv.org Script
// @namespace    http://tampermonkey.net/
// @version      0.4.5
// @description  try to take over the world!
// @author       Jeffe
// @match        https://arxiv.org/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==



(function() {
//     'use strict';
function arrayUnique(arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};

function setCookiejffe(cname, cvalue) {
  GM_setValue(cname,arrayUnique(cvalue));
  console.log("cookie Set!");
}

function getCookiejffe(cname) {
    return GM_getValue(cname, []);
}

function toidjffe(str) {
    return ('b'+str.replace('.', 'c'));
}

function fromidjffe(str) {
    return (str.replace('c', '.').substr(1));
}
// function setCookiejffe(cname, cvalue) {
//   var d = new Date();
//   d.setTime(d.getTime() + (365*24*60*60*1000));
//   var expires = "expires="+ d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires;
// }

// function getCookiejffe(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i <ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length).split(",");
//     }
//   }
//   return [];
// }

// function deleteCookiesjffe(){
//   document.cookie="id_lst_jffe= ;expires = Thu, 01 Jan 1970 00:00:00 GMT"
// }



var id_lst_jffe = getCookiejffe('id_lst_jffe');

function btnclickjffe(zEvent) {
      console.log("btnclickjffe called" + fromidjffe(this.getAttribute('id')));
      id_lst_jffe = getCookiejffe('id_lst_jffe');
      id_lst_jffe.push(fromidjffe(this.getAttribute('id')));
      setCookiejffe('id_lst_jffe',id_lst_jffe);

};

var page_type_jffe = window.location.href.split('/')[3];

if (page_type_jffe=="list"){
  document.querySelector("#header").outerHTML+=String.raw`<style>
hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
</style>`;
  for (let elem_jffe of document.getElementsByTagName("dt")) {
    let add_id_jffe = document.createElement("BUTTON");

    let article_ID_jffe=elem_jffe.lastElementChild.firstElementChild.href.split('/')[4];

    add_id_jffe.innerHTML="Add Article ID: "+article_ID_jffe;

    add_id_jffe.setAttribute('id',toidjffe(article_ID_jffe));

    elem_jffe.firstElementChild.outerHTML=("<br><hr>"+elem_jffe.firstElementChild.outerHTML);

    elem_jffe.lastElementChild.appendChild(add_id_jffe);

    add_id_jffe.outerHTML=("&nbsp&nbsp&nbsp"+add_id_jffe.outerHTML);
    let myDiv = document.querySelector("#"+toidjffe(article_ID_jffe));
    if (myDiv) {
        myDiv.addEventListener ("click", btnclickjffe , false);
    }
  };
} else if (page_type_jffe=="abs") {
  let add_id_jffe = document.createElement("BUTTON");

  let article_ID_jffe=window.location.href.split('/')[4];

  add_id_jffe.innerHTML="Add Article ID: "+article_ID_jffe;
  add_id_jffe.setAttribute('id',toidjffe(article_ID_jffe));

  let abs_elem_jffe=document.querySelector("#abs > h1");


  abs_elem_jffe.appendChild(add_id_jffe);

  add_id_jffe.outerHTML="<br>"+add_id_jffe.outerHTML;

  let myDiv = document.querySelector("#"+toidjffe(article_ID_jffe));
    if (myDiv) {
        myDiv.addEventListener ("click", btnclickjffe , false);
    }
} else {

}

})();
