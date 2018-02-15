###### *[Home](https://tashbalrai.github.io)*, **Destructuring**

## Default values
ES6 supports default values for parameters. E.g.

```javascript
function makeRequest(url, timeout = 2000, callback = function(){}) {
     ....
}
```

It is not necessary to have default parameters at the end of the parameter list. E.g.

```javascript
function makeRequest(url, timeout = 2000, callback) {
     ....
}
```

If the parameter was not passed or ```undefined``` was passed for the default parameters then the default value will be used.

If ```null``` is passed as the value, it won't trigger the default value.

In ES5, arguments object behaved differently when in strict mode and in non-strict mode.

```javascript
function mixArgs(first, second) {
    console.log(first === arguments[0]); // true
    console.log(second === arguments[1]); // true
    first = "c";
    second = "d";
    console.log(first === arguments[0]); //true
    console.log(second === arguments[1]); //true
}

mixArgs("a", "b");
```

In non strict mode, arguments were bound with parameters, so changes to parameters in ```first``` and ```second``` reflected in ```arguments[0]``` and ```arguments[1]``` that is why they returned true values. This is different in strict mode, parameters are not bound to arguments so changes to parameters are not reflected in the arguments object, consider the following example.

```javascript
function mixArgs(first, second) {
    "use strict";

    console.log(first === arguments[0]); // true
    console.log(second === arguments[1]); // true
    first = "c";
    second = "d"
    console.log(first === arguments[0]); //false
    console.log(second === arguments[1]); //false
}

mixArgs("a", "b");
```

In ES6 with default parameters and rest parameter case, arguments object always work like ES5 strict mode. E.g.:

```javascript
// not in strict mode
function mixArgs(first, second = "b") {
    console.log(arguments.length); // 1 because only one argument was passed to function.
    console.log(first === arguments[0]); // true
    console.log(second === arguments[1]); //false arguments[1] is not set because it was not passed in
    first = "c";
    second = "d"
    console.log(first === arguments[0]); // false not bound with first parameter.
    console.log(second === arguments[1]); // false arguments[1] is undefined
}

mixArgs("a");
```

## Default Parameter Expression
You can use the expression as the value for the default parameters. You can use a function call to get value of the default parameter or any valid expression. E.g.:

```javascript
let value = 5;
function getValue() {
     return value++;
}

function add(first, second = getValue()) {
     console.log(first+second)
}

add(1,1); // 2
add(1); // 6
add(1); // 7
```

>Note: Default parameter expression is only evaluated when the argument for that parameter is not passed in or is undefined. If you are using a function call as a parameter value make sure you do not remove the calling parenthesis () from function call. Otherwise it will assign the function reference to the parameter instead of the returned value.

You can also have first parameter value assigned to second parameter as a default value. E.g.:

```javascript
function add(first, second=first) { //Valid code
}
```

But you cannot use previous parameter as a value to the earlier parameter because of temporal dead zone TDZ. E.g.:

```javascript
function add(first=second, second) { //throws error
}
```

## REST parameters
You can have any number of parameters passed to a function than formal parameters defined in the function declaration. In ES5, you used ```arguments``` object to access informally parameters passed to a function. ```arguments``` object indices starts from the first formal parameters defined and goes onto the last parameter passed to the function.

```javascript
function foo(first, second) {
     console.log(arguments[0] === first); // true
     console.log(arguments[1] === second); // true
     console.log(arguments[2]); // 3
     console.log(arguments[3]); // 4
     console.log(arguments[4]); // 5
     console.log(arguments[5]); // 6
}

foo(1, 2, 3, 4, 5, 6);
```

In ES6, ```rest parameters``` were introduced. A rest parameter start with three dots "..." followed by a name. E.g.:

```javascript
function foo(first, second, ...args) {
     console.log(first === args[0]); // false
     console.log(second === args[1]); // false
     console.log(args[0]); // 3
     console.log(args[1]); // 4
}
foo(1, 2, 3, 4);
```

Unlike arguments, ```rest parameters``` indices start from the additional parameters only which were not formally declared in the function declaration. And they provide more readability about the function handling more than defined parameters.

>Note:
>1. They must be defined as a last parameter of the function.
>2. Rest parameters cannot be used with object setter functions. Because setter functions only accept one value as a parameter to be set.

The ```arguments``` parameter correctly defines the function parameters regardless of the rest parameter.

## Spread operator
The spread operator in ES6 allows you to spread an array as an individual arguments for a function. E.g.:

```javascript
let arr = [10, 20, 30, 40];
function foo(first, second, third, fourth) {
     console.log(first, second, third, fourth); //10 20 30 40
}

foo(...arr);
```

```arr``` array is spread into individual arguments to a function. You can mix it with other arguments as well. E.g.:

```javascript
let arr = [10, 20, 30, 40];
function foo(first, second, third, fourth, last) {
     console.log(first, second, third, fourth, last); //10 20 30 40 LAST
}
foo(...args, 'LAST');
```

## ES6 function's name property
In ES6, a ```name``` property has been added to every function for debugging purposes. The ```name``` property will contain the name of the function.

