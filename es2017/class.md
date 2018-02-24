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



