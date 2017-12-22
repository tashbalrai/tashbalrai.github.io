###### *[Home](https://tashbalrai.github.io)*, [JS Types](/js/index.html), [Functions](/js/functions.html), **Arrays**, [RegExp](/js/regexp.md), [Inheritance](/js/inheritance.md), [Prototype](/js/proto.md), [Object](/js/object.md), [Awful Parts](/js/awful.md),

## JavaScript Arrays
JavaScript arrays are objects itself but they are different type of objects. Arrays are created from ```Array.prototype``` and Objects are created from ```Object.prototype```.

Arrays do have many associated properties and methods which are inherited from its prototype i.e. ```Array.prototype```. E.g. Arrays have ```push()``` and ```pop()``` methods but Objects do not have. Arrays have ```length``` property which gives the length of array indexes but the objects ```length``` property will always be 1 no matter how many properties methods the object contains. 

> ```length``` of the array is last index of the array plus one but not the actual number of elements stored in the array.

E.g.:

```javascript
var arr = [];
console.log(arr.length); //gives 0
arr[0] = 'Hi';
console.log(arr.length); //gives 1
arr[100] = 'Hey';
console.log(arr.length); // gives 101
```

Actual number of elements in the array are 2 but the last console.log operation will give 101 length.

If an expression is used as a key for an array element, it will be converted to string using its toString() method. If the resultant output of the expression is a numeric representation then it is treated as a numeric key and length of the array is calculated by adding 1 to its last index.

E.g.:
```javascript
var arr = [];
arr[10] = '10th';
arr[5+1] = '6th';
console.log(arr.length) //gives 11
arr[5 + 15] = '20th';
console.log(arr.length) //gives 21
```
If you use a string as a key of array which cannot be converted to numeric, the length property will remain untouched.