```javascript
function doSomething() {}
var doSomethingElse = function () {}
var doAnotherthing = function doAnotherthingElse() {}

console.log(doSomething.name); // doSomething
console.log(doSomethingElse.name); // doSomethingElse
console.log(doAnotherthing.name); // doAnotherthingElse not doAnotherthing because function expression itself has a name.
```

Getter and setter function names will be prefixed with "get" or "set" to distinguish them from regular function.

bind() function will have "bound" prefix to indicate its a bound function.

Functions created from ```Function``` constructors will have "anonymous" as the function name. E.g.:

```javascript
var person = {
    get firstName() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name);
    }
}

console.log(person.firstName.name); // "get firstName"

console.log(doSomething.bind().name);   // "bound doSomething"
console.log((new Function()).name);     // "anonymous"
```


## [[Call]] and [[Constructor]]
In ES6, there are two new **internal methods** associated with functions. When function is executed without new keyword the [[Call]] method is executed and when it is executed with new keyword [[Constructor]] method is executed.

[[Constructor]] method is responsible for setting the new target and calling the function code with this set to the target. Functions that have [[Constructor]] method are called constructors.

>Note: No all functions have [[Constructor]] method. Arrow functions do not have [[Constructor]] method so they cannot be called with new keyword.

## new.target meta-property
A new meta-property has been added in to ES6 to resolve whether the function was called with new keyword or not. [[Constructor]] method of the function fill the target meta property on the ```new``` non-object with the target of the new keyword. Now if the function was called without 'new' keyword the ```new.target``` will be ```undefined``` otherwise it will have the value of the new keyword's target object name.

```new.target``` will throw an error when used outside of the function block. In ES5, this sort of detection was performed using ```instanceof``` keyword on ```this``` variable. Which could be faked. E.g.:

ES5 Example:
```javascript
function Person() {
     if(this instanceof Person) {
         console.log('Good');    
     } else {
         throw new Error('Cannot call Person without new');
     }
}

let p = new Person(); // Good
let p1 = Person(); // throws error
let p2 = Person.call(p); // Good
```

ES6 Example:

```javascript
function Person() {
     if(typeof new.target === Person) { // new.target is set in case of constructor function call
         console.log('Good');    
     } else { // new.target is undefined in case of non constructor function call
         throw new Error('Cannot call Person without new');
     }
}

let p = new Person(); // Good
let p1 = Person(); // throws error
let p2 = Person.call(p); // throws error
```

## Block Level Functions
ES6 provide block level functions. Earlier block level functions when used in strict mode were throwing error but in non-strict mode their behavior was not standardized. It was vendor specific.

In ES6 you can define block level functions, in strict mode, these functions are only available inside that block. Block level functions are hoisted unlike the let/const's block level variables. E.g.:

```javascript
'use strict';
{
  console.log(typeof foo); // function; hoisting works here
  function foo() {
    console.log('foo');
  }
  foo();
}
console.log(typeof foo); // undefined; not available outside the block
```

>Block level functions are available to the global scope if not defined in strict mode. 

>Function expressions using let statements are not hoisted even in block level. They form TDZ.

## Arrow Functions
Arrow functions have the following properties:

1. No this, super, arguments, and new.target bindings - The value of this, super, arguments, and new.target inside of the function is by the closest containing non-arrow function.
2. Cannot be called with new - Arrow functions do not have a [[Constructor]] method and therefore cannot be used as constructors. Arrow functions throw an error when used with new.
3. No prototype - since you can’t use new on an arrow function, there’s no need for a prototype. The prototype property of an arrow function doesn’t exist.
4. Can’t change ```this``` - The value of ```this``` inside of the function can’t be changed. It remains the same throughout the entire life-cycle of the function.
5. No arguments object - Since arrow functions have no arguments binding, you must rely on named and rest parameters to access function arguments.
6. No duplicate named arguments - arrow functions cannot have duplicate named arguments in strict or non-strict mode, as opposed to non-arrow functions that cannot have duplicate named arguments only in strict mode.

Variations of arrow functions:

```javascript
let foo = x => x; // no return keyword required
console.log(foo(6)); // 6

foo = x => x + x; // no return keyword required
console.log(foo(6)); //12

foo = (x, y) => ({x,y}); // no return keyword required. returns object literal
console.log(foo(6, 7)); // {x: 6, u: 7}

foo = x => {
     let y = 10;
     return x + y; // multiple statements in the function body require return keyword
}
console.log(foo(7)); // 17
```

## Tail Call Optimization
Tail call optimization deals with optimizing the call stack of the function calls. A tail call is when the function is called as the last statement inside another function.

function doSomething() {
     //statements;
     return doSomethingElse(); // tail call
}

Tail calls as implemented in ES5 engines are handled just like any other function call: a new stack frame is created and pushed onto the call stack to represent the function call. That means every previous stack frame is kept in memory, which is problematic when the call stack gets too large.

ES6 seeks to reduce the size of the call stack for certain tail calls in strict mode (non-strict mode tail calls are left untouched). With this optimization, instead of creating a new stack frame for a tail call, the current stack frame is cleared and reused as long as the following conditions are met:

1. Tail call do not use closure.
2. Tail call has no further work to do after the tail call returns.
3. Tail call is returned as the function value.
