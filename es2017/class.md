###### *[Home](https://tashbalrai.github.io)*, **Classes**, **Block Level Scoping**, [String Features](https://tashbalrai.github.io/es2017/string.html), [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), [Destructuring](https://tashbalrai.github.io/es2017/destructuring.html), [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), , [Unicode](https://tashbalrai.github.io/es2017/unicode.html)

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
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  
  getArea() {
    return this.width * this.length;
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

### Overriding Class Method
When you define the same name method in the derived class as in base class, the base class method is overridden by the derived class method. You can call the base class method from the derived class using the ```super.methodName()``` signature.

```javascript
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  
  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  
  getArea() {
    return super.getArea();
  }
}

let sqr = new Square(5);
console.log(sqr.getArea()); // 25
```
### Inheriting Static Members
All static members of the base class are also available on derived classes. 

```javascript
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  
  getArea() {
    return this.width * this.length;
  }
  
  static create(width, length) {
    return new Rectangle(width, length);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = Square.create(5, 5);
console.log(square.getArea()); // 25
console.log(square instanceof Square); // false
console.log(square instanceof Rectangle); // true
```

In the above code, ```Square``` class do have ```create()``` method inherited from ```Rectangle``` class but the behaviour is different. Variable ```square``` holds the object of class ```Rectangle``` instead of ```Square``` class because ```create()``` method creates and returns objec of ```Rectangle``` class. That is why the statement ```console.log(square instanceof Square)``` return false.

### Inherit from Expressions
In ES6, you can inherit from class expressions as well and the only constraint is the result of the expression must have [[construct]] property and a prototype. For example, instead of using the a base class you can also inherit from a function.

```javascript
function Department() {
}

Department.prototype.getDeptName =  function() {
  return "Accounts";
}

class Employee extends Department {
}

let emp = new Employee();
console.log(emp.getDeptName()); // Accounts
```

Consider the below example too.
```javascript
function getBase() {
  return class Department {
    constructor() {
      this.depName = 'Accounts';
    }
    
    getDeptName() {
      return this.depName;
    }
  };
}

class Employee extends getBase() {
  constructor(name) {
    super();
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}

let emp = new Employee('Harry');
console.log('Employee name: ', emp.getName()); // Employee name: Harry
console.log('Employee department: ', emp.getDeptName()); // Employee department: Accounts
```

Any expression that returns a valid class can be used with ```extends``` keyword. Following are not valid class expressions:

1. Null
2. Generatro functions because they do not have [[construct]] property.

### Inherit Built-in Objects
You can also inherit from built-in objects such as Arrays. Inheritance model is different in ES6 then that of ES5. In ES5, first derived class object was created and then base class properties and methods were applied on the ```this``` object. Main object was the derived object.

In ES6, ```this``` reference is created first using the base class then making sure all of the built-in functionality is available on the ```this```. After that derived class properties and methods are set. This methodology make sure that built-in objects are inherited properly. For example, consider the following examples.

ECMAScript 5
```javascript
let arr = new Array();
arr[0] = 'Hello';
console.log('Array length: ', arr.length);

arr.length = 0;
console.log('Array content after length = 0: ', arr[0]);

function CustArray() {
  Array.apply(this, arguments);
}

CustArray.prototype = new Array();
CustArray.prototype.constructor = CustArray;

let custarr = new CustArray();
custarr[0] = 'Hello';
console.log('CustArray length: ',  custarr.length);

custarr.length = 0;
console.log('CustArray content after length = 0: ', custarr[0]);

// Output
// Array length:  1
// Array content after length = 0:  undefined
// CustArray length:  0
// CustArray content after length = 0:  Hello
```
In the above code, if you try to inherit from built-in Array object you get a partial inheritance. Not all of the features that Array have were transfered over to the derived array i.e. ```CustArray```. ```length``` property of the array is not behaving properly with ```CustArray```.

ECMAScript 6
```javascript
class CustArray extends Array {
  
}

let custarr = new CustArray();
custarr[0] = 'Hello';
console.log('CustArray length: ', custarr.length);

custarr.length = 0;
console.log('CustArray content after length = 0:', custarr[0]);

// Output
// CustArray length:  1
// CustArray content after length = 0: undefined
```

In ES6, you can get the inheritance for built-ins properly because of the modified inheritance model where by first the ```this``` reference is set to the base class and then it is decorated with extra features of the derived classes that makes sure that you get proper inheritance even for built-ins.

### Symbol.species
Built-in methods that returns an instance of built-in object will return instance of the derived class because of inheriting the built-in object. For instance, when applying ```splice()``` method on ```CustArray``` object will return the instance of ```CustArray``` not ```Array```.

Behind the scene this is done by ```Symbol.species``` property and it is used to define the getter accessor method which returns the function that will define which constructor to use to create the object that should be returned for example ```CustArray``` or ```Array```. 

```javascript
class CustArray extends Array {}

let custarr = new CustArray();
custarr[0] = 'Hi';
custarr[1] = 'hello';
let retarr = custarr.splice(1,1);

console.log(custarr instanceof CustArray); // true
console.log(retarr instanceof CustArray); // true
console.log(retarr instanceof Array); // true

class Cust2Array extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let cust2arr = new Cust2Array();

cust2arr[0] = 1;
cust2arr[1] = 2;
cust2arr[2] = 3;

let ret2arr = cust2arr.splice(1,1);

console.log(cust2arr instanceof Cust2Array); // true
console.log(ret2arr instanceof Cust2Array); // false coz ret2arr is instance of Array not Cust2Array
console.log(ret2arr instanceof Array); // true
```

Whenever you want to use ```this.constructor``` inside your class method you should use ```Symbol.species``` to return the appropriate object. This will allow overriding the class constructor according to the static getter property assigned on the object class. For details, consider the below example.

```javascript
class Employee {
    static get [Symbol.species]() {
        return this;
    }

    create() {
        return new this.constructor[Symbol.species]();
    }
}

class EmployeeA extends Employee {}

class EmployeeB extends Employee {
    static get [Symbol.species]() {
        return Employee;
    }
}

let a = new EmployeeA("foo"),
    aObj = a.create(),
    b = new EmployeeB("bar"),
    bObj = b.create();

console.log(aObj instanceof Employee); // true
console.log(aObj instanceof EmployeeA); // true
console.log(bObj instanceof Employee); // true
console.log(bObj instanceof EmployeeB); // false bObj is instanceof Employee not EmployeeB
```

In the above code, ```create()``` method creates object of the derived class depending on the ```Symbol.species```. When we call ```a.create()``` variable ```aObj``` gets assigned ```EmployeeA``` instance while calling ```b.create()``` assigns instance of ```Employee``` class because ```EmployeeB``` class implements static getter accessor property ```Symbol.species``` which returns ```Employee``` class and statement ```this.constructor[Symbol.species]()``` inside ```create()``` get reference to ```Employee``` instead of ```this``` because of the ```Symbol.species``` use in constructors square brackets.

### new.target
Since classes are always initiated using ```new``` keyword, ```new.target``` will never be ```undefined```. ```new.target``` will be equal to the name of the class through which the object is being generated i.e. if object was created using derived class ```new.target``` in base class will have derived class not base class.

```javascript
class Parent {
  constructor() {
    console.log('new.target: ', new.target);
  }
}

class Child extends Parent {}

let p = new Parent(),
    c = new Child();

// Output
// new.target: function Parent()
// new.target: function Child()
```
With this property of ```new.target```, you can mimic the behavior of abstract classes. Consider the example.

```javascript
class Parent {
  constructor() {
    if (new.target === Parent) {
      throw new Error('Object cannot be initiated directly.');
      return;
    }
  }
}

class Child extends Parent {}

let p = new Parent(), // Exception: Error: Object cannot be initiated directly.
    c = new Child();
```


