"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements 
//about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let transportation = ["Mustang", "Range Rover", "Ferrari", "Audi", "Lamborghini"];
transportation.map((item) => console.log(`I would like to own a ${item}`));
