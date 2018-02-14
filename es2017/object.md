###### *[Home](https://tashbalrai.github.io)*, **Extended Object Functionality**

## Types of Objects
**1. Ordinary object:** Have all the default internal behaviors for objects in JavaScript.

**2. Exotic object:** Have internal behavior that differs from the default in some way.

**3. Standard object:** Are those defined by ECMAScript 6, such as Array, Date, and so on. Standard objects may be ordinary or exotic.

**4. Built-in object:** Are present in a JavaScript execution environment when a script begins to execute. All standard objects are built-in objects.

## Short Hand Property Initializer
When an object property name is the same as the local variable name, you can simply include the name without a colon and value. E.g.:

```javascript
function Person(name, age) {
     return {
         name: name, //property name and the variable name
         age: age
     };
}
```

The above object literal could be written as the following:

```javascript
function Person(name, age) {
     return {
         name, //no need to duplicate
         age
     };
}
```

## Concise Methods
Means, in object literals, you no longer needs to specify the ```function``` keyword and ```:``` colon for function declaration. Concise methods may use ```super``` keyword inside them but a non concise method may not use it.

```javascript
let obj1 = {
     sayHello: function () {
         // method ES5 style    
     }
}

let obj2 = {
     sayHello() {
         // concise method ES6 style    
     }
}
```

## Computed Property Names
In ES6 you can use computed property name in object literals. E.g:

```javascript
let lastName = 'last name';

function getFirstName() {
     return 'first name';
}

let obj1 = {
     [getFirstName()]: "Json", //getting property name from a function return value
     [lastName]: "Zakas" // getting property name from a variable defined.
}
```

## Object.is()
ES6 adds a new method on Object to check the equality. it works in the same way as === and == works. But it also checks that NaN === NaN is identical and +0 and -0 are not equal.

```javascript
console.log(+0 == -0);              // true
console.log(+0 === -0);             // true
console.log(Object.is(+0, -0));     // false

console.log(NaN == NaN);            // false
console.log(NaN === NaN);           // false
console.log(Object.is(NaN, NaN));   // true

console.log(5 == 5);                // true
console.log(5 == "5");              // true
console.log(5 === 5);               // true
console.log(5 === "5");             // false
console.log(Object.is(5, 5));       // true
console.log(Object.is(5, "5"));     // false
```

## Duplicate Object Literal Properties
ES6 allows duplicate object literal properties, in such a case the later one will override the former one.

## Own Property Enumeration Order
ES6 defines the own property enumeration order in the following way.
1. All numeric keys in ASC order.
2. All alphabetic keys in order they were added.
3. All symbol keys in order they were added.

## Object.setPrototypeOf method
```Object.setPrototypeOf``` method sets the prototype of an object to a different object prototypes. Every object have an internal property [[prototype]] which tracks which prototype has been assigned to an object. When using Object.getPrototypeOf or Object.setPrototypeOf it refers to [[prototype]] internal property.

```javascript
let person = {
    getGreeting() {
        return "Hello";
    }
};

let dog = {
    getGreeting() {
        return "Woof";
    }
};

// prototype is person
let friend = Object.create(person);
console.log(friend.getGreeting());                      // "Hello"
console.log(Object.getPrototypeOf(friend) === person);  // true

// set prototype to dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());                      // "Woof"
console.log(Object.getPrototypeOf(friend) === dog);     // true
```

## Prototype Access With Super
ES6 introduces a new keyword super to access the base object's properties and methods. You can use ```super``` inside a concise method to access the inherited method. You cannot use ```super``` inside a non-concise method.

## A Formal Method Definition
ECMAScript 6 formally defines a method as a function that has an internal [[HomeObject]] property containing the object to which the method belongs.

```javascript
let person = {
    // method
    getGreeting() {
        return "Hello";
    }
};

// not a method
function shareGreeting() {
    return "Hi!";
}
```

The [[HomeObject]] for getGreeting() is person by virtue of assigning the function directly to an object. The shareGreeting() function, on the other hand, has no [[HomeObject]] specified because it wasn’t assigned to an object when it was created. In most cases, this difference isn’t important, but it becomes very important when using super references. 
Any reference to super uses the [[HomeObject]] to determine what to do. The first step is to call Object.getPrototypeOf() on the [[HomeObject]] to retrieve a reference to the prototype. Then, the prototype is searched for a function with the same name. Last, the this binding is set and the method is called.














