
// // Accessing the element by getElementById method
// let temp = document.getElementById("Geeksforgeeks");

// alert(temp);
// alert(temp.innerHTML);

// // Accessing the element by getElementsByclassName method
// let temp1 = document.getElementsByClassName("GeeksforGeeks");
// alert(temp1[0]);
// alert(temp1[1]);
// // alert(temp1[2]);

// Accessing the element by getElementsByName method
let temp2 = document.getElementsByName("GeeksforGeeks");
alert(temp2[0]);
alert(temp2[1]);
alert(temp2[2]);


// Accessing the element by class name
// using querySelector
var temp = document.querySelector(".gfg1");
console.log(temp);

// Accessing the element by id using querySelector
temp = document.querySelector("#g2");
console.log(temp);

// Accessing the element by class name and
// id using querySelector
temp = document.querySelector(".gfg1#g2");
console.log(temp);

// Accessing the element by tag name that
// includes the particular class
temp = document.querySelector("p.gfg1");
console.log(temp);


// Accessing the element by class name, id and
// tag name using querySelectorAll
var temp = document.querySelectorAll("h1.gfg1#g2");
console.log(temp[0]);

// Accessing the element by tag name using
// querySelectorAll
temp = document.querySelectorAll("p");
console.log(temp[0]);
console.log(temp[1]);