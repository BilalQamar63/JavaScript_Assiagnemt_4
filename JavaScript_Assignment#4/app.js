// *****************CHAPTER#{17-20}*******Q3************

// for (let i = 1; i <= 10; i++) {
//     document.write(i +"<br>");
// }

// *****************CHAPTER#{17-20}*******Q4************


// var userInput = +prompt("Enter a number to generate a multiplication table");
// var userInputLength = +prompt("Enter length");

// for (var i = 1; i <= userInputLength; i++) {
//   document.write(userInput + "x" + i + "=" + userInput * i + "<br>");
// }


// *****************CHAPTER#{17-20}*******Q5************

// var fruits = ["apple", "mango", "grapes", "banana", "orange"];

// document.write (fruits[0]+ "<br>")
// document.write (fruits[1]+ "<br>")
// document.write (fruits[2]+ "<br>")
// document.write (fruits[3]+ "<br>")
// document.write (fruits[4]+ "<br>")

// document.write("Element at index 0 is  " + fruits[0]+ "<br>")
// document.write("Element at index 1 is  " + fruits[1]+ "<br>")
// document.write("Element at index 2 is  " + fruits[2]+ "<br>")
// document.write("Element at index 3 is  " + fruits[3]+ "<br>")
// document.write("Element at index 4 is  " + fruits[4]+ "<br>")


// *****************CHAPTER#{17-20}*******Q6************

// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("a. Counting:");
// for (let i = 1; i <= 15; i++) {
//     document.write(i);
// }

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("b. Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//     document.write(i);
// }

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("c. Even:");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i);
// }

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("d. Odd:");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i);
// }

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("e. Series:");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k");
// }



// *****************CHAPTER#{17-20}*******Q7************


// var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];


// var userInput = prompt("Welcome to ABC bakery. " + " What do you want to order Sir & Ma'am");

//         if (userInput === "cake") {
//             alert("cake is available at index 0" )
//         }
//         else if (userInput === "apple pie") {
//             alert("apple pie is available at index 1" )
//         }
//         else if (userInput === "cookie") {
//             alert("cookie is available at index 2" )
//         }
//         else if (userInput === "chips") {
//             alert("chips is available at index 3" )
//         }
//         else if (userInput === "patties") {
//             alert("patties is available at index 4" )
//         }
//         else{
//             alert("We are sorry ." + userInput + " is not available in our bakery")
//         }
    
    


// *****************CHAPTER#{17-20}*******Q8************
// var  num = [24, 53, 78, 91, 12];
// let max = num[0];

// for (let i = 1; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i];
//     }
// }
// document.write("The largest number in the array is: " + max);

// *****************CHAPTER#{17-20}*******Q9************
// const num2 = [24, 53, 78, 91, 12];
// let min = num2[0];
// for (let i = 1; i < num2.length; i++) {
//     if (num2[i] < min) {
//         min = num2[i];
//     }
// }
// document.write("The smallest number in the array is: " + min);



// *****************CHAPTER#{17-20}*******Q10************

// for (let i = 1; i <= 100; i++) {
//     if(i % 5 ===0){
//     document.write(i + "<br>");
// }
// }




// *****************CHAPTER#{17-20}**HOME Assignment*****Q1************

// for (let i = 0; i < 10; i++) {
//     document.write("Hello World" + "<br>");
//   }

// *****************CHAPTER#{17-20}**HOME Assignment*****Q2************
  

// for (let i = 1; i <= 12; i++) {
//     document.write("Hello World" + "<br>"); 
//   }
  


// *****************CHAPTER#{17-20}**HOME Assignment*****Q3************

// for(var i = 0; i <= 4; i++ ){
// }

// *****************CHAPTER#{17-20}**HOME Assignment*****Q4************

// for (let count = 1; count <= 100; count++) {
//     document.write("Loop " + count + "<br>");
//   }
  

// *****************CHAPTER#{17-20}**HOME Assignment*****Q5************


// for (let count = 1; count <= 3; count++) {
//     document.write("Loop " + count + "<br>");
//   }


// *****************CHAPTER#{17-20}**HOME Assignment*****Q6************

// var num = [123,456,789,112,223,334,445,6563]
// document.write(num);

// *****************CHAPTER#{17-20}**HOME Assignment*****Q7************

// var flag = [true]
// console.log(flag);

// *****************CHAPTER#{17-20}**HOME Assignment*****Q8************


// var pets = ["dog" , "cat", "lizard", "tiger", "lion"];
// for (let i = 1; i <= pets.length; i++)
// document.write(pets + "<br>");

// *****************CHAPTER#{17-20}**HOME Assignment*****Q9************

// for (let i = 0; i < 10; i++) {
//     if (i === 1) {
//       alert(i);
//       break;
//     }
//   }
  

// *****************CHAPTER#{17-20}**HOME Assignment*****Q10************

// var firstName = [prompt("Enter your first name")]

// document.write(
// );

// *****************CHAPTER#{17-20}**HOME Assignment*****Q11************

// var matchFound = false;
// var list = ["item1", "item2", "item3"];
// var userInput = "userInput"; 

// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }

// if (!matchFound) {
//   alert("No match found");
// }
// *****************CHAPTER#{17-20}**HOME Assignment*****Q12************

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//     for (var j = 0; j < secondArr.length; j++) {
//         console.log(firstArr[i] + secondArr[j]);
//     }
// }

