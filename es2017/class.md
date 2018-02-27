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
7. Class names are treated as a let binding.

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

### Accessor properties
You can define getter and setter properties by prefixing get and set to the methods of the class respectively. Consider the example below:

```javascript
class Employee {
    get name() {
        return this.empName;
    }
    
    set name(value) {
        this.empName = value;
    }
}

emp = new Employee();
emp.name = "Harry Potter";
console.log(emp.name);
```

Here, you shouldn't have property name and the getter or setter name same, otherwise it will give you "InternalError: too much recursion".

Error example: 
```javascript
class Employee {
    get name() {
        return this.name;
    }
    
    set name(value) {
        this.empName = value;
    }
}

emp = new Employee();
emp.name = "Harry Potter";
console.log(emp.name); // InternalError: too much recursion.
```

### Computed Method Names
As in objects, you can also have computed class methods and computed accessor (getter/setter) properties. To do so, you need to have square brackets and then the parenthesis.

```javascript
let 
  computedMethodName = 'iAmDynamicMethod',
  computedAccessorName = 'dynamicProp';

class MyClass {
  constructor() {
    // statements
  }
  
  [computedMethodName]() { // Computed method name.
    console.log('Method ', computedMethodName, ' called.');
  }
  
  get [computedAccessorName]() {
    console.log('Getter ', computedAccessorName, ' called.');
  }
  
  set [computedAccessorName](value) {
    console.log('Setter ', computedAccessorName, ' called.');
  }
}

let obj = new MyClass();
obj.iAmDynamicMethod(); // "Method iAmDynamicMethod called."
obj.dynamicProp = '123'; // "Setter dynamicProp called."
let val = obj.dynamicProp; // "Getter dynamicProp called."
```

### Generator Methods
You can also have generator methods inside classes. Just need to mark the method name with star.

```javascript
class MyClass {
  constructor() {
    this.items = [];
  }
  
  *getMyItems() {
    yield *this.items.entries();
  }
}

let obj = new MyClass();
obj.items.push('Harry');
obj.items.push('Potter');

for(const [key, val] of obj.getMyItems()) {
  console.log('Value is: ', val);
}

// Output
// Value is:  Harry
// Value is:  Potter
```

The above example shows how you can make a class iterable using the custom iterator.

### Setting Default Iterator
You can also implement a default iterator using ```Symbol.iterator```. To do so, you just need to use the following syntax.

```*[Symbol.iterator]() { //statements }```

```javascript
class MyClass {
  constructor() {
    this.items = [];
  }
  
  *[Symbol.iterator]() {
    yield *this.items.entries();
  }
}

let obj = new MyClass();
obj.items.push('Harry');
obj.items.push('Potter');

for(const [key, val] of obj) {
  console.log('Value is: ', val);
}

// Output
// Value is:  Harry
// Value is:  Potter
```

### Static Methods
You can use ```static``` keyword to create static methods and accessor properties. Static methods can be accessed without needing the object of the class. Static methods and properties are not available on the instance object of the class.

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }
  
  static create(name) {
    return new Employee(name);
  }
  
  static get company() {
    console.log('Static getter called');
    return this.companyName;
  }
  
  static set company(value) {
    console.log('Static setter called');
    this.companyName = value;
  }
  
  get company() {
    console.log('getter called');
    this.objCompany;
  }
  
  set company(value) {
    console.log('setter called');
    this.objCompany = value;
  }
}

let emp = Employee.create('Harry');
Employee.company = 'ZZZ';
emp.company = 'XXX';
console.log(Employee.company, emp.company);

// Output
// Static setter called
// setter called
// Static getter called
// getter called
// ZZZ XXX
```

In the above code, create method is declared static so it can be accessed without any object of the class. We have defined two set of getter and setter for company property. One set is declared as a static so it would be available without class and the other set of getter and setter requires an object to be accessed.

Statement ```Employee.company = 'ZZZ'``` initiate the static setter method and output 'Static setter called' and sets the ```this.companyName``` to the value to 'ZZZ'. 

Statement ```emp.company = 'XXX'``` initiate the non static version of setter and outputs 'setter called' and set the ```this.objCompany``` to the value 'XXX'.

When ```console.log``` statement encounters it hits the statis and non-static version of getter respectively.

### Inheritance
```extends``` keyword is used to inherit base class. ```super()``` method is used in contructor to call the parent class constructor.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    supert(side, side);
  }
}
```

If you haven't defined a constructor in derived class then ```super()``` method is automatically called to call base class constructor.

**1.** ```super()``` can only be called in derived class. You will get an error if you try to call the ```super()``` in non-derived class or in a function.

**2.** Must call ```super()``` in derived class before access to ```this``` in constructor.

**3.** Only way to avoid ```super()``` call is to return an object from the constructor. But you won't be able to take advantage of inheritance.

