###### *[Home](https://tashbalrai.github.io)*, **Block Level Scoping**, [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), [String Features](https://tashbalrai.github.io/es2017/string.html), [Unicode](https://tashbalrai.github.io/es2017/unicode.html), [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), [Destructuring](https://tashbalrai.github.io/es2017/destructuring.html), [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), [Promises](https://tashbalrai.github.io/es2017/promises.html), [Classes](https://tashbalrai.github.io/es2017/classes.html), [Modules](https://tashbalrai.github.io/es2017/modules.html)

## ES2015 to ES2017
JavaScript have evolved too much. The current JavaScript version have so many advanced concepts added like classes, modules, generator functions, arrow functions. ES6 or ES2015 have been a very big release in the JavaScript history and many of the JavaScript implementors are still upgrading to the new ECMAScript standards. These enchancements have made the JavaScript even more powerful. One of the feature that we are going to discuss in this post today is called block level scoping.

## Block Level Scoping
In JavaScript or ECMAScript a block is marked with {} curly braces and block level scoping means that a variable and/or a function defined with in a block will only appear in that same block or its inner block but will not be accessible outside of the block.

### let and const variable scoping
A variable/constant defined with let/const will appear only with in the block scope. These are not hoisted.

The ```let``` keyword defines a block level variable.

The ```const``` keyword defines a block level constant.

E.g.:
```javascript
{
     const pageSize = 10; //Only accessible within the block
     let val = 10; //Only accessible within the block
}
console.log(val); //ReferenceError: val is not defined
```

**No Re-declarations**: we cannot declare a variable again if defined already.
Example 1:
```javascript
var count = 30;
// Syntax error
let count = 40; //Cannot redeclare variable of same name with-in the same scope.
```

Example 2: We can re-declare a variable/constant with 'let' or 'const' inside a block with the same name as defined by another variable/constant outside of the block.

```javascript
var count = 30;
// Does not throw an error
if (condition) {
    let count = 40;
    // more code
}
```

Example3: No hoisting with let/const.
```javascript
console.log(count2); //ReferenceError: can't access lexical declaration `count2' before initialization
let count2 = 10;
```

#### const works on binding basis
If you declare an identifier with const the value bounded to the identifier cannot be changed. E.g.:

```javascript
const name = 'foo';
name = 'bar'; //throws an error because you cannot change the value bound to name variable/identifier.
```

If you declare objects with const you can change the values of the object. E.g.:
```javascript
const person = {
     name: 'foo'
};

person.name = 'bar'; //works
```

This is because person constant is bound to the object not its values. Means person's reference to the object cannot be changed but value of the object properties can be changed.

However, following would give error.
```javascript
person = {};
```

Because you cannot change the binding of the constant.

### let keyword with loops.
No more IIFE inside for loops. The ```let``` declaration creates a new variable i each time through the loop, so each function created inside the loop gets its own copy of i. Each copy of i has the value it was assigned at the beginning of the loop iteration in which it was created. The same is true for for-in and for-of loops. ```let``` 'counters' in the loops are throw away 'counter' variables that exist only for the life span of the loop.

It’s important to understand that the behavior of ```let``` declarations in loops is a specially-defined behavior in the specification and is not necessarily related to the non-hoisting characteristics of ```let```. In fact, early implementations of let did not have this behavior, as it was added later on in the process.

### const keyword with loops.
There are different behaviors based on the type of loop you’re using. For a normal ```for``` loop, you can use ```const``` in the initializer, but the loop will throw a warning if you attempt to change the value. The first iteration of the loop, where i is 0, executes successfully. An error is thrown when i++ executes because it’s attempting to modify a constant. For example:

```javascript
var funcs = [];
// throws an error after one iteration
for (const i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
```

The for-in and for-of loops work with const because the loop initializer creates a new binding on each iteration through the loop rather than attempting to modify the value of an existing binding.

### Global Block Bindings
If you use ```let``` or ```const``` in the global scope, a new binding is created in the global scope but no property is added to the global object. That also means you cannot overwrite a global variable using let or const, you can only shadow it. Here’s an example:

```javascript
// in a browser
let RegExp = "Hello!";
console.log(RegExp);                    // "Hello!"
console.log(window.RegExp === RegExp);  // false

const ncz = "Hi!";
console.log(ncz);                       // "Hi!"
console.log("ncz" in window);           // false
```

### Summary

The ```let``` and ```const``` block bindings introduce lexical scoping to JavaScript. These declarations are not hoisted and only exist within the block in which they are declared. This offers behavior that is more like other languages and less likely to cause unintentional errors, as variables can now be declared exactly where they are needed. As a side effect, you cannot access variables before they are declared, even with safe operators such as typeof. Attempting to access a block binding before its declaration results in an error due to the binding’s presence in the temporal dead zone (TDZ).

In many cases, ```let``` and ```const``` behave in a manner similar to ```var```; however, this is not true for loops. For both ```let``` and ```const```, for-in and for-of loops create a new binding with each iteration through the loop. That means functions created inside the loop body can access the loop bindings values as they are during the current iteration, rather than as they were after the loop’s final iteration (the behavior with var). The same is true for let declarations in for loops, while attempting to use const declarations in a for loop may result in an error.

The current best practice for block bindings is to use ```const``` by default and only use ```let``` when you know a variable’s value needs to change. This ensures a basic level of immutability in code that can help prevent certain types of errors.
