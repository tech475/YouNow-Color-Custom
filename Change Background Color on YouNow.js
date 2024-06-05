// ==UserScript==
// @name         Change Background Color on YouNow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes the background color of YouNow to a specified hexadecimal color
// @author       tech475
// @match        https://www.younow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Specify the hexadecimal color you want to use
    var color = '#0A133C'; // Blue

    // Change the background color of the website
    document.body.style.backgroundColor = color;
})();