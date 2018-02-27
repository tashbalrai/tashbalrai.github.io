###### *[Home](https://tashbalrai.github.io)*, **Classes**

## Classes
JavaScript supports inheritance using prototypes. There is no classical class like inheritance in JavaScript. ECMAScript 6 added classes but these are still based on the prototypal inheritance and uses functions behind the scene. Before ES6, we could mimic the class using the below code example.

```javascript
function Employee(name) {
  this.name = name;
}

Employee.prototype.getName = function () {
  return this.name;
}

const emp = new Employee('Harry');
console.log(emp.getName()); // Harry
```

```class``` keyword is used to define a class followed by the name of the class. Methods inside a class are like concise method and do not need ```function``` keyword and do not require even comma after method declaration. Own properties can be defined inside a constructor on ```this``` object and inside class methods.

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}

const emp = new Employee('Harry');
console.log(emp.getName()); // Harry
```

### Few points about classes
1. Code inside class is always in strict mode.
2. Class declarations are not hoisted and are in TDZ.
3. Methods of a class is non-enumerable.
4. Methods in class lack [[construct]] internal property and cannot be called with ```new``` keyword.
5. Calling a class constructor without ```new``` keyword will throw error.
6. You cannot override class name inside class method. It will throw error.

### Class Expressions
Just like functions have expression form, classes too have expression form.

1. Nameless (anonymous) class expression: class expression do not have name after the class keyword. For example:

```javascript
let Employee = class {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}

let emp = new Employee('Harry');
console.log(emp.getName()); // Harry
```

2. Named class expression: class expression have name after the class keyword. For example:

```javascript
let EmployeeClass = class Employee {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}

let empClass = new EmployeeClass('Harry'); // works and creates an object of class employee.
let emp = new Employee('Harry'); // doesn't work. ReferenceError for Employee. Employee can only be accessed inside class.
```

```Employee``` is only accessible inside the class itself. Outside of the class ```Employee``` binding doesn't existing. Only ```EmployeeClass``` exists outside of the ```Employee``` class.

> Note: Classes are first-class citizen just like functions. In programming language, a first-class citizen is that which can be treated as a value means it can be passed as a parameter to functions, assigned to a variable as a value and return from a function as a value.

Another interesting features of class expression is that it can be used to create singletons just by immediately invoking the class constructor (IICE). Consider the below example.

```javascript
let emp = new class {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}('Harry');

console.log(emp.getName()); // Harry
```


