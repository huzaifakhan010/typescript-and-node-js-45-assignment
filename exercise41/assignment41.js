"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = void 0;
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
exports.show_magicians = show_magicians;
const magician = ["huzaifa", "wasi", "sami"];
show_magicians(magician);
