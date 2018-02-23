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
Parameters passed to generators are assigned to the variables through the ```yield``` assignment statement. The very first ```next()``` method of iterator ignores the parameter passed. The second call handsovers the parameter to the ```yield``` keyword in the generator function which then assign the value to the left handside variable and the execution starts till the next ```yield``` keyword. If the third call to the iterator's ```next()``` is parameterized then again same steps are taken.

![Object References Figure](/assets/generator.jpg)
```javascript
// output
// Object { value: 1, done: false }
// Object { value: 4, done: false }
// Object { value: 16, done: false }
// Object { value: 1, done: false }
// Object { value: undefined, done: true }
```

The first iterator call with maroon color executes and returns 1 as a value. Execution inside generator stops and the orange color code runs when iterator's ```next()``` method is called, shown in orange color, and the value 2 is passed to the first variable and after executing the orange color code again, the execution inside the generator stops and this process goes on for all of the ```yield``` statements.

### return keyword inside generator
When ```return``` keyword is encountered in generator all of the pending ```yield``` statements are just ignored. Returned value with ```return``` keyword gets assigned to the ```value``` property of the iterator and ```done``` property is set to true. Value sent using the ```return``` keyword is simply ignored by the ```for-of``` loop and the ```next()``` method call's ```done``` property is used to designate the end of the generator output.

### iterator.throw error inside generators
```throw()``` method on iterator can be used to pass a conditional error to the generator function. When this happen, execution inside the generator function is halted and an error is raised.

```try-catch``` can be used inside the generator around the ```yield``` to suppress the error and continue through the next ```yield``` statement.

```javascript
function* errorGenerator() {
  try {
    let first = yield 1;
  } catch(e) {
    first = 10;  
  }
  let second = yield first * 2;
  yield 'passed';
}

it = errorGenerator()
console.log(it.next()); // {value:1, done: false}
console.log(it.throw(new Error('Custom error condition.')));
console.log(it.next());

// Output
// Object { value: 1, done: false }
// Object { value: 20, done: false }
// Object { value: "passed", done: false }
```

Here, ```throw()``` method passes a custom error to the generator. Since, the ```yield``` statement that gets the error method is being surrounded by the ```try-catch``` statement, the error passed is not thrown but is handled and ```first``` is assigned a different value and the control goes to the next ```yield``` statement in the generator. If there were no ```try-catch``` block, error would have thrown. Error location returned by the JavaScript engine points to the location of ```throw()``` method outside generator function.

### Delegating Generators
A generator can combine multiple generators to delegate the tasks. In this environment, each ```next()``` call first goes to the first delegated generator and then one by one it processes the ```yield``` statements in the first generator, then goes to the second generator and so on. Consider the example below.

To delegate to another generator, you need to use the ```yield``` keyword followed by star (\*) and than generator name with paranthesis.

```yield * generatorName();```

E.g.:
```javascript
function *delegateOne() {
  yield 1;
  yield 2;
  return 3;
}

function *delegateTwo(max) {
  yield 'Max is ' + max;
  yield * "ABCD";
}

function *combineDelegators() {
  let result = yield *delegateOne();
  yield "executing next delegate";
  yield *delegateTwo(result);
  yield "All done";
}

let it = combineDelegators();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Output
// Object { value: 1, done: false }
// Object { value: 2, done: false }
// Object { value: "executing next delegate", done: false }
// Object { value: "Max is 3", done: false }
// Object { value: "A", done: false }
// Object { value: "B", done: false }
// Object { value: "C", done: false }
// Object { value: "D", done: false }
```

In the above example, we have two delegates ```delegateOne()``` have two ```yield``` statements and a ```return``` statement. ```delegateTwo()``` is the another delegate, it has one ```yield``` statement which confirms the value of the parameter passed to it and then it delegate to the default string iterator to yield 4 values i.e. "A", "B", "C", and "D".

>Note: All the default iterator can be used as delegate. E.g.: strings default iterator is used in the above example.

Lastly, we have generator which combines these delegates, called ```combineDelegates()```, first delegates to ```delegateOne()``` once all the ```yield``` statements are finished from this delegates then the ```yield``` statement in the ```combinDelegates()``` sends the value `executing next delegate` and then proceeds to process all the ```yield``` statements in the ```delegateTwo()``` and then the last ```yield "All done"``` is executed. Also, note that, ```delegateOne()```'s ```return``` statement will return 3 as a value which is assigned to the ```result``` variable.

