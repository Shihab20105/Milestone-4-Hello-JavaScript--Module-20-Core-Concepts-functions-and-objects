/*                          Everything you need to know about return from a function */

// * What is written after 'return' will be received as the 'value' of the return.

/* function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
}
add(45, 15); */
/* Output:
45 15
60 */


/* function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return;
}
var total = add(80, 20);
console.log('total', total); */
/* Output:
80 20
total undefined*/


/* function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}
var total = add(80, 20);
console.log('total', total); */
/* Output:
80 20
total 100 */


/* function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
    console.log('I need more code');
    return 15;
    return 'Hello John';
    return 'I am hungry';
}
var total = add(80, 20); */
//console.log('total', total);


/* function bringSomosa(money){
    var somosaPrice = 10;
    var quantity = money / somosaPrice;
    return quantity;
}
var somosas = bringSomosa(200);
console.log('Eating somosas: ',somosas); */
/* Output:
80 20
Eating somosas:  20 */


function bringSomosa(money){
    var somosaPrice = 10;
    var quantity = money / somosaPrice;
    return quantity;
}
var myTaka = 150;
var somosas = bringSomosa(myTaka);
console.log('Eating somosas: ',somosas);
/* Output:
80 20
Eating somosas:  15 */