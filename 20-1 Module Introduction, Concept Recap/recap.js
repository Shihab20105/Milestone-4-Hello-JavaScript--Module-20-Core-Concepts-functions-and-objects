/*                          variables in JavaScript (var VS let VS const) */


/* Suppose, you loves reading a lot. 'Melvin Gray' is your favorite writer. You want to buy all of his books. 'X' publisher has published his 'Y' books.
var title = 'Code Life';
let publisher = 'House of Books';
const author = 'Melvin Gray';

Slice Method:
In JavaScript, the 'slice' method is used to extract a section of an array or string and return it as a new array or string, respectively, without modifying the original array or string. The 'slice' method can be particularly useful when you need to create a subarray or substring.

Syntax for Arrays: */
array.slice(start, end)

/* Syntax for Strings: */
string.slice(start, end)

/* Parameters:
start: The zero-based index at which to begin extraction. If omitted, it defaults to 0.
end: The zero-based index before which to end extraction. The 'slice' extracts up to, but not including, 'end'. If omitted, it extracts through the end of the array or string. If negative, it is treated as 'array.length + end'.

Examples:

Array Example: */
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Extracting from index 1 to index 3 (not including index 3)
let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ['Banana', 'Cherry']
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'] - Original array is unchanged

/* String Example: */
let text = "Hello, world!";

// Extracting from index 7 to the end of the string
let slicedText = text.slice(7);

console.log(slicedText); // Output: 'world!'
console.log(text); // Output: 'Hello, world!' - Original string is unchanged

/* Key Points:
Non-destructive: The 'slice' method does not modify the original array or string.
Returns a New Array/String: The extracted section is returned as a new array or string.
Flexible Start and End: You can use positive or negative indices. Negative indices count from the end of the array or string.

The 'slice' method is a versatile tool for working with parts of arrays and strings, making it easier to handle and manipulate data in JavaScript. */



/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          Is loop running over and over again in JavaScript? */ 

/* In JavaScript, loops can run over and over again depending on how they are structured and the conditions set for their termination. Here are a few common types of loops and how they work:

1. 'for' Loop
A 'for' loop runs a specific number of times based on the initialization, condition, and increment expressions.*/
/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */
/* In this example, the loop will run 10 times, logging the numbers 0 through 9.

2. 'while' Loop
A 'while' loop continues to run as long as its condition is 'true'.*/
/* let i = 0;
while (i < 10) {
    console.log(i);
    i++;
} */
/* This loop also runs 10 times, logging the numbers 0 through 9.

3. 'do...while' Loop
A 'do...while' loop is similar to a 'while' loop, but it ensures the code block runs at least once before checking the condition.*/
/* let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10); */
 /* This loop runs 10 times as well, logging the numbers 0 through 9.
 
 Infinite Loops
An infinite loop occurs when the loop's terminating condition is never met. This can cause the loop to run indefinitely and may crash your program or browser.

Example with 'while' Loop*/
/* while (true) {
    console.log("This will run forever");
} */

/* Example with 'for' Loop */
/* for (;;) {
    console.log("This will run forever");
} */

/* Avoiding Infinite Loops
To avoid infinite loops, ensure that the loop's terminating condition will eventually become false. Here are a few common pitfalls:

Incorrect condition: Ensure the condition will eventually be false.
Incorrect increment/decrement: Ensure the loop variable is being modified correctly within the loop body.
External dependency: Ensure that any external conditions or variables affecting the loop are controlled properly.

Example: Avoiding an Infinite Loop*/
/* let i = 0;
while (i < 10) {
    console.log(i);
    i++;  // Ensure i is incremented
} */
/* In this example, the loop will terminate when 'i' reaches 10 

Conclusion
Loops can run indefinitely if their termination conditions are not met. It's important to write your loops carefully to ensure they execute as intended and terminate appropriately. If your loop is running over and over again and you didn't intend for it to do so, check the loop conditions and ensure that variables or conditions being checked are updated correctly within the loop body.*/


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          Break and Continue */

/* In JavaScript, 'break' and 'continue' are control flow statements used within loops to manage the execution flow. Here’s how each of them works:


'break' Statement:
The 'break' statement is used to exit a loop or switch statement before it has completed its normal execution. When a 'break' statement is encountered, the loop or switch terminates immediately, and the program control resumes at the next statement following the loop or switch.
Syntax:
break;
Example:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
// Output: 0 1 2 3 4


'continue' Statement:
The 'continue' statement skips the rest of the current iteration of the loop and jumps to the next iteration. This is useful when you want to skip certain iterations based on a condition.
Syntax:
continue;
Example:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the rest of the loop when i is 5 and continue with the next iteration
  }
  console.log(i);
}
// Output: 0 1 2 3 4 6 7 8 9


Key Differences:
'break': Exits the loop entirely, stopping all further iterations.
'continue': Skips the current iteration and moves to the next iteration of the loop.

Use Cases:
break: Useful when you find the target condition and no longer need to continue looping.
continue: Useful when you need to skip certain iterations based on specific conditions but still want to continue with the loop.

Both statements help in managing the flow of loops more effectively, allowing for cleaner and more readable code.
*/