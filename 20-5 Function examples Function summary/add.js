/*                          Function examples and Function summary add */

/*
So What is function? 
* A procedure
* A set of smaller tasks that performs a bigger task when something calls it
* Maintains a relationship with input (the raw products which is given a function to perform task) and output (the ready product)


What is function in JavaScript?
* A block of code
* A set of statements (subprogram / block of code) that performs a task when it is called.
* Maintains a relationship with input and output.

JavaScript square function:
A JavaScript square function is a simple function that takes a number as input and returns the square of that number. Here's how you can write a basic square function:
function square(number) {
  return number * number;
}

console.log(square(4)); // Outputs 16
In this example:
* 'square' is the function name.
* The function takes one argument, 'number'.
* It returns the square of the given number by multiplying the number by itself.



argument vs parameter in JavaScript?
In JavaScript (and in most programming languages), arguments and parameters are related but distinct concepts, especially in the context of functions:

1. Parameter:
* A parameter is a named variable that a function uses to accept input when the function is defined.
* These are placeholders that indicate what kind of input the function expects when it's called.
* Parameters exist in the function definition.
Example:
function greet(name) {  // 'name' is the parameter
    console.log("Hello, " + name);
}

2. Argument:
* An argument is the actual value that you pass into the function when you call it.
* It is the real data that corresponds to the parameters defined in the function.
* Arguments exist in the function call.
Example:
greet("Alice");  // 'Alice' is the argument

In Summary:
* Parameters are variables defined in a function declaration to handle the data passed to it.
* Arguments are the actual values supplied when calling the function.

Example Putting Both Together:
function add(a, b) {  // 'a' and 'b' are parameters
   return a + b;
}

let result = add(5, 10);  // 5 and 10 are arguments
console.log(result);  // Outputs: 15
In this case:
* 'a' and 'b' are parameters.
* '5' and '10' are arguments passed when the function is invoked.



function syntax in JavaScript?
In JavaScript, there are several ways to define a function. Below are the most common function syntaxes:
1. Function Declaration (Named Function):
A function declaration defines a function with a name and can be used before its declaration due to hoisting.
function functionName(parameters) {
    // function body
    return value;
}
Example:
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));  // Outputs: Hello, Alice

2. Function Expression:
A function expression creates a function and assigns it to a variable. The function can be anonymous or named, but it cannot be used before it is defined.
const functionName = function(parameters) {
    // function body
    return value;
};
Example:
const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Bob"));  // Outputs: Hello, Bob

3. Arrow Function (ES6+):
Arrow functions provide a shorter syntax and lexically bind the this value (i.e., they don't have their own this context). The 'function' keyword is replaced by '=>'.
const functionName = (parameters) => {
    // function body
    return value;
};
For single-line functions, you can omit the curly braces and the 'return' keyword:
const functionName = (parameters) => value;
Example:
const greet = (name) => "Hello, " + name;

console.log(greet("Charlie"));  // Outputs: Hello, Charlie

4. Immediately Invoked Function Expression (IIFE):
An IIFE is a function that is defined and immediately executed.
(function() {
    console.log("This function runs immediately!");
})();
Example:
(function(name) {
    console.log("Hello, " + name);
})("Dana");  // Outputs: Hello, Dana

5. Function Constructor:
Although not commonly used, functions can also be defined using the 'Function' constructor.
const functionName = new Function('parameters', 'function body');
Example:
const add = new Function('a', 'b', 'return a + b;');
console.log(add(3, 4));  // Outputs: 7

Summary of Syntax:
1. Function Declaration:
function greet() { }
2. Function Expression:
const greet = function() { };
3. Arrow Function:
const greet = () => { };
4. IIFE:
(function() { })();


Function VS Loop?
* Different syntax.
* Function can be executed as many times (1, 2, ....N times) you want whereas A loop is executed  a specific times when is performed (you can't perform other task in this time).
* You can give a specific name to a function whereas you can not give any name to a loop.


Function parameter, function return?
- No return and No parameter
- Has return and No parameter
- No return and Has parameter
- Has return and Has parameter


Function parameter, function return:
- No return and No parameter
Imagine Situation-1,
You have bought some fruits from market. As it is summer, you want to make fruit juice and save for future.
So, you are thinking ''I will make juice, pour it in a glass and save it.''
function prepareJuice(){
    //make juice using a fruit
    //save for future
}

prepareJuice();
*/



/*
Function parameter, function return:
- Has return and No parameter
Imagine Situation-2, 
You have bought some fruits from market, Your brother is willing to drink fruit juice and he is expecting you will make it for him. 
So, he is telling, ''Make juice pour it in a glass and serve me.''   
function prepareJuice(){
    //make juice using a fruit
    //pour it in a glass
}

var servedJuice = prepareJuice(); */



/*
Function parameter, function return:
- No return and Has parameter
Imagine Situation-3,
It is summer and a fresh fruit juice refreshes the mind. Your elder brother has bought some fruits. He is willing to prepare fruit juice, save for the time of necessity and he is expecting you will make it for him'
So, he is giving you a fruit and telling, ''Take this fruit, make juice and save for future.'' 
function prepareJuice(fruit){
    //make juice 
    //save for future
} 

prepareJuice(fruit);
*/





/*
Function parameter, function return:
- Has return and Has parameter
Imagine Situation-4,
Your elder brother has bought some fruits. He is willing to drink fruit juice and he is expecting you will make it for him.
So, he is giving you a fruit and telling, ''Take this fruit, make juice, pour it in a glass and serve me.'' 
/*  
function prepareJuice(fruit){
    //make juice
    //pour it in a glass
    return glass;
}

var servedJuice = prepareJuice(fruit);





/*
Multiple parameters in a function:
Imagine another situation,
Your elder brother has bought apple and grapes. He is willing to drink a mixed fruit juice and he is expecting you will make it for him.
So, he is giving you  apple and grapes and telling, ''Take these fruits, make mixed juice, pour it in a glass and serve me.''  
*/
/* function prepareJuice(fruit1, fruit2){
    //make juice of apple and grapes
    //pour it in a glass
    return glass;
}

var servedJuice = prepareJuice(apple, grapes); */





function prepareJuice(fruit1, fruit2) {
    // Combine the fruits into a juice
    var juice = fruit1 + " and " + fruit2 + " juice";
    
    // Simulate pouring into a glass
    var glass = "Glass of " + juice;
    
    // Return the glass
    return glass;
}

// Define fruits
var apple = "Apple";
var grapes = "Grapes";

// Prepare and serve the juice
var servedJuice = prepareJuice(apple, grapes);
console.log(servedJuice); // Output: Glass of Apple and Grapes juice





function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log('My final result: ', finalResult);
/* Output:
My final result:  67 */
