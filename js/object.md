###### *[Home](https://tashbalrai.github.io)*, [JS Types](/js/index.html), **Object**, [Functions](/js/functions.html), [Arrays](/js/arrays.html), [RegExp](/js/regexp.html), [Inheritance](/js/inheritance.html), [Prototype](/js/proto.html), [Awful Parts](/js/awful.html),

## JavaScript Objects
Everything in JavaScript is an object or object-like entity, except null and undefined.

### object-like entity:
This means primitive types can be visualized as objects because they have methods associated with them. But these are immutable means their value cannot be changed unlike objects.
Objects in JavaScript are mutable keyed collections.

### Common misconception:
number literals cannot be used as objects. This is just because JavaScript internal treats dot '.' as a floating point instead of object access operator. 

1234.toString(); // this gives a Syntax error.

Workarounds:
1234..toString(); // '1234'
1234 .toString(); // '1234'
(1234).toString(); // '1234'

## Creation of Object
There are two ways to create the object: 1) using literal syntax and 2) using Object constructor.

var obj = {}; // literal way
var obj2 = new Object(); //Constructor method.

If you pass null or undefined to the Object constructor it will create an empty object.

var obj = new Object(null); // will create {} empty object

If you pass in a value to Object(), it will create object to the corresponding Type. e.g.
var objNum = new Object(123); // creates Number object for 123 integer value.
var objStr = new Object('xyz'); // creates String object for 'xyz' string value.

If you do not use the new with Object() it will still produce the same result of creating the object.

Objects as data type
Objects in JS can be used as data type to create a hash maps.

Object literal = {}, can be used to create new object. This new object inherits from Object.prototype and do not have own properties defined.

2 types of property assignment. using dot operator and [].

var obj = {};
obj.foo = 'Foo';
obj['bar'] = 'Bar';

Brackets can handle complex key names which otherwise could raise Syntax errors. E.g.

obj.1234 = 'hi'; // syntax error
obj['1234'] = 'hi'; //works perfectly fine.

dynamic keys.
var key = '12hello-there';
obj[key] = 'Hi there'; //works

## Delete property
Only way to remove a property from object is through delete keyword. Setting null and undefined just change the value of the property.

var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz; // actually removes property from obj.

console.log(obj); // output Object {bar: undefined, foo: null}

## Notation of keys
Keys of object can be notated using string notation or without strings. see below example.

var obj = {
     'case': 'case is keyword', //using string notation of object key.
     delete: 'delete is keyword' // without using string notation of object key.
}

Prior to ECMAScript 5 above will raise syntax error because delete is a keyword, hence must be enclosed in quotation.

Objects are always passed by reference, never copied.
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
console.log(c); // c has all both name and age property with values assigned above.

Note: Object references in JavaScript are not pure references. Consider the below example.
var a = b = {v:100};
b.v = 150;
console.log(a); // 150 because a and b points to same object.

b = {z: 200};
console.log(a); //a still points to {v:150} changing the value of b doesn't affect a.

a and b are variables holding location information of object in the memory. When you change the b variable's content it simple washout the location information of the previous object from b and put another object's location information. while "a" remains pointing to the original object. Refer to the following figure.
