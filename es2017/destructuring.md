###### *[Home](https://tashbalrai.github.io)*, **Destructuring**

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
const [x=2, y=x] = [1]; //It works
const [x=y, y=2] = [1]; It doesn't work
```
