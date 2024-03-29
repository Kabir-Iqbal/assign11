"use strict";
//11. Names: 
//Store the names of a few of your friends in an array called names. Print each person’s name by 
//accessing each element in the list, one at a time
let names = ["Kabir", "Iqbal", "Ali", "Rehman", "Hamza"];
//For loop 
//For each 
//For of loop 
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
///for each
names.forEach(friends => {
    console.log(friends);
});
//for of loop
for (const friend1 of names) {
    console.log(friend1);
}
