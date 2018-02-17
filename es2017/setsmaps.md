###### *[Home](https://tashbalrai.github.io)*, **Sets and Maps**

## Sets and Maps
A *set* is a collection of values that cannot contain duplicates. A set is mostly used to check if a particular value is set or not. 

A *map* on the otherhand is the collection of key/value pairs mainly used for information retrieval.

### Sets/Maps in ECMAScript 5 - Workarounds

**ECMAScript 5 Usage as Set**
```javascript
let set = Object.create(null); // creates object with null so that it doesn't inherit object properties and methods.

set.foo = true;

// checking if exists
if (set.foo) {
    // some statements
}
```

**ECMAScript 5 Usage as Map**
```javascript
let map = Object.create(null);
map.key = "key_value";
// get value from key
let val = map.key;

console.log(val); // "key_value"
```

### Problems with ECMAScript 5 Set/Map Workarounds

E.g.: #1
```javascript
let map = Object.create(null);
map[3] = "FooBar";
console.log(map["3"]);
```

In the above code, a value "FooBar" is added to the numeric key 3. Internally, all numeric keys are converted to strings so value 3 would be represeted as "3". That means you cannot add two keys with numeric and string version the same key.

E.g.: #2
```javascript
let map = Object.create(null),
    k1 = {},
    k2 = {};

map[k1] = "FooBar";

console.log(map[k2]); 
```

Here, k1 and k2 are object and when they are used in a context of a string that gets converted to a string representation of the object i.e. "[object Object]". One may logically think that different objects would have different string representation based on the data. This means objects cannot be used as keys of an object.

E.g.: #3
```javascript
let map = Object.create(null);

map.len = 1;

// check if len exists and/or a non-zero value
if (map.len) {
    // ...
}
```

Here, if ```len``` becomes 0 the code block inside the ```if``` statement will not execute. The intention of the code was to check the existence and non-zero value. While the ```len``` key exists, it still evaluated as false.

## ECMAScript 6 Sets
Set is an ordered list of unique (no duplicate) values.

```new Set()``` creates a new set. 

```add()``` method can be used on a set to add values to the set.

```size``` property tell the number of values inside a set.

```javascript
let set = new Set();
set.add(27);
set.add("27");
set.add({}); // objects can be added
set.add({}); // multiple objects added to set because they are not converted to string.
set.add(); // adds undefined to the set
set.add(27); // duplicates are simplly ignored.
set.add(); // duplicate undefined value will also be ignored.
console.log(set.size); // output 5
```

Sets can contain two different values for 27 and "27" because it doesn't coerce the value to be a string. Objects are treated as a separate item, so you can have multiple object items.

```delete()``` method deletes a single value from the set.
```clear()``` removes all of the values from the set and makes it empty.
```has()``` checks if a value exists in a set.


### forEach With Sets
```forEach``` accepts a callback function and this callback accepts 3 arguments.

```javascript
set.forEach(function(value1, value2, set){
    // ... statements
}[, thisValue]);
```

```value1``` and ```value2``` are same and hold the value of the set at current position.

```set``` is the set itself.

```thisValue``` is optional to pass. If passed callback function will have ```this``` set to the passed object.

> If you use the arrow function you wont need to pass ```this``` reference to the function.

### Set to Array to Set
You cannot access the ```set``` values with index as you do with array. To access the values like array, you need to convert it to array first using the spread operator.

E.g.: Set to array conversion.
```javascript
let set = new Set([4, 6, 3, 5, 3, 4, 5]), // duplicates are removed in conversion to set
    array = [...set];

console.log(array);             // [ 4, 6, 3, 5 ]
```

An array can be easily converted to a set by passing the array to the set constructor. A set can be easily converted to an array using the spread operator.

## StrongSet or Set
A set can also be considered as a strong set. Object elements in a set are considered as a variable which stores its reference so an object in the set is not garbage collected until all of its references are not destroyed. Consider the following example.

```javascript
let set = new Set(),
    obj = {};

set.add(obj);
console.log(set.size); // 1
obj = null;

console.log(set.size); //1
obj = [...set][0]; // restore the object reference
```

In above example, ```obj = null``` clear one reference to the ```obj``` but one reference to the object is still remains in the set. So, the ```obj``` is not garbage collected.

## WeakSet
A weak set objects are always garbage collected when all the outer references are destroyed. WeakSets store a weak reference to the object as values inside them which can be garbage collected if it is the only reference to object. 

WeakSets only store weak references. WeakSets do not store primitive values.

```javascript
var wset = new WeakSet(),
    key = {};

wset.add(key);
console.log(wset.has(key)); // true
key = null;
console.log(wset.has(key)); // false
```


