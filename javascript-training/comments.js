// console.log is a print statement 
// By using this console.log statement control statement we can print any kind of information in JavaScript, 
// And this is very useful to check the output

// Program JavaScript run line by line and it will check for tokenization for each and every word and find whether the word is there in its dictionary or not If not then it will throw error
// Tokenization Means it will cut each and every sentene into word into small pieces

// If we execute line number 123 it will give exception in terminal after console.log and exception for "is" it is not in JavaScript dictionary
// Nodejs won't allow this type of rewriting statement (LINE 123) and it will throw error so escalate this we have a concept of "comment"
// COMMENTS - The line which is written for information purpose but not for execution

// There are two types of comments we have in Javascript
//1. Single and comment => starts with //(double forward slash) and (shortcut "Ctrl+/"")
// example - Hello bhai 

//2. Multiline comments => starts with /* and ends with */ and (shortcut "Alt+Shift+a"")
// Example -
/* Hello bhai
kya haal chaal
sab thik hai */

console.log("Hello World");

//======================= Standard to write multiline comment ========================
/*
*This is a function that is going to help us to calculate the sum of two numbers. (Detail about the logic)
*@param {number} a - The first number to be added (param means input value)
*@param {number} b - The second number to be added
*@returns {number} - The sum of the two numbers a and b. (return describe what is the output you are going to recieve)
*@author Bharath Reddy (BharathTechAcademy@gmail.com) (to understand logic whom should they connect ) and (will update with every modification if some other person works)
*@version 1.0 (will update with every modification if some other person works)
*@created 2026-06-16 (will update with every modification if some other person works)
*/
I
function add(a,b){
    return a+b;
}
add(5,10); //15