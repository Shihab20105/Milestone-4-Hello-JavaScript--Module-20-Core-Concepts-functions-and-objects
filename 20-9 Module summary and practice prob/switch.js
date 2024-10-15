/*                          20-9 Module summary and practice problem */


/* 
Is 'else if' alternative is 'switch' in JS?
No, 'else if' and 'switch' are not direct alternatives in JavaScript, but they can sometimes be used to achieve similar outcomes. Here's a comparison:
* 'else if': This is used in an 'if-else' statement when you need to check multiple conditions. It's ideal when you have a small number of specific conditions that might involve complex logic.

if (fruit === "apple") {
    console.log("Apple");
} else if (fruit === "banana") {
    console.log("Banana");
} else {
    console.log("Other fruit");
}

* 'switch': This is often used as a more readable alternative to multiple 'else if' statements, especially when checking a single variable against multiple possible values. However, 'switch' only compares for strict equality (===).
let fruit = "apple";

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Other fruit");
        break;
}

When to use each:
* Use 'else if' when you need to evaluate complex conditions, involving more than just equality.
* Use 'switch' when you need to compare a single variable against multiple discrete values.
Though both can handle similar tasks, their readability and usage depend on the complexity of the conditions you're checking.

*/


/* const color = 'yellow';
if(color === 'green'){
    console.log('The flower color is green');
}
else if(color === 'blue'){
    console.log('The flower color is blue');
}
else if(color === 'red'){
    console.log('The flower color is red');
}
else if(color === 'white'){
    console.log('The flower color is white');
}
else if(color === 'yellow'){
    console.log('The flower color is yellow');
}
else{
    console.log('The flower color is black');
} */
/* Output:
The flower color is yellow */


/* 
'else if' alternative is 'switch':
'else if' and 'switch' are not direct alternatives in JavaScript, but they can sometimes be used to achieve similar outcomes. Here's a comparison: 
*/


/* const color = 'yellow';
if(color === 'green'){
    console.log('The flower color is green');
}
else if(color === 'blue'){
    console.log('The flower color is blue');
}
else if(color === 'red'){
    console.log('The flower color is red');
}
else if(color === 'white'){
    console.log('The flower color is white');
}
else if(color === 'yellow'){
    console.log('The flower color is yellow');
}
else{
    console.log('The flower color is black');
}

switch(color){
    case 'green':
        console.log('The flower color is green');
        break;
    case 'blue':
        console.log('The flower color is blue');
        break;
    case 'white':
        console.log('The flower color is white');
        break;
    case 'red':
        console.log('The flower color is red');
        break;
    case 'yellow':
        console.log('The flower color is yellow');
        break;
    default:
        console.log('The flower color is black');

} */

/* Output:
The flower color is yellow
The flower color is yellow */


/* -------------------------------------------------------------------------------------------------------------------------- */

/* 
What is Integer in JavaScript?
In JavaScript, integers are whole numbers like 1, 5, -10, and 42 — numbers without any decimal points. But JavaScript doesn't have a special type just for integers. Instead, all numbers in JavaScript, whether they are whole numbers or decimals, are treated as the same type called 'Number'.

Important things to know:
1. Number type: JavaScript uses 'Number' to store both whole numbers (integers) and decimal numbers (like 4.5).

Examples of integers:
let age = 25;    // integer
let temperature = -5;  // integer

2. Range of numbers: JavaScript can safely handle whole numbers from about '-9 quadrillion' to '+9 quadrillion'. Numbers bigger or smaller than this might lose accuracy, so they aren't always reliable.

3. BigInt for really big numbers: If you need to use very large numbers (bigger than the safe range), JavaScript has another type called 'BigInt'. This lets you work with much larger whole numbers.
Example:
let bigNumber = 12345678901234567890n; // 'n' makes it a BigInt

So, in simple terms:

* Integers are just whole numbers.
* In JavaScript, both whole numbers (integers) and decimal numbers are treated the same way ('Number').
* For really large numbers, use 'BigInt'.
*/





/* -------------------------------------------------------------------------------------------------------------------------- */

/*                              Practice Task*/

/*
1. Write a function called foo() which prints 'foo' and a function called bar() which prints 'bar'. Call function bar() in the foo() function after printing. What will be the output? Now call the foo to see the output.  
2. Write a function called make_avg() which will take an three integers and return the average of those values.
3. Challenging: Write a function called make_arrayAvg() which will take an array of integers and the size of that array and return the average of those values.
4. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it 4 ways.
    * Has return + Has parameter 
    * No return + Has parameter

5. You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is 'red'
coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a 'yellow' coloured traffic signal, you should stop. If you notice a 'green' coloured traffic signal, you should cross the road. So write a JavaScript code, where there is a variable called 'signal'. It's value can be green, yellow or red and we will get different activities as output depending on the variable. So hurry up.
*/

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 1. Write a function called foo() which prints 'foo' and a function called bar() which prints 'bar'. Call function bar() in the foo() function after printing. What will be the output? Now call the foo to see the output. */

/* function foo() {
    console.log('foo');  // This will print 'foo'
    bar();               // This will call the bar() function
}

function bar() {
    console.log('bar');  // This will print 'bar'
}

// Call the foo() function
foo(); */

/* 
Output:
When you call foo(), the following will happen:

1. 'foo' will be printed.
2. bar() will be called, which prints 'bar'.
So, the output will be:
foo
bar
*/

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 2. Write a function called make_avg() which will take an three integers and return the average of those values. */

