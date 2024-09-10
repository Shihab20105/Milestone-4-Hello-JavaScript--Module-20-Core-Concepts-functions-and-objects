/*                          Function */

/* * To write 'function' at first you have to write 'function' keyword. It's must.
* After 'function' keyword you got to write 'function' name.
* In 'function' names may have letters, digits, underscores and dollar sign. (Same roll as variable).
* After 'function' name you got to use parentheses ().
* After parentheses then you use curly brackets {} and inside curly brackets you have to write codes


Difference between 'loop' and 'function' in JavaScrip:

Loop:
Purpose: A loop is used to repeat a block of code multiple times, either for a fixed number of iterations or while a certain condition is met.

Types of Loops:
for: Repeats code a specific number of times.
while: Repeats code as long as a condition is true.
do...while: Similar to while, but the loop runs at least once.
for...in: Iterates over properties of an object.
for...of: Iterates over values of an iterable (like an array).

Example of a loop:
for (let i = 0; i < 5; i++) {
  console.log(i);  // Outputs 0, 1, 2, 3, 4
}

Function:
Purpose: A function is a reusable block of code that performs a specific task. Functions can take inputs (parameters) and return outputs (results). You call a function to execute its code.
Reusability: Once defined, a function can be called multiple times, with different inputs each time.

Example of a function:
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));  // Outputs 5

Key Differences:
1. Purpose:
A loop is used for repeating actions.
A function is used for organizing and reusing code.

2. Control:
A loop controls repetition by iterating over code.
A function is controlled by being called and can be invoked as many times as needed.

3. When Used:
Loop: Use when you need to repeat tasks.
Function: Use when you need to group related tasks that you want to reuse.
*/


// How to Declare a 'function'
function startFan(){
    console.log('Stand up');
    console.log('Walk towards the switch');
    console.log('Press the switch');
}

// Call the 'function'
//startFan();
/* Output:
Stand up
Walk towards the switch
Press the switch */

// A function code is only written once. Then it can be used as many times as needed.

/* startFan();
startFan();
startFan(); */
/* Output:
Stand up
Walk towards the switch
Press the switch
Stand up
Walk towards the switch
Press the switch
Stand up
Walk towards the switch
Press the switch */

startFan();
console.log('Waking up in the morning');
startFan();
console.log('Eating lunch');
console.log('Watching JavaScript tutorial');
startFan();

/* Output:
Stand up
Walk towards the switch
Press the switch
Waking up in the morning
Stand up
Walk towards the switch
Press the switch
Eating lunch
Watching JavaScript tutorial
Stand up
Walk towards the switch
Press the switch */