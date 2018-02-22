###### *[Home](https://tashbalrai.github.io)*, **Iterators and Generators**

## Iterator
An iterator is a good way of iterating of the iterable data. Iterators have ```next()``` method that returns a result object which contains two properties ```value``` and ```done```. When iterator has processed all the positions the ```done``` property will contain a boolean ```true``` value. Iterator have an internal pointer will tracks the location with in collection. 

ECMAScript 5 iterator implementation example.
```javascript
function getIterator(collection) {
  var pointer=0;
  
  return {
    next: function () {
      var done = (pointer >= collection.length);
      var value = !done? collection[pointer] : undefined;
      
      pointer++;
      
      return {done:done, value:value};
      
    }
  };
}

var it = getIterator(['a', 'b', 'c']);
console.log(it.next()); // {done:false, value:"a"}
console.log(it.next()); // {done:false, value:"b"}
console.log(it.next()); // {done:false, value:"a"}
console.log(it.next()); // {done:true, value:undefined}
console.log(it.next()); // {done:true, value:undefined}
```

## Generators
A generator is a special function that return an iterator. A generator function can use ```yield``` keyword. A star (\*) character is used next to the ```function``` keyword. Whenever the ```next()``` method is called on the returned iterator it executes the code in iterator until it reaches the next ```yield``` keyword and returns the value marked by ```yield```. When ```yield``` keyword is encountered, generator execution is stopped.

>Note: ```yield``` keyword can only be used inside of a generator function or it will be a Syntax Error. Cannot be used even in a nested function of a generator function.

```javascript
function *getIterator() {
  const colors = ['red', 'green', 'blue'];
  
  for(let i=0; i<colors.length; i++) {
    yield colors[i];
  }
}

const it = getIterator();
console.log(it.next()); // { value: "red", done: false }
console.log(it.next()); // { value: "green", done: false }
console.log(it.next()); // { value: "blue", done: false }
console.log(it.next()); // { value: undefined, done: true }
```

E.g.: Function expression
```javascript
const o = {
  getIterator: function *() {
    const colors = ['red', 'green', 'blue'];
  
    for(let i=0; i<colors.length; i++) {
      yield colors[i];
    }
  }
};

const it = o.getIterator();
console.log(it.next()); // { value: "red", done: false }
console.log(it.next()); // { value: "green", done: false }
console.log(it.next()); // { value: "blue", done: false }
console.log(it.next()); // { value: undefined, done: true }
```

E.g.: Concise Function/Method
```javascript
const o = {
  *getIterator() {
    const colors = ['red', 'green', 'blue'];
  
    for(let i=0; i<colors.length; i++) {
      yield colors[i];
    }
  }
};

const it = o.getIterator();
console.log(it.next()); // { value: "red", done: false }
console.log(it.next()); // { value: "green", done: false }
console.log(it.next()); // { value: "blue", done: false }
console.log(it.next()); // { value: undefined, done: true }
```

## Iterables and for-of loop
Iterables are the objects in JavaScript who have default iterator defined with Symbol.iterator property. Arrays, sets, strings are all iterable objects in ECMAScript 6 because all these objects have Symbol.iterator default iterator set.

All iterable objects can be iterated using ```for-of``` loop. ```for-of``` loop is the latest addition in ES6. It works by getting the default iterator and calling the ```next()``` each time the loop runs and stops when ```done``` property of the iterator becomes ```true```.

```javascript
const val = [1, 2, 3];
for(const num of val) {
  console.log(num);
}

// output
// 1
// 2
// 3
```

### isIterable check
You can check if a particular object is iterable or not, by checking the Symbol.iterable property on the object.

E.g:
```javascript
isIterable(obj) {
  return (typeof obj[Symbol.iterator] === 'function');
}
```

### Creating Custom Objects Iterable
Custom objects by default are not iterable. You can define an iterator on object's Symbol.iterator property to make the object iterable.

```javascript
const o = {
  collection: [],
  *[Symbol.iterator]() {
    for(const col of this.collection) {
      yield col;
    }
  }
};

o.collection.push('a');
o.collection.push('b');

for(const item of o) {
  console.log(item);
}

// output
// 'a'
// 'b'
```

## Built-in Iterators
1. ```entries()``` iterator returns an array of two elements.
  i.   For maps, first element contains key and the second value.
  ii.  For sets, first and second both elements contain same value.
  iii. For arrays, first element is the index and the second element is the value.

```javascript
const arr = ['first', 'second', 'third'];
for(const [index, value] of arr.entries()) {
  console.log('[Array] Index: ', index, ' Value: ', value);
}

const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
for(const [index, value] of map.entries()) {
  console.log('[Map] Index: ', index, ' Value: ', value);
}

const set = new Set('abc');
for(const [index, value] of set.entries()) {
  console.log('[Set] Index: ', index, ' Value: ', value);
}

// [Array] Index:  0  Value:  first
// [Array] Index:  1  Value:  second
// [Array] Index:  2  Value:  third
// [Map] Index:  key1  Value:  value1
// [Map] Index:  key2  Value:  value2
// [Map] Index:  key3  Value:  value3
// [Set] Index:  a  Value:  a
// [Set] Index:  b  Value:  b
// [Set] Index:  c  Value:  c
```

2. ```values()``` iterator returns values.

```javascript
const arr = ['first', 'second', 'third'];
for(const value of arr.values()) {
  console.log('[Array] Value: ', value);
}

const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
for(const [index, value] of map.values()) {
  console.log('[Map] Value: ', value);
}

const set = new Set('abc');
for(const [index, value] of set.values()) {
  console.log('[Set] Value: ', value);
}

// output
// [Array] Value:  first
// [Array] Value:  second
// [Array] Value:  third
// [Map] Value:  value1
// [Map] Value:  value2
// [Map] Value:  value3
// [Set] Value:  a
// [Set] Value:  b
// [Set] Value:  c
```

3. ```keys()``` iterator returns keys.
  i.   For maps, keys of the map.
  ii.  For sets, return value.
  iii. For arrays, numeric index only.

```javascript
const arr = ["first", "second", "third"];
for(const key of arr.keys()) {
  console.log('[Array] Key: ', key);
}

const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
for(const key of map.keys()) {
  console.log('[Map] Key: ', key);
}

const set = new Set('abc');
for(const key of set.keys()) {
  console.log('[Set] Key: ', key);
}

// output
// [Array] Key:  0
// [Array] Key:  1
// [Array] Key:  2
// [Map] Key:  key1
// [Map] Key:  key2
// [Map] Key:  key3
// [Set] Key:  a
// [Set] Key:  b
// [Set] Key:  c
```

> Spread operator can be used to convert Strings, Sets and Maps to Array.

E.g.:
```javascript
const set = new Set([1,2,3,4]);
const str = 'abcd';
const map = new Map([['name', 'Harry'], ['age', 25]]);
const arr = [...set, ...str, ...map];
console.log(arr);

// output
// [1, 2, 3, 4, 'a', 'b', 'c', 'd', ['name', 'Harry'], ['age', 25]]
```

## Advanced Features of Generators

### Passing parameters to generators
Parameters passed to generators are assigned to the variables through the yield assignment statement. The very first ```next()``` method of iterator ignore the parameters passed. The second call handsover the parameter to the ```yield``` keyword in the generatro function which then assign the value to the left handside variable.  