/*
 function make_avg(num1, num2, num3){
    var sum = num1 + num2 + num3; // Calculate the sum of the three integers
    var average = sum / 3; // Calculate the average
    return average;
}

// Example usage:
var average = make_avg(10, 20, 30);
console.log(average); 
*/
/* Output: 
20 */

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 3. Challenging: Write a function called make_arrayAvg() which will take an array of integers and the size of that array and return the average of those values. */

/*
 Using a 'for' loop:
Here is the JavaScript function 'make_arrayAvg()' which takes an array of integers and the size of the array as inputs, and returns the average of the values: 
*/
/*
function make_arrayAvg(array, size) {
    // Check if size is greater than zero to avoid division by zero
    if (size === 0) {
        return 0; // Return 0 if the array is empty
    }
    
    var sum = 0;
    
    // Calculate the sum of array elements
    for (var i = 0; i < size; i++) {
        sum += array[i];
    }
    
    // Calculate and return the average
    return sum / size;
}

// Example usage
var array = [5, 10, 15, 20, 25];
var size = array.length;
console.log(make_arrayAvg(array, size)); // Output will be 15
*/

/* 
In this function:

* It iterates over the array and sums the values.
* It returns the average by dividing the sum by the size of the array.
* If the array size is zero, it handles that edge case by returning '0'.
*/



/* 
Using 'reduce()':
Here's a JavaScript function called 'make_arrayAvg()' that takes an array of integers and the size of the array as arguments and returns the average of those values: 
*/

/*
function make_arrayAvg(array, size) {
    if (size === 0) return 0;  // Handle case when array size is 0
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / size;
}
*/

/*
// Example usage
const numbers = [10, 20, 30, 40, 50];
const size = numbers.length;
const average = make_arrayAvg(numbers, size);

console.log(average);  // Output: 30
*/

/* 
Explanation:
* 'arr' is the array of integers.
* 'size' is the size of the array (i.e., the number of elements in the array).
* The function uses the 'reduce()' method to sum the array elements and then divides the sum by 'size' to compute the average.
* The function checks if the size is 0 to avoid division by zero, returning 0 in that case.
*/
/* 
Conclusion:
The 'for' loop version is more straightforward and easier to understand for someone new to JavaScript, since it uses basic iteration and simple arithmetic. The 'reduce()' version is more compact but requires understanding of higher-order functions, making it a bit more advanced.
*/



/* -------------------------------------------------------------------------------------------------------------------------- */

/*
4. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it 4 ways.
    * Has return + Has parameter 
    * No return + Has parameter
*/


/* 
Here are the four ways to implement the 'odd_even()' function:

1. Has return + Has parameter
This version of the function takes a parameter and returns a string indicating whether the number is odd or even.
*/

/*
function odd_even(num){
    if(num % 2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}

var result = odd_even(5); // Example usage
console.log(result); //Output: Odd
*/


/*
2. No return + Has parameter
This version takes a parameter and directly prints whether the number is odd or even, without returning a value.
*/

/*
function odd_even(num){
    if(num % 2 === 0){
        console.log('Even');
    }else{
        console.log('Odd');
    }
}

odd_even(4); // Example usage, //Output: Even
*/


/*
3. Has return + No parameter
This version does not take any parameters. Instead, it asks the user for input and returns whether the number is odd or even.
*/

/*
function odd_even() {
    var num = parseInt(prompt('Enter a number:'));  // Parse user input to an integer
    if (num % 2 === 0) {
        return 'Even';  // Return 'Even' if the number is divisible by 2
    } else {
        return 'Odd';   // Return 'Odd' if the number is not divisible by 2
    }
}

var result = odd_even();  // Call the function and store the result
console.log(result);  // Output the result in the console
*/


/*
4. No return + No parameter
This version does not return anything, nor does it take any parameters. It asks the user for input and directly prints whether the number is odd or even.
*/

/*
function odd_even() {
    var num = parseInt(prompt('Enter a number:'));  // Prompt for input and convert to integer
    if (num % 2 === 0) {
        console.log('Even');  // Log 'Even' if the number is divisible by 2
    } else {
        console.log('Odd');   // Log 'Odd' if the number is not divisible by 2
    }
}

odd_even();  // Call the function
*/




/* -------------------------------------------------------------------------------------------------------------------------- */

/* 
5. You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is 'red'
coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a 'yellow' coloured traffic signal, you should stop. If you notice a 'green' coloured traffic signal, you should cross the road. So write a JavaScript code, where there is a variable called 'signal'. It's value can be green, yellow or red and we will get different activities as output depending on the variable. So hurry up.
*/

/* 
Here’s a simple JavaScript code that checks the value of the signal variable and determines what action to take based on the traffic signal color:
*/

var signal = prompt("Enter the signal color (green, yellow, red):").toLowerCase(); // Get the signal color from the user

if (signal === 'green') {
    console.log('You can cross the road.');
} else if (signal === 'yellow') {
    console.log('You should stop and wait.');
} else if (signal === 'red') {
    console.log('Do not cross the road! It’s dangerous.');
} else {
    console.log('Invalid signal color.');
}
/* 
Explanation:
* The code prompts the user to input a traffic signal color ('green', 'yellow', or 'red').
* Based on the value of 'signal', the code outputs what action should be taken:

* Green: Cross the road.
* Yellow: Stop and wait.
* Red: Don't cross, it's dangerous.
Make sure to enter the signal color correctly to see the appropriate action!
*/



