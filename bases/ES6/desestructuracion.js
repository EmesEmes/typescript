"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123456
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision, resto);
    };
    printAvenger(avengers);
    const avengersArr = ['capitan america', 'ironman', 'hulk'];
    // const ironman = avengersArr[1];
    // console.log(ironman)
    const [capitan, ironman,] = avengersArr;
    console.log({ capitan, ironman });
})();
