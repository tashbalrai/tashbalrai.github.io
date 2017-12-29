###### *[Home](https://tashbalrai.github.io)*, [Overview](/js/index.html), [Types](/js/types.html), [Functions](/js/functions.html), **Arrays**, [Object](/js/object.html), [Prototype](/js/proto.html), [Inheritance](/js/inheritance.html), [RegExp](/js/regexp.html), [Awful Parts](/js/awful.html),

## JavaScript Arrays
JavaScript arrays are objects itself but they are different type of objects. Arrays are created from ```Array.prototype``` and Objects are created from ```Object.prototype```.

#### Array Index & Length
Arrays do have many associated properties and methods which are inherited from its prototype i.e. ```Array.prototype```. E.g. Arrays have ```push()``` and ```pop()``` methods but Objects do not have. Arrays have ```length``` property which gives the length of array indexes but the objects ```length``` property will always be 1 no matter how many properties and/or methods the object contains. 

*```length``` of the array is last index of the array plus one but not the actual number of elements stored in the array.*

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

All character indices will remain at last. The above array will be represented as below:

> arr -> [1, 2, 3, 4, 'a':'a']

##### Manipulating Length Explicitly
Arrays length property can be explicitly set. Setting larger value than the actual array elements will not allocate more space but those places will be filled with undefined holes. Setting lesser value than the actual array elements will delete the elements from the end.

```javascript
var arr = [10];
arr.length = 3; //[10, undefined, undefined]
arr[arr.length] = 11; //[10, undefined, undefined, 11]
arr.length = 1; // [10] deletes other elements from tail of the array.
```

#### delete
Arrays are objects so delete will remove the element from the array. But it will not update the array positions. It leaves a hole in the array with undefined value. To update the array position, (to remove holes), we need to shift the tail elements forward. Array slice does the same thing in a very convenient way.

Use array slice to delete elements from array.

```javascript
var arr = [10, 20, 30, 40];
arr.splice(2,1); // removes only 1 element at index 2 i.e. 30.
```

#### Array Iteration
Since, arrays are object so ```for in``` loop can be used to iterate all elements but order of elements is not guaranteed.
Use ```for``` loop if order of elements matter.
