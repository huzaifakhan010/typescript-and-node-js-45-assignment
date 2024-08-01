"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const mycar = createCar("Toyota", "Corolla", { color: "silver", year: "2024" });
console.log(mycar);
