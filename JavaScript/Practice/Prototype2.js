function Empolyee(name) {
  this.name = name;
}

/* 
In JavaScript, every function has a special property called prototype. 
This property allows you to add properties and methods to all instances created from that function.

*/
const ep0 = new Empolyee("Shyam"); 
console.log(ep0, ep0.age) // Empolyee { name: 'Shyam' } age : undefined -> age is not defined in the constructor function

Empolyee.prototype.age = 20;
const ep1 = new Empolyee("Ram");
console.log(ep1,ep1["age"]);
