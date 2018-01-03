###### *[Home](https://tashbalrai.github.io)*, [Overview](/js/index.html), [Types](/js/types.html), [Functions](/js/functions.html), [Arrays](/js/arrays.html), [Object](/js/object.html), **Prototype**, [Inheritance](/js/inheritance.html), [RegExp](/js/regexp.html), [Awful Parts](/js/awful.html),

## JavaScript Prototype
Every object in JS is linked to a prototype object from which it can inherit properties.

All objects created from object literals are linked to Object.prototype, an object that comes as standard with JS.

```javascript
var obj = {}; //obj inherits from Object.prototype. Means all the properties of Object.prototype are accessible to obj.
```

Changing obj does not change its prototype. _Prototype is only used for retrieval._

The prototype relationship is a dynamic relationship. If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype.

### Understanding Constructors
A constructor is a function object which is used to create new instances of the same type. 

E.g.:
```Object()``` is a constructor i.e. ```new Object()``` will create an instance of type "object";
```Function()``` is a constructor i.e. ```new Function()``` will create an instance of type "function";

All constructors are of type function. 

E.g.: Object constructor is of type function.
```javascript
console.log(Object.getPrototypeOf(Object)); // function()
```

**constructor property**

Every object in JS have a constructor property which tells the name of the constructor who created that object with exception to special types ```undefined``` and ```null```.

E.g.
```javascript
console.log(('abc').constructor); // String
console.log((123).constructor); // Number
console.log((true).constructor); // Boolean
console.log((new Object).constructor); // Object
console.log(({}).constructor); // Object
function S() {
}
console.log((S).constructor); // Function
console.log((new S()).constructor); // S
```

### Prototype Hierarchy
"Object" is the standard built-in object in JS. Its a top level object in JS. Object.prototype is not inherited from any other object so it's prototype is ```null```. It is the top level prototype. Means if you try to get the prototype of the ```Object.prototype``` using ```Object.getPrototypeOf()``` you will get ```null```.

```javascript
console.log(Object.getPrototypeOf(Object.prototype)); // null
```

But on the other hand, if you try to get the prototype of ```Object``` it will be listed as ```function()```. This is because ```Object()``` is a constructor wrapper for the base javascript object and this ```Object()``` constructor is used to create the object. And as we studied, constructor is of type ```Function()``` so, this is why you get ```function()``` as value of the ```Object.getPrototypeOf(Object)```.

Other built-in object are inherited from ```Object.prototype```. So, if you console.log ```Object.getPrototypeOf(Function.prototype)``` it will give you ```Object {}```. See the below examples.

```javascript
console.log(Object.getPrototypeOf(Function.prototype)); // Object {}
console.log(Object.getPrototypeOf(Array.prototype)); // Object {}
console.log(Object.getPrototypeOf(Symbol.prototype)); // Object {}
console.log(Object.getPrototypeOf(RegExp.prototype)); // Object {}
console.log(Object.getPrototypeOf(Array.prototype)); // Object {}
console.log(Object.getPrototypeOf(Number.prototype)); //Object {}
console.log(Object.getPrototypeOf(String.prototype)); //Object {}
```

Prototype property is a property of each construct-able object. Here, construct-able means any object which can be used to construct a new object of same type using ```new``` keyword. This prototype property holds an object which is shared among all the derived objects. All methods and properties of this shared object is available to all the derived objects.

Object literals are not construct-able objects. For an example, consider the following.

```javascript
var Foo = {
     bar: function () {
     }
};
var obj = new Foo(); //TypeError: Foo is not a constructor.
```

Another example of a non-construct-able object is the built-in ```Math``` object. You cannot create a new instance of the Math i.e. ```new Math()``` is not possible.

> Prototype property won't be available on Math and literal objects.

**delete keyword with prototype**

```delete``` keyword only deletes property from object. It do not touch properties of prototype.

