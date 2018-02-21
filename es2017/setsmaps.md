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

### Set Constructor Input
You can directly pass an iterable to the set constructor and it will add all the unique values to the set.

```javascript
const set = new Set([['key'], ['key'], ['key']]); // Array of array iterable passed

console.log('Set Size:', set.size);
for(const val of set.values()) {
    console.log('Set Value:', val);
}

// Set Size: 3
// Set Value: Array [ "key" ] 
// Set Value: Array [ "key" ]
// Set Value: Array [ "key" ] 
```
Each nested array is considered as a unique value because each nested array has a unique reference.

```javascript
const set = new Set(['key', 'key', 'key']); // Array iterable passed

console.log('Set Size:', set.size);
for(const val of set.values()) {
    console.log('Set Value:', val);
}

// Set Size: 1
// Set Value: key 
```
Here, array do not have nested arrays so uniqueness is computed based on value of the elements.

You can also use maps as input to the Set constructor.

```javascript
const set = new Set(new Map([['key1', 'value1'], ['key2', 'value2'], ['key1', 'value3']]));
console.log('Set Size: ', set.size);
for(const [key, value] of set.entries()) {
    console.log('Set Key: ', key, ' Value: ', value);
}

// Set Size:  2
// Set Key: Array [ "key1", "value3" ] Value: Array [ "key1", "value3" ]
// Set Key: Array [ "key2", "value2" ] Value: Array [ "key2", "value2" ]
```

In case of maps as input to the constructor, uniqueness is tracked based on the map keys. If key is duplicate the later key-value will override the former key-value.

If you pass multiple parameters to the constructor and all parameters are iterables then only the first one is accepted by set. For example:

```javascript
const set = new Set('hello', 'there');

console.log('Set Size: ', set.size);
console.log('Set Has[\'t\']:', set.has('t'));

for(const value of set.values()) {
  console.log('Set Value: ', value);
}

// Set Size:  4
// Set Has['t']: false
// Set Value:  h
// Set Value:  e
// Set Value:  l
// Set Value:  o
```

```set.has('t')``` is false because it is not there in the set. You will notice size is 4 and also one 'l' is missing this is because 'l' repeast two times and sets only contain unique values so first 'l' is overridden.

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

### Notable things about WeakSets
1. Weak references to the object values.
2. ```add()``` method throws error on adding primitive values.
3. ```delete()``` and ```has()``` method returns ```false``` if passed primitive value.
4. WeakSets are not iterable and cannot be used in ```for-in``` loop.
5. WeakSets do not have iterators so no way of programmatically explore the contents of a WeakSet.
6. Do not have ```forEach()``` method.
7. Do not have ```size``` property.

WeakSets are a good way of handling the object references i.e. to find if any object is still available or not.

## Maps in ECMAScript 6
Maps are key-value pairs. Maps do not coerce the keys to be strings so 3 and "3" keys are both different and can store different values.

Maps can also use objects as keys and this feature provides a way to associate additional data to an object without modifying the original object itself.

```javascript
let map = new Map([['key1', 'value1'], ['key2', 'value2']]); // initializing the Map with constructor call.
let key = {};
map.set(key, 'My key is an object'); // object can be keys

// Cannot track the object once added 
// because no refernce to the original object available afterwards
map.set({}, 'I am untrackable.');

console.log(map.get(key)); // 'my key is an object'

// undefined because reference to passed object 
// is not same as the object we set earlier.
console.log(map.get({}));

console.log(map.get('key1')); // value1
```

Map constructor accepts an array of arrays with key-value pair e.g. ```[['key1', 'value1'], ['key2', 'value2']]```. Each child array contains exactly two values. First as key and second as value. Array is used to initialize the Map with constructor instead of object because object's keys are coerced to be strings hence eliminates the type information.

```set(key, value)``` method can be used to set the values in the map. ```get(key)``` method can be used to get the value. If there is no key exists with the one passed into the ```get(key)``` method. It will return undefined.

If you use direct object literal as a key to ```set(key, value)``` method, you will no longer be able to get back the value of the same object because each object have a different reference.

```has(key)``` method return true or false.
```delete(key)``` method removes one key-value pair from the map specified with the key.
```clear()``` method removes all of key-value pairs from the map and makes the map empty.
```size``` property give number of key-value pairs a map contains.

### forEach method for Maps
Maps do have a forEach method which accepts callback same as the Sets case. The only difference is that the second argument to the callback is the key instead of the same value as in Sets.

```javascript
const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
map.forEach(function(value, key, omap) {
    // statements
});
```

```forEach()``` method process the key-value pairs in order they were inserted to the map. Array are processed based on the index value of the array instead of the insertion order.

## WeakMaps
Similar to WeakSets, WeakMaps cannot store primitive values as keys. Every key must be an object. WeakMap keys are weak references same as in sets i.e. garbage collector will remove the element if all the outside references are destroyed. 

### Notable things about WeakMaps

1. Do not have ```clear()``` method. 
2. Do not have ```size``` property.
3. Do not have ```forEach()``` method.
4. Cannot programmatically explore content. It is not iterable.
5. Cannot use ```for-in``` loop.

>Its important to note that only keys in a WeakMap are weak references not its values. If a value have references outside it won't be garbage collected even if the key do not have any references outside.

>WeakMaps are suitable for tracking the DOM elements like a DOM caching system. Where we need to automatically remove the references to the DOM elements whenever a DOM element itself is deleted. This prevents from the memory leaks.

>WeakMaps and WeakSets are memory efficient implementations because of the property of having weak references to the set elements and weak references to the map keys.
