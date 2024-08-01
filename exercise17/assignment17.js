"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// assignment number 17
let _guest = ["Wahab", "Bilal", "Huzaifa", "Ali", "Taha", "Zain"];
while (_guest.length > 2) {
    let removeguest = _guest.pop();
    console.log(`Sorry,${removeguest}, but I am unable to invite you owing to an unfortunate circumstance.`);
}
_guest.forEach((_guest) => {
    console.log(`Hey,${_guest}. You are still invited to dinner.`);
});
_guest.pop();
_guest.pop();
console.log(_guest);
