###### *[Home](https://tashbalrai.github.io)*, [JS Types](/js/index.html), **Functions**, [Arrays](/js/arrays.md), [RegExp](/js/regexp.md), [Inheritance](/js/inheritance.md), [Prototype](/js/proto.md), [Object](/js/object.md), [Awful Parts](/js/awful.md),

## JavaScript Functions

Functions in JavaScript are basically objects but these are specialized objects that can be treated as functions, methods, constructors and these can also work as classes to support inheritance using the prototype property available on them. Functions can be passed around to different functions as a parameters. These are very powerful objects in JavaScript derived from base JavaScript Object.

>Functions -> Functions.prototype -> Object.prototype

```Object.prototype``` is ```null``` because ```Object``` is not inherited from any object. It is a base object and all JavaScript objects are derived from this base object. ```Functions.prototype``` is ```object``` because a function object is derived from base object.

```Function``` is a constructor for function object in JavaScript. You can create a new function using ```new Function()``` constructor or you can use the keyword ```function``` to define a function. Notice the upper case 'F' in constructor and lower case 'f' in keyword.

Functions have few additional capabilities that distinguish them from other objects in JavaScript.

1. Calling ability i.e. you can call a function object as a normal function call.
2. Context of a function i.e. whether the function is executed from global context or as a method of some object.
3. Code of the function i.e. the function behavior then it is executed.

Functions can be invoked in the following styles:

1. Method invocation
2. Function invocation
3. Constructor invocation
4. Apply invocation

There is no limit on number of arguments and parameters received or passed to a function. If you pass more parameters to a function then arguments defined the extra parameters will be ignored. If you pass less parameters the rest of the argument will have ```undefined``` values. 

>There is no any exception raised when this happen.

```this``` and ```arguments``` are two bonus arguments that a function have. ```this``` value depends on the style of function invocation. ```arguments``` holds all the arguments that was sent to a function in an array.

>Because of a design error, arguments is not really an array. It is an array-like object. arguments has a length property, but it lacks all of the array methods.

```this``` value is bound to the function at invocation time. Methods that get their context from ```this``` are called public methods.

**1. Method invocation.**
When you use object property as method and you call method using object through "." dot/period and "[]" notation it is called method invocation. ```this``` refers to object inside function body.

E.g.:
```javascript
var foo = {
     counter: 0,
     bar: function (i) {
         this.counter += i;
     }
}

foo.bar(1); //this inside function now refers to foo object.
foo["bar"](1); //this inside function again refers to foo object.

var func = foo.bar;
func(1); //not a method invocation; this refers to global object not foo object. global object in browser is window.
```

**2. Function invocation.**
Function invocation method will always have ```this``` referred to the global object. Whether it is inner function or outer function. Inner functions will have access to outer functions variables but ```this``` will refer to global object.

E.g.:
```javascript
foo.add(a,b) {
     var c = a + b;
     var that = this; //"this" refers to foo object here.
     function inner() {
         that.value = c; // "that" is accessible here.  but "this" refers to global object not foo.
     }
     inner(); // function invocation
}

foo.add(2,3);
```

**3. Constructor invocation**
Constructor invocation is adopted to make it more like classical inheritance than prototypal. ```new``` keyword is prefix in front of function name to create object of the function. By convention, constructor functions have first letter of their name capital.

```return``` keyword works differently when methods are invoked using constructor style.

E.g.:
```javascript
var Foo = function (str) {
     this.status = str;
}

Foo.prototype.getStatus = function () {
     return this.status;
}

var obj = new Foo('init'); // constructor invocation
obj.getStatus(); //this refers to obj inside getStatus()
```

**4. Apply invocation**
```apply()``` built-in method of JS allow us to call a function and set their ```this``` value and arguments as an array. Functions called with apply have ```this``` value passed as first parameter and arguments as second parameter.

E.g.:
```javascript
var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7, this is set to null.

// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Foo as in last example,
// but we can invoke the getStatus method on
// statusObject even though statusObject does not have
// a getStatus method.

var status = Foo.prototype.getStatus.apply(statusObject);    // status is 'A-OK'
```

**Return statement**

The return statement can be used to cause the function to return control early instead of completing the whole function execution. 

>A function always returns a value. If the return value is not specified, then undefined is returned.

If the function was invoked with the new prefix and the return value is not an object, then this (the new object) is returned instead.

E.g.:
```javascript
var Foo = function () {
  this.status = 'new';
  this.data = 'data';
  return {buz: 'buzz'};
}

var AnotherFoo = function () {
  this.status = 'new';
  this.data = 'data';
  return this.status;
}

var bar = new Foo();
var barAnother = new AnotherFoo();

console.log(bar); // returns Object {buz: 'buzz'}, custom object was returned not "this" object.
console.log(barAnother); // returns Object {status: 'new', data: 'data'}, "this" object was returned.
```
