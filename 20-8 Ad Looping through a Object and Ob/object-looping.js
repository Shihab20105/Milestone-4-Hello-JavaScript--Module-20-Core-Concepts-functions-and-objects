/*                          20-8 (advanced) Looping through an Object and Object summary */


// Array vs Object

/* 
What is Object in JavaScript?
* An unordered collection of key-value pairs. Each key-value pair is called a property.
* An entity having state and behavior (properties and method)


Array vs Object?
Array[]
Object{}
* Different syntax
* Array stores data in ordered (sequential) collection. This is not true for object.
* Data can be accessed in array using numerical index. [0], [1], .. [n] . For object values are accessed calling keys.


How to get all property names of an object?
Object  -   Array

Object:
const zooFood = {
    lion: 'meat', 
    panda: 'bamboo',                        
}

keys:
Oject.keys(zoo)
//['loin', 'panda']

Values:
Object.values(zoo)
//['meat', 'bamboo']

Keys and Values:
Object.entries(zoo)
//[['lion', 'meat'], ['panda', 'bamboo']]

Ways to get and set object property?
* obj.prop
* obj['prop']
* {prop} = obj
* obj[prop]


const zooFood = {
    lion: 'meat', 
    panda: 'bamboo',                        
}

* console.log(zoo.lion);
* console.log(zoo[''lion'']);

* var animal = ''lion'';
 console.log(zoo[animal]);


*/
/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

} */

/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys); */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ] */




/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1

}


const keys = Object.keys(shoppingCart);
console.log(keys); */
/* Output:
[
  'books',    'sunglass',
  'keyboard', 'mouse',
  'pen',      'shoes',
  'bottle'
] */




/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values); */
/* Output:
[
  'books',    'sunglass',
  'keyboard', 'mouse',
  'pen',      'shoes',
  'bottle'
]
[
   3, 1, 5, 1,
  25, 2, 1
] */



/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values); */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
[ 3, 1, 5, 1, 25, 2 ] */




/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    console.log(keys[i])
} */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
[ 3, 1, 5, 1, 25, 2 ]
books
sunglass
keyboard
mouse
pen
shoes */




/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    console.log(propertyName);
} */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
[ 3, 1, 5, 1, 25, 2 ]
books
sunglass
keyboard
mouse
pen
shoes */



/* var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
} */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
[ 3, 1, 5, 1, 25, 2 ]
books 3
sunglass 1
keyboard 5
mouse 1
pen 25
shoes 2 */


/* // for in loop
var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
}
for(var propertyName in shoppingCart){
    console.log(propertyName);
} */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
[ 3, 1, 5, 1, 25, 2 ]
books
sunglass
keyboard
mouse
pen
shoes */



// for in loop
var shoppingItems = ['Books', 'Sunglass', 'Shoes', 'Pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}



var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2

}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
}
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
[ 3, 1, 5, 1, 25, 2 ]
books 3
sunglass 1
keyboard 5
mouse 1
pen 25
shoes 2 */
