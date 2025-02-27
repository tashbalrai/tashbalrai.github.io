###### *[Home](https://tashbalrai.github.io)*, [Overview](/js/index.html), [Types](/js/types.html), [Functions](/js/functions.html), [Arrays](/js/arrays.html), **Object**, [Prototype](/js/proto.html), [Inheritance](/js/inheritance.html), [Awful Parts](/js/awful.html),

## JavaScript Objects
Everything in JavaScript is an object or object-like entity, except null and undefined.

### Object-like Entity:
This means primitive types can be visualized as objects because they have methods associated with them. But these are **immutable** means their value cannot be changed unlike objects.

Objects in JavaScript are mutable keyed collections.

### Common Misconception:
Number literals cannot be used as objects. This is just because JavaScript internal treats dot '.' as a floating point instead of object access operator. 

```javascript
1234.toString(); // this gives a Syntax error.
```

_Workarounds:_
```javascript
1234..toString(); // '1234'
1234 .toString(); // '1234'
(1234).toString(); // '1234'
```

## Creation of Object
There are two ways to create the object: 
1. Using object constructor, and 
2. Using object literal syntax.

### Using Object Constructor
```javascript
var obj = {}; // literal way
var obj2 = new Object(); //Constructor method.
```

If you pass null or undefined to the Object constructor it will create an empty object.

```javascript
var obj = new Object(null); // will create {} empty object
```

If you pass in a value to Object(), it will create object to the corresponding JS primitive type. 

E.g.:
```javascript
var objNum = new Object(123); // creates Number object for 123 integer value.
var objStr = new Object('xyz'); // creates String object for 'xyz' string value.
```

If you do not use the new with Object() it will still produce the same result of creating the object.

### Using Object Literal Syntax

##### Objects as Data Type
Objects in JS can be used as data type to create a hash maps.

Object literal ```{}```, can be used to create new object. This new object inherits from Object.prototype and do not have own properties defined.

##### Creation of Object and Defining Properties

You can defined the properties using dot operator and ```[]```.

```javascript
var obj = {}; // object creation using literal syntax
obj.foo = 'Foo';
obj['bar'] = 'Bar';
```

Brackets can handle complex key names which otherwise could raise syntax errors. 

E.g.:
```javascript
obj.1234 = 'hi'; // syntax error
obj['1234'] = 'hi'; //works perfectly fine.
```

```[]``` brackets can also be used to define dynamic keys.

```javascript
var key = '12hello-there';
obj[key] = 'Hi there'; //works
```

## Delete Property
Only way to remove a property from object is through ```delete``` keyword. Setting ```null``` and ```undefined``` just change the value of the property.

```javascript
var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};

obj.bar = undefined;
obj.foo = null;
delete obj.baz; // actually removes property from obj.

console.log(obj); // output Object {bar: undefined, foo: null}
```

## Notation of Keys
Keys of object can be notated using string notation or without strings. see below example.

```javascript
var obj = {
     'case': 'case is keyword', //using string notation of object key.
     delete: 'delete is keyword' // without using string notation of object key.
}
```

Prior to ECMAScript 5 above will raise syntax error because ```delete``` is a keyword, hence must be enclosed in quotation.

**Objects are always passed by reference, never copied.**
```javascript
var a = {}, b = {}; // a, b are different objects.
a.name = 'AA';
b.name = 'BB';
b.age = 30;
a=b; // now a and b points to the same object. no more different.

console.log(b);
a.age = 100; // changes to a also reflects in b.
console.log(b);

var x = y = z = {}; // all three objects x, y and z points to the same location.
x.name = 'A';
y.age = 20;
console.log(z); // z has all both name and age property with values assigned above.
```
> Note: Object references in JavaScript are not pure references. Consider the below example.

```javascript
var a = b = {v:100};
b.v = 150;
console.log(a); // 150 because a and b points to same object.

b = {z: 200};
console.log(a); //a still points to {v:150} changing the value of b doesn't affect a.
```

a and b are variables holding location information of object in the memory. When you change the b variable's content it simply washout the location information of the previous object from b and put another object's location information. while "a" remains pointing to the original object. Refer to the following figure.

![Object References Figure](/assets/memory.jpg)

**for in**
The ```for in``` loop can be used to iterate over the object properties. Properties can come in any order. ```typeof``` keyword and ```hasOwnProperty``` function can be used to check the type and to filter the own property of object instead of prototype chain, respectively.
