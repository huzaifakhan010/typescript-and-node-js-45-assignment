//Assignment number 16

let GuestNames = ["Huzaifa", "Ali", "Taha"];


let GuestNames2 = "Wahab";
GuestNames.unshift(GuestNames2);
console.log(GuestNames);

let middleGuest = "Bilal";
let middleIndex = GuestNames.length / 3;
GuestNames.splice(middleIndex, 0, middleGuest);
console.log(GuestNames);

GuestNames.push("Zain");
console.log(GuestNames);
GuestNames.map((items) =>
  console.log(
    `Dear ${items},we just found a bigger dinner table, so now dinner at our place tonight!
     Hope you can join us.`
  )
);
