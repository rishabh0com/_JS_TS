// Define a constructor function called Person that takes a parameter called name
function Person(name) {
  // Assign the name parameter to the name property of the newly created object
  this.name = name;
}

// Add a property called age to the prototype of the Person constructor function
Person.prototype.age = 20;
/* 
In JavaScript, every object has a prototype. The prototype is an object that serves as a blueprint or template for creating new objects. It contains properties and methods that are shared among all instances created from it.
In the provided code excerpt, the Person constructor function is defined. The Person.prototype object is used to add a property called age to the prototype of the Person constructor function. This means that all instances of the Person object will have access to this age property.
Next, a new instance of the Person object is created using the new keyword and assigned to the variable k. The name "Kohli" is passed as an argument to the Person constructor function.
Then, Object.values(k) is used to retrieve the values of all enumerable properties of the k object. The result is printed to the console using console.log().
Finally, an empty array called arr is created. However, the code excerpt you provided does not include the actual creation of the arr array.In JavaScript, every object has a prototype. The prototype is an object that serves as a blueprint or template for creating new objects. It contains properties and methods that are shared among all instances created from it.
In the provided code excerpt, the Person constructor function is defined. The Person.prototype object is used to add a property called age to the prototype of the Person constructor function. This means that all instances of the Person object will have access to this age property.
Next, a new instance of the Person object is created using the new keyword and assigned to the variable k. The name "Kohli" is passed as an argument to the Person constructor function.
Then, Object.values(k) is used to retrieve the values of all enumerable properties of the k object. The result is printed to the console using console.log().
Finally, an empty array called arr is created. However, the code excerpt you provided does not include the actual creation of the arr array.
*/

// Create a new instance of the Person object with the name "Kohli"
const k = new Person("Kohli");

// Print the values of all enumerable properties of the k object
console.log(Object.values(k));

// Create an empty array called arr
const arr = [];

// Iterate over all enumerable properties of the k object
for (let key in k) {
  // Print the key and value of each property
  console.log(key, k[key]);
  // Push the value of each property to the arr array
  arr.push(k[key]);
}

// Print the arr array and the age property of the k object
console.log(arr, k.age);
console.log("constructor: k", k); // constructor: k Person { name: 'Kohli' }
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.age = 20;

// const k = new Person("Kohli");
// console.log(Object.values(k));

// const arr = [];
// for (let key in k) {
//     console.log(key,k[key])
//     arr.push(k[key]);
// }
// console.log(arr,k.age)
