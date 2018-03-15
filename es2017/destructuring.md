###### *[Home](https://tashbalrai.github.io)*, [Block Level Scoping](https://tashbalrai.github.io/es2017/index.html), [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), [String Features](https://tashbalrai.github.io/es2017/string.html), [Unicode](https://tashbalrai.github.io/es2017/unicode.html), [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), **Destructuring**, [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), [Promises](https://tashbalrai.github.io/es2017/promises.html), [Classes](https://tashbalrai.github.io/es2017/classes.html), [Modules](https://tashbalrai.github.io/es2017/modules.html)

## Destructuring
Extract the values from a nested objects or arrays. Destructuring can be used in variable declarations, assignements, function calls, function return values, for-of loops etc.

To construct data, we keep variable on left handside of the assignment operator. For example:

```javascript
let obj = {first: "vince" , last: "jhonson"};
```

To extract the data now from already assigned variable whether its value is array or object, we reverse it. We keep structural pattern on the left side and variable on rigth side of the assignment operator. For example:

```javascript
let {first:f, last:l} = obj;
```

In ES2015, we can do the above and in fact, this is what is called destructuring.

## Patterns for Destructuring
Two parties are involved in destructuring:

**1. Destructuring source:** the data to be destructured e.g. a variable holding array or object.

**2. Destructuring target:** the pattern used for destructuring.

There are two types of pattern used for target. These are called object pattern and array pattern. 

**Object pattern:** It consists of object properties and further property values can be pattern recursively.

**Array pattern:** It consists of array elements and further an element can be a pattern recursively.

Patterns can be nested deeply.

### Object pattern coerce the values to objects.
It means primitive values can also be used with object pattern.

```javascript
let {length: len} = "abc";
console.log(len);
// Output: 3
```

```undefined``` and ```null``` gives TypeError when using with destructuring. This is because conversion of primitive values is not done using Object() but instead is done with internal method ToObject(). ToObject throws TypeError instead of empty object.

>You can check if a value is coercible to object or not using an empty object pattern

```javascript
({} = [true, false]) // OK, arrays are coercible to object.
({} = "abc") // OK, string values are coercible to object.
({} = undefined) // TypeError, undefined is not coercible to object.
({} = null) // TypeError, null is not coercible to object.
```

### Array pattern works with iterables
String are iterables so it works with strings too.

```javascript
let [x, ...y] = "abc"; // x = "a", y = ["b", "c"]
```

As of ES2015, strings return code points instead of code units.

>You can’t access the elements of a Set via indices, but you can do so via an iterator. 

Non iterables cannot be destructured using array pattern. It throws TypeError which means you can use the empty array pattern to check if a particular value is iterable or not.

```javascript
[] = {} // TypeError empty objects are not iterable
[] = undefined // TypeError
[] = null // TypeError
```

## Default values
You can specify a default value if there is not match or ```undefined``` value in the destructuring source. Default value is optional and can be assigned with assignment operator.

```javascript
const [x=0, y] = [];
const {first:x=0, last:l} = {};
```

If no default value is given and there is no match the variable is set to ```undefined```.

### Default values are only computed when required. 

```javascript
function someValue() {
  console.log('Executed');
  return 10;
}

const {first: f=someValue(), last:l} = {first:"v", last:"j"};
```

In the above code, the function *someValue* will never execute because default value was not needed so function wasn't evaluated. But in the below code it will.

```javascript
const [x=someValue(), y=0] = [];
```

### Default values can refer other variables in the pattern.
Order matters when refering to the default values. Variables are declared from left -> right. So, refering to a variable which is not yet been defined will throw a reference error.

```javascript
const [x=2, y=x] = [1]; // It works.
const [x=y, y=2] = [1]; // It doesn't work. ReferenceError
```

### Default values for pattern
A complete pattern can have a default value.

```javascript
const [{ prop: x } = {}] = []; // because there is no prop in source; an empty object will be assigned
const [{ prop: x } = { prop: 123 }] = [{}]; // because there is no prop in source; {prop:123} will be assigned. x will have 123 value.
```

Property value shorthands are a feature of object literals: If the property value is a variable that has the same name as the property key then you can omit the key.

ES6 object literals can have computed property keys and same goes for destructuring as well. You can use the square brackets for computed propery keys.

```javascript
const FOO = 'foo';
const { [FOO]: f } = { foo: 123 }; // f = 123

// Create and destructure a property with key as symbol
const KEY = Symbol();
const obj = { [KEY]: 'abc' };
const { [KEY]: x } = obj; // x = 'abc'
```

### Few Array destructuring features.
#### Array holes
Array holes can be used to skip the elements in the source.

```javascript
const [,, x, y] = ['a', 'b', 'c', 'd']; // x = 'c'; y = 'd'
```

#### Rest operator
A rest operator can be used to capture the rest of the iterables into any array. If an rest operator is used in array pattern it must be the last in the array.

```javascript
const [x, ...y] = ['a', 'b', 'c']; // x='a'; y=['b', 'c']
```

If rest element doesn't have a match in source it will be set to empty array.

```javascript
const [x, ...y] = ['a']; //x='a', y=[]
```

You can also have a pattern instead of variable with rest operator.

```javascript
const [x, ...[y, z]] = ['a', 'b', 'c', 'd']; // x='a', y='b', z='c'
```

### Assignment target type
If you assign via destructuring, each assignment target can be everything that is allowed on the left-hand side of a normal assignment.

For example:

```javascript
const obj = {};
({ foo: obj.prop } = { foo: 123 });
console.log(obj); // {prop:123}

const arr = [];
({ bar: arr[0] } = { bar: true });
console.log(arr); // [true]

const obj = {};
[first, ...obj.prop] = ['a', 'b', 'c'];
// use of rest operator; first = 'a'; obj.prop = ['b', 'c']
```

## Pitfalls of destructuring.
Pitfalls of destructuring is that you cannot start the statement with curly brackets. It will throw SyntaxError because code blocks start with curly brackets.

```javascript
{a, b} = someValue; // SyntaxError
({ a, b } = someObject); // OK
({ a, b }) = someObject; // SyntaxError
```