E.g.:
```javascript
Object.prototype.buzz = 'buzz';

var foo = {foo:'foo', buzz:'bar'};
delete foo.foo; // deletes foo property
delete foo.buzz; // deletes the foo's "buzz" property. But now it refers to Object's value of "buzz" property
```

### Understanding relationships between prototype, constructor and objects.
To understand the prototype, constructor and objects more precisely, let's consider the below example.

```javascript
function Foo() {}
Foo.prototype.method = function () {}

console.log('Foo.constructor = ',Foo.constructor);
console.log('Foo.prototype = ',Foo.prototype);
console.log('Foo.method = ',Foo.method);

The above code outputs the following text.

Foo.constructor = Function()
Foo.prototype = Foo {method=function()}
Foo.method = undefined
```

Foo is defined as a function. Now functions in JS also works as object, constructors and functions. So, when we do Foo.constructor it yields ```Function()``` because Foo is a function and a function is always created from ```Function()``` built-in object. ```Foo.prototype``` yields "Foo {method=function()}". This is because every construct-able object have a hidden property called prototype which can be used to extend its functionality. So, we defined "method" function on Foo's prototype property.

Next, we trying to access ```Foo.method``` which returns ```undefined```. This is because ```Foo()``` here is being accessed in the context of object of ```Function()``` constructor. So, Prototype chain will look for the ```method()``` on the Foo object itself (not on its prototype) and in the prototype of the ```Function()``` and then in the prototype of ```Object()```. But ```method()``` has been defined on Foo's own prototype which will be available to the objects created from ```Foo()``` constructor i.e. objects created from ```new Foo()``` not on Foo itself.

### Inheritance
Prototype is used for classical inheritance in JS because of its property of shared object among the prototype chain of the objects. Let's see example of it.

```javascript
function Foo () {}
Foo.prototype = {
     func: function () {
         console.log("Foo's Func")    
     }
}
```

Foo function will act as a constructor for its instance variables and all its instances will have properties and methods defined on its prototype. In this case, method "func".

```javascript
function Bar () {}
Bar.prototype.prop = 10;
```

Similarly, Bar's instance variables will have ```prop``` property. Let's say Foo is the base class and we want to inherit its properties and methods on Bar. If we can do so by the following code.

```javascript
Bar.prototype = new Foo();
```

Here, we are creating a new object of Foo and assigning it to ```Bar.prototype```. This will assign all the properties and methods available on Foo's instance into the Bar's prototype which will then become available to all the Bar's instance variables.

_Why are doing new Foo() instead of Foo or Foo.prototype?_ Let's examine.

When we do the following:

```javascript
Bar.prototype = Foo;
```

In this case, we are assigning a Foo function to the prototype of the Bar. This will not share the Foo's prototype properties and methods with Bar. The reason is when we will create a new instance of the Bar and will try to access the "func" method. Prototype chain look up will not look at Foo.prototype instead it will look for Function.prototype. Because we have assign Foo which is a function and its prototype is Function.prototype.

When we do the following:

```javascript
Bar.prototype = Foo.prototype;
```

In this case we just assigning one object to the other object and objects in JS are assigned by reference so Bar.prototype will simply point to Foo.prototype and any changes to Bar.prototype will eventually be affecting the Foo.prototype.

So, if I add a new property to Bar.prototype it will get added to Foo.prototype in fact.

```javascript
Bar.prototype.p1 = 100;

console.log(Foo.prototype); // It will list the p1 property.
```

So, this will not allow us to augment the Bar's functionality at the same time inheriting the Foo's functionality.

Here is a more complete example of inheritance.

```javascript
function Base() {}
Base.prototype.baseMethod = function () {
     console.log('Base methods.');
}

function Derived () {}

Derived.prototype = new Base();
// The below line makes sure to set the constructor to Derived instead of Base;
Derived.prototype.constructor = Derived;

Derived.prototype.derivedMethod = function () {
     console.log('Derived method.');
}

let o = new Derived();
console.log(o); //Derived {constructor=Derived(), derivedMethod=function(), baseMethod=function() }
```
