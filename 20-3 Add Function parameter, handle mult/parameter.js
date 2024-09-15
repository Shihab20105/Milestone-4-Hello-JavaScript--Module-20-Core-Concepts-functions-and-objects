/*                          Add Function parameter, handle multiple parameters */


/* Parameter: 
A parameter in JavaScript is like a "placeholder" inside a function. When you create a function, you can use parameters to tell the function to expect some values later. These values are called arguments when you actually use the function.

Think of it like this:
1. When you write a function, you say, "Hey function, I’ll give you some values when I need you!"
2. The names you give for those values inside the function are parameters.
3. When you run the function, you give it the actual values. These are called arguments.

Here’s a super simple example:
function sayHello(name) {
    console.log("Hello, " + name);
}

* name is a parameter (it's like a blank spot that will be filled later).

Now, when we use (or call) the function:
sayHello("Sam");  // Output: Hello, Sam

*"Sam" is the argument (this fills the blank spot, or replaces the parameter).

So, in short:
* Parameters are placeholders inside the function.
*Arguments are the actual values you pass when calling the function.
*/

/* -------------------------------------------------------------------------------------------------------------------------- */

/* function bringSomosa(money){
    console.log(money);
    console.log('Here is your Somosa');
}
bringSomosa(100); */
/* Output:
 100
Here is your Somosa*/


/* function bringSomosa(money){
    console.log('How much you gave: ',money);
    console.log('Here is your Somosa');
}
bringSomosa(100); */
/* Output:
How much you gave:  100
Here is your Somosa*/


function bringSomosa(money){
    console.log('How much you gave: ',money);
    console.log('Here is your Somosa');
}
//bringSomosa(300);
/* Output:
How much you gave:  300
Here is your Somosa */


/* function add(num1, num2){
    console.log('Going to add:', num1, num2);
}
add(); */
/* Output:
Going to add: undefined undefined */


function add(num1, num2){
    console.log('Going to add:', num1, num2);
}
//add(125);
/* Output:
Going to add: 125 undefined */


function add(num1, num2){
    console.log('Going to add:', num1, num2);
}
//add(125, 96);
/* Output:
Going to add: 125 96 */

function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
//sum();
/* Output:
undefined undefined undefined undefined undefined
NaN */


function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
//sum(15, 98, 56);
/* Output:
15 98 56 undefined undefined
NaN */