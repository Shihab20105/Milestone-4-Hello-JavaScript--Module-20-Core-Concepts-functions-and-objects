/*                          20-7 multiple ways to get and set object property */



/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

console.log(shoppingCart); */
/* Output:
{ books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 } */


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
} */

//When you know the specific property name, use '.'dot notation to get the property value.
/* var penCount = shoppingCart.pen; */
//Alternative system
//When you know the specific property name, use '.'dot notation to get the property value.

/*
* To getting the property value we learn three system
1. When you know the property name, use '.'dot notation. (var penCount = shoppingCart.pen;)
2. (var penCount2 = shoppingCart['pen'];)
3. Set property values (var propertyValue = shoppingCart[propertyName];) 


1. Dot Notation:
Use dot notation when you know the property name.
Example:
var penCount = shoppingCart.pen;

2. Bracket Notation (String Key):
Use bracket notation with a string when you know the property name, but you want to use it dynamically.
Example:
var penCount2 = shoppingCart['pen'];


3. Bracket Notation (Dynamic Key):
Use bracket notation when the property name is stored in a variable. This is useful when accessing properties dynamically.
Example:
var propertyValue = shoppingCart[propertyName];

* Each method is valid depending on your use case, with the first one being the most straightforward when the property name is known ahead of time.
*/

/* var penCount2 = shoppingCart['pen']; */

/* var properties = Object.keys(shoppingCart); */

/* console.log(properties); */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ] */


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(properties);
console.log(propertyValues); */
/* Output:
[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]
[ 3, 1, 5, 1, 25 ] */


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart); */

/* Output:
mouse 1 */


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart); */

/* Output:
books 3 */


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(shoppingCart); */
/* Output:
{ books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 } */


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(shoppingCart);

shoppingCart .mouse = 15;

console.log(shoppingCart); */
/* Output:
{ books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 }
{ books: 3, sunglass: 1, keyboard: 5, mouse: 15, pen: 25 } */



/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(shoppingCart);

shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart); */
/* Output:
{ books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 }
{ books: 3, sunglass: 1, keyboard: 5, mouse: 15, pen: 25 }
{ books: 3, sunglass: 1, keyboard: 5, mouse: 29, pen: 25 } */


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(shoppingCart);

shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
/* Output:
{ books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 }
{ books: 3, sunglass: 1, keyboard: 5, mouse: 15, pen: 25 }
{ books: 3, sunglass: 1, keyboard: 5, mouse: 29, pen: 25 }
{ books: 3, sunglass: 1, keyboard: 5, mouse: 89, pen: 25 } */