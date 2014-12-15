var obj1 = {
  'name'   : 'test',
  'age'    : 18,
  'photos' : ['a.jpg','b.jpg'],
  'say'    : function(msg){
    console.log(msg);
  }
};
console.log(obj1.name);
obj1.say('hello,object');



function Shape(color){
  this.width = 100;
  this.draw = function(){
    console.log('color:' + this.color);
  };
  this.color = color;
}
var obj2 = new Shape('red');
obj2.draw();
console.log(obj2.__proto__); //不推荐写法
console.log(Object.getPrototypeOf(obj2));




var obj3 = Object.create(Object.prototype,{
  'name' : {
    value : 'test',
    enumerable: true,
    configurable : true
  },
  'age' : {
    value : 18,
    enumerable: false,
    configurable : false,
    writable : true
  },
  'address' : {
    get : function(){
      return value.toUpperCase();
    },
    set : function(addr){
      value = addr + '.beijing';
    }
  },
  'alert' : {
    value : function(msg){
      alert(msg);
    }
  }
});
console.log(obj3.name);
obj3.name = 'test1';
console.log(obj3.name);//still test, cannot change value

console.log(obj3.age);
obj3.age = 20;
console.log(obj3.age); // change 20 from 18, when set writable is true

for(var i in obj3){
  console.log(i); // only show name property
}

delete obj3.age;
console.log(obj3.age); // cannot delete age property

obj3.address = '21th Hotel';
console.log(obj3.address); // customer getter and setter, 21TH HOTEL
