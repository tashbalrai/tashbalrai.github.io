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
set.add(5);
set.add("5");
console.log(set.size);
set.add({}); // objects can be added
set.add({}); // multiple objects added to set because they are not converted to string.
set.add(); // adds undefined to the set
```
