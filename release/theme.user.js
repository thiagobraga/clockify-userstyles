// ==UserScript==
// @name          Better Clockify
// @description   Some improvements for Clockify app and extension
// @version       0.0.1
// @author        Thiago Braga <contato@thiagobraga.org>
// @license       MIT
// @namespace     https://github.com/thiagobraga
// @homepageURL   https://github.com/thiagobraga/better-clockify-userstyles
// @supportURL    https://github.com/thiagobraga/better-clockify-userstyles/issues
// @updateURL     https://github.com/thiagobraga/better-clockify-userstyles/raw/master/release/theme.meta.js
// @downloadURL   https://github.com/thiagobraga/better-clockify-userstyles/raw/master/release/theme.user.js
// @run-at        document-start
// @include       http://todoist.com/*
// @include       https://todoist.com/*
// @include       http://*.todoist.com/*
// @include       https://*.todoist.com/*
// @include       http://clockify.me/*
// @include       https://clockify.me/*
// @include       http://*.clockify.me/*
// @include       https://*.clockify.me/*
// ==/UserScript==
(function() {var css = [
  "  .project__border,.timepicker .timepicker--hour,.tracker__time__entry--input{border:1px solid transparent}.task_item .clockify-button-inactive{display:none}.task_item:hover .clockify-button-inactive{display:initial}.theme_dark .clockify-button-active{-webkit-filter:contrast(45%);filter:contrast(45%)}.task_item .clockify-button-active,.task_item .clockify-button-inactive{padding:0 10px}",
  ""
].join("\n");
if (typeof GM_addStyle != "undefined") {
  GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
  PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
  addStyle(css);
} else {
  var node = document.createElement("style");
  node.type = "text/css";
  node.appendChild(document.createTextNode(css));
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
}
})();
