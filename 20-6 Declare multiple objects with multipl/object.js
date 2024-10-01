/*                          20-6 Declare multiple objects with multiple properties */


/*
Object?
'Object' is a 'variable' that can hold many values.
*/

//var student = {id: 115, name: 'Solayman Ahmed', class: 9, marks: 98}

var student = {
    id: 115, 
    name: 'Solayman Ahmed', 
    class: 9, 
    marks: 98
}



var mobile = {
    brand: 'Samsung',
    price: 1000,
    storage: '64GB',
    camera: '10MP'
}



/* var myComputer = {
    brand: 'HP',
    price: 500,
    color: 'White',
    processor: 'i7'
}

console.log(myComputer); */
/* Output:
{ brand: 'HP', price: 500, color: 'White', processor: 'i7' } */


/* var myComputer = {
    brand: 'HP',
    price: 500,
    color: 'White',
    processor: 'i7'
}

console.log(myComputer.price); */
/* Output:
500 */


/* var myComputer = {
    brand: 'HP',
    price: 500,
    color: 'White',
    processor: 'i7'
}

console.log(myComputer.price);
console.log(mobile.brand); */
/* Output:
500
Samsung */


/* var myComputer = {
    brand: 'HP',
    price: 500,
    color: 'White',
    processor: 'i7'
}

console.log(myComputer);
console.log(mobile.brand); */
/* Output:
{ brand: 'HP', price: 500, color: 'White', processor: 'i7' }
Samsung */


/* var myComputer = {
    brand: 'HP',
    price: 500,
    color: 'White',
    processor: 'i7'
}

console.log(myComputer);
myComputer.processor = 'i10';
console.log(myComputer); */
/* Output:
{ brand: 'HP', price: 500, color: 'White', processor: 'i7' }
{ brand: 'HP', price: 500, color: 'White', processor: 'i10' } */


var myComputer = {
    brand: 'HP',
    price: 500,
    color: 'White',
    processor: 'i7'
}

console.log(myComputer.processor);
myComputer.processor = 'i10';
console.log(myComputer);
/* Output:
i7
{ brand: 'HP', price: 500, color: 'White', processor: 'i10' } */