//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
let person:string="Huzaifa Khan"

//in lowercase
console.log(person.toLowerCase());

//in  uppercase
console.log(person.toUpperCase());

//in titlecase
console.log(person.replace(/\b\w/g,c=>c.toUpperCase()));

