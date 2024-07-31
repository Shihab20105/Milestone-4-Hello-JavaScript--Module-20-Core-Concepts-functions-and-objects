/*                          variables in JavaScript (var VS let VS const)


Suppose, you loves reading a lot. 'Melvin Gray' is your favorite writer. You want to buy all of his books. 'X' publisher has published his 'Y' books.
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