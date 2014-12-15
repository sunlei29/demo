/*
   function A(){}
   function B(){}
   var a = new A();
   console.log(a instanceof A); // true
   console.log(a instanceof B); // false
 */

function A(){}
function B(){}
function C(){}

B.prototype = new C();
A.prototype = new B();
var a = new A();

/*
console.log(a instanceof A); // true
console.log(a instanceof B); // true
console.log(a instanceof C); // true

B.prototype = new C();
console.log(a instanceof A); // true
console.log(a instanceof B); // false
console.log(a instanceof C); // true
*/

console.log(A.prototype.isPrototypeOf(a));
console.log(B.prototype.isPrototypeOf(a));
console.log(C.prototype.isPrototypeOf(a));

var d = {};
var e = Object.create(d,{});
console.log(d.isPrototypeOf(e));
