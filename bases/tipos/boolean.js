"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    isSuperman = isBatman ? false : true;
    console.log({ isSuperman });
})();
