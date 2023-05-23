// var firstname="goodluck";
// var lastname="okeke";
// alert(firstname)
// alert(lastname)
// alert(typeof(firstname))



// let name = prompt("enter your name")
// alert(name)

// let firstname = prompt("enter firstname")
// alert(firstname)
// let lastname = prompt("enter last name")
// alert(lastname)
// let email = prompt("enter email")
// alert(email)

// let name ="tochi"
// alert(name)
// alert(typeof(name))

// Object
// ======
// const chair ={
//     "color":"red",
//     "size":2,

// }
// // access data of an Object
// // ========================
// alert(chair.color)

// // Array
// // =====

// const fruits=[
//     "mango","apple","orange",
// ]
// // access array 
// // ============

// alert(fruits[1])

// volume of a cylinder
// ====================

// formular= pir^2h

// let pi = 22/7
// let r = prompt("enter the radius")
// let h = prompt("enter the height")
// let ans = (pi)*(r**2)*(h)
// alert(ans)

// assignment  operator

// let value1 = 2;
//  value1 += 4
//  alert(value1)

// logical operator



// relational operator

// let == equal
// let === identical
// let ! not equal
// let ! == not identical
// let > greater than
// let < less than
// let > = not greater than
// let < = not less than


// let value1 = 4;
// let value2 = 8;
// let value3 = value1 < value2;
// alert(value3);

// concatenatio
// ============

// let firstname = "obi";
// let lastname = "okeke";
// let fullname = firstname + " " + lastname;
// alert(fullname)

// assignment concatenate a string and a number

// syntax of if condition
// ===========================
// if(){

// }

// let number = 10;
// if(number < 20){
//     alert("you are still a kid");
// }
// // if else Syntax
// number = 15;
// if(number > 10){
//     alert("you can not come to the party")
// }else{
//     alert("you can come to the party")
// }


// password checking system
// let password = "qwerty";
// let lenght = password.length
// alert(lenght)
// if(lenght > 8 || lenght < 6){
//     alert("error")
// }else{
//     alert("true")
// }
// let password = "qwerty"
// let username = "john"

// let dbQureyUsername= "john"
// let dbQureyPassword="qwerty"
// if(password ==dbQureyPassword&& username == dbQureyUsername){
//     alert("login successful")
// }else{
//     alert("login error")
// }

// if else Syntax
// ==============

// if(){

// }else if(){

// }else if(){

// }else{

// }


// let score = prompt("enter score");
// if(score >= 80){
//     alert("a")
// }else if(score >= 60 && score <= 79){
//     alert("b")
// }else if(score >=50 && score <= 69){
//     alert("c")
// }else if(score >= 40 && score <= 59){
//     alert("d")
// }else if(score >= 30 && score <= 39){
//     alert("e")
// }else{
//     alert("f")
// }

// loops
// ========

// for(i = 0; i > 5; i++){
//     alert("hello world")
// }
// let number = 20;
// if(number < 25){
//     alert("you can not come")
// }else{
//     alert("you can come")
// }
//  let cars = [
//     "honda","jeep","golf"
//          ]

// for(i = 0; i < cars.length; i++){
//     alert(cars[i])
//  }


//objects

// const person ={
//     "name":"uba",
//     "age":12,
//     "color":"green",
// }
// // for in
// // =========
// for(let key in person){
//     alert(person[key])
// }

// let name = ["john", "james", "ada",]

// for(let value in name){
//     alert(name[value])
// }
// for of
// ======

// let name = "peter"
// for(let value of name){
//     alert(value)
// }

// while loop
// ==========
// let i = 2;
// while(i < 10 ){
// console.log("hello world");
// i++;
// }

// do while loop 
// =============

// let i = 1;
// do{
//    alert("hello world");
//    i++;
// }while(i < 10)

// function
// =========


// let uba = 35

// function addition (){
// let value1 = 29;
// let value2 = 30;
// let ans = value1 + value2;
// alert(ans)
// return ans;
// } 
// let sum = addition();
// alert(sum)
// // calling function
// addition();

// varriable scope in functions
// local variable and global variable 

// function joe (first, last){

//     let firstName = first;
//     let lastName = last;
//     let fullName = `${firstName} ${lastName}`
//     alert(fullName)
// }
// // joe("joesph", "uba");

// let firstName = prompt("input first name");
// let lastName = prompt("input last name");

// joe(firstName,lastName);


// string methods
// ==============

// let text = "hello world";
// let upperCase = text.toUpperCase();
// alert(upperCase)

// // // slice method
// // // =============

// let word = text.slice(4)
// alert(word)

// // replace method
// // ==============

// let rep = text.replace("hello world","hi");
// alert(rep)

// // length method
// // =============

// let test = text.length;
// alert(test)

// // checkout other methods


// events
// ======

// assignment
// ===========

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// alert(Number(reverse_a_number(32243)));


// let letter = "world";
// let capitalize = letter.charAt(0).toUpperCase() + letter.slice(1);
// alert(capitalize);


// function capitalLetter(str){
//     let str2 = str.split(" ");
//     for(let i = 0; i < str2.length; i++){
//         str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].substring(1);
//     }
//     return str2.join(" ")
// }
// alert(capitalLetter("the quick brown fox"))


// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// alert(test_prime(37));




// let word = "input"
// alert(typeof(word))

// color = ["red", "green", "white", "black"];
// alert(color.toString());
// alert(color.join());
// alert(color.join("+"));



// let number = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// let sortedNumber = number.sort();
// alert(sortedNumber)



// let myColor = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// function Display(n)
//  {
//  let o = ["th","st","nd","rd"],
//  x = n%100;
//  return x+(o[(x-20)%10]||o[x]||o[0]);
//  }

// for(n = 0; n < myColor.length; n++){
//  let display = n + 1;

//  let output = (Display(display) + " choice is " + myColor[n] + ".");

// alert(output);
// }


// events
// =======


