"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'large', text = ' "I love typescript" ') {
    console.log(`You have order a ${size} size shirt that says ${text}`);
}
make_shirt();
make_shirt(`medium`);
//different message;
make_shirt('small', ' "I need a big shirt to wear" ');
