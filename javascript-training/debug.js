//Debugging : Debugging is the process of identifying and fixing the errors in the program.

console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5,10);
console.log("Executing Line 5");
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");

// Without defining function for line number 6 it will throw this error -"ReferenceError: sumOfNumbers is not defined"

//====================Debugging the program step by step======================
//1. At the break points (before the line where you want to manually execute the program )
//2. Run the program in debug mode.
//                After putting breakpoints we usually get six options below:-

//1. Continue (F5) => Continue the execution till the next break point.
//2. Stop (Shift + F5) => Stop the execution of the program.
//3. Restart (Ctrl + Shift + F5) => Restart the execution of the program from the begining
//4. Step Over (F10) => Execute the current line and move to the next line.
//5. Step Into (F11) => Go inside the function. Check the internal code.
//6. Step Out (Shift + F11) .> Come out of the function and move to the next Line.


























// Logic to get the sum of two numbers
function sumOfNumbers(a,b){
    c=a-b;
   console.log(c);
}
