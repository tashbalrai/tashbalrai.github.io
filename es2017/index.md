###### *[Home](https://tashbalrai.github.io)*, **Block Level Scoping**

## ES2015 to ES2017
JavaScript have evolved too much. The current JavaScript version have so many advanced concepts added like classes, modules, generator functions, arrow functions. ES6 or ES2015 have been a very big release in the JavaScript history and many of the JavaScript implementors are still upgrading to the new ECMAScript standards. These enchancements have made the JavaScript even more powerful. One of the feature that we are going to discuss in this post today is called block level scoping.

## Block Level Scoping
In JavaScript or ECMAScript a block is marked with {} curly braces and block level scoping means that a variable function defined with in a block will only appear in that same block or its inner block but will not be accessible outside of the block.

### let and const variable scoping
A varibale or constant defined with let/const will appear only with in the scope. These are not hoisted.

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

#### No Re-declarations
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

