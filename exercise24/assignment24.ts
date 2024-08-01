//Assignment Number 24
let num_1:string=" Huzaifa"
let num_2:string=" Huzaifa Khan"
let num_3:string="Muhammad Huzaifa Khan"


if (num_1 == num_3){
    console.log(`names are equal`)
}else{
    console.log(`names are not equal`)
}

if(num_1!= num_2){
    console.log("names are equal")
}
if(num_1!= num_3){
    console.log("names are equal")
}

let age_1= 18
let age_2= 22
if(age_1==18){
    console.log("eligible for vote")
}

if(age_1!=22){
    console.log("eligible for older category")
}

if(age_1<=age_2){   //less
    console.log("Younger")
}

if(age_2>=age_1){    //greater
    console.log("Older")
}

if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}
if (age_1 == 18 || age_2 == 22){
    console.log("person is not eligible for vote")
}

let city:string[]=["lahore","karachi","islamabad","hyderabad"]
if(city.includes("lahore")){
    console.log("lahore is in the list")
}

if(!city.includes("mirpurkhas")){
    console.log("This city is not included")
}