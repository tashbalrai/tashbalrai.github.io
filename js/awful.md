###### *[Home](https://tashbalrai.github.io)*, [Overview](/js/index.html), [Types](/js/types.html), [Functions](/js/functions.html), [Arrays](/js/arrays.html), [Object](/js/object.html), [Prototype](/js/proto.html), [Inheritance](/js/inheritance.html), [RegExp](/js/regexp.html), **Awful Parts**

## Automatic Semicolon Insertion (ASI)
JS tries to auto correct the code by inserting the semicolon where a programmer omitted the ";". This creates worse case, consider the following return statement.

```javascript
return
{
     status: true
};
```

It appears this code is trying to return an object containing status:true property. But in fact it returns undefined because of JavaScript's ASI. This code can be corrected by placing starting bracket inline with return statement.

```javascript
return {
     status: true
};
```

This code now will return object.

## Global Variables

Variables defined outside function are treated as global variables.
```javascript
var foo = 'bar';
```

Variables assigned directly to global object (window) are treated global variables.
```javascript
window.foo = 'bar';
```

However, if you declare a variable inside a function with the use of ```var``` statement, it will be treated as global.
```javascript
function buzz () {
     foo = 'bar';
}
```

Global variables can make programs hard to understand and debug.

## Reserve words

JS reserve words cannot be used for variable names. However, you can use them as object properties by enclosing them inside quotes. You cannot access object keys with dot notation if key name is a reserve word.

```javascript
var obj = {case: 'value'}; //illegal
var obj2 = {'case': 'value'}; //Okay

obj2.case; //illegal
obj2['case']; //Okay
```

This behavior has been changed in latest versions of JS. e.g. ES6;

## typeof Operator

The typeof operator should return the type of the variable. e.g.

```javascript
typeof 98.2; // 'number'
```

However,

```javascript
typeof null; // is 'object' while should be null
```

You can easily check ```null``` with '===' operator. E.g.: my_value === null

A bigger problem is testing a value for object-ness. Because ```typeof null``` would also be object. You can counter this with following code because ```null``` value is always falsy and objects are truthy values.

```javascript
if(my_value && typeof my_value === 'object') {
     //if my_value would be null it will be test as falsy
     //all objects are truthy values whether empty or not.
}
```

## parseInt Function
```parseInt``` function converts textual to number. It stops when it sees digit and return the parsed number value till non-number character.

if ```praseInt``` tries to convert a string with 0 zero prefixed string it will treat it as octal number. As a result, if you tries to parse a number 08 or 09 it will return 0 zero because in octal 8 and 9 are considered non digit numbers. Default radix behavior depends on different implementations.

Luckily, parseInt function accepts second parameter as radix, we should make a practice to always supply radix parameters to avoid such glitches.

E.g.:
```javascript
parseInt('08'); // output zero
parseInt('08', 10); //output 8
```
