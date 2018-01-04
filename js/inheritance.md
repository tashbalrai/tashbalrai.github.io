###### *[Home](https://tashbalrai.github.io)*, [Overview](/js/index.html), [Types](/js/types.html), [Functions](/js/functions.html), [Arrays](/js/arrays.html), [Object](/js/object.html), [Prototype](/js/proto.html), **Inheritance**, [RegExp](/js/regexp.html), [Awful Parts](/js/awful.html),

## JavaScript Inheritance

JavaScript is a prototypal language, which means that objects inherit directly from other objects. JavaScript is conflicted about its prototypal nature. Its prototype mechanism is obscured by complex syntactic layer that looks like the classical class based inheritance. A non-required layer of indirection is inserted i.e. objects are produced using constructor functions using ```new``` operator to form the pseudo classical inheritance (class based inheritance) instead of letting the objects directly inherit from other objects directly.

When a new object is created from Function constructor, code something like following is executed:

```javascript
this.prototype = {constructor: this};
```

The new function object is given a prototype property whose value is an object containing a constructor property whose value is the new function object. The prototype object is the place where inherited traits are to be deposited. Every function gets a prototype object because the language does not provide a way of determining which functions are intended to be used as constructors. The constructor property is not useful. It is the prototype object that is important.

When a new object is created using new prefix, it just modifies the way function code is executed. if new operator were a function/method instead of operator, it could have been implemented like this:

```javascript
Function.method('new', function (  ) {
     // Create a new object that inherits from the
     // constructor's prototype.
     var that = Object.beget(this.prototype);

     // Invoke the constructor, binding -this- to
     // the new object.
     var other = this.apply(that, arguments);

     // If its return value isn't an object,
     // substitute the new object.
     return (typeof other === 'object' && other) || that;
});
```

### Inheritance
we can create an object and inherit it in other objects. We can augment an object using its prototype. 

E.g:
```javascript
var Mammal = function (name) {
     this.name = name;
}
Mammal.prototype.says = function () {
     return this.saying || '';
}
```

Now we can make another pseudo class which inherits from Mammal by creating its constructor function and by replacing its prototype property with the object of Mammal pseudo class.

```javascript
var Cat = function (name) {
     this.name = name;
     this.saying = 'Meow';
}

Cat.prototype = new Mammal();
Cat.prototype.purr = function () {
     //purr code.
}
```

The pseudo classical pattern was intended to look sort of object-oriented, but it is looking quite alien. We can hide some of the ugliness by using the method and defining an inherits method:

```javascript
Function.method('inherits', function (Parent) {
     this.prototype = new Parent( );
     return this;
});
```

Our 'inherits' method return this, allowing us to program in a cascade style. We can now make our Cat with one statement.

```javascript
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
}.
inherits(Mammal).
method('purr', function (n) {
     //statements
}).
method('get_name', function (  ) {
     //statements
});
```

We now have constructor functions that act like classes, but at the edges, there may be surprising behavior. There is no privacy; all properties are public. There is no access to super methods.

Even worse, there is a serious hazard with the use of constructor functions. If you forget to include the new prefix when calling a constructor function, then this will not be bound to a new object. Sadly, this will be bound to the global object, so instead of augmenting your new object, you will be clobbering global variables. That is really bad. There is no compile warning, and there is no run time warning.

E.g.:
```javascript
function Cat(name) {
     this.name = name;
     this.saying = 'meow';
}

var c = Cat('harry'); //no new operator prefix. Function called on global object. this in function body refers to global object which in browsers is window.

console.log(window.name, window.saying); // "harry meow" would be the output
```

### Prototypal Inheritance
In prototypal inheritance, instead of inheriting from classes, we directly inherit from objects. We make one useful object and we create new object that get properties and methods from that object.

Creating private variables and methods
Above method didn't support private properties and methods of an object. We can use the functional approach to define private properties and methods.

var mammal = function (specs) {
     var that = this;
     that.get_name = function () {
         return specs.name || '';
     }
     that.says = function () {
         return specs.saying || '';
     }

     return that;
}

In the above function "specs" is private, it cannot referenced directly and must only be referred to by get_name and says method. It takes benefit of closure. This is because specs is not accessible to outside but get_name and says method have access to this variable because it is in its scope.

var mammalObj = mammal({name:'animal'});
mammalObj.get_name(); //returns animal

Now let's extend mammal to specific animal.

var cat = function (specs) {
     specs.saying = specs.saying || 'meow';
     var that = mammal(specs);
    
     that.get_name = function () {
         return 'like ' + specs.name;
     }
    
     var purr = function () {
         return 'purr';
     }
     that.purr = purr;
     return that;
}

var myCat = cat({name:'Laura'});
myCat.purr(); // return purr
myCat.get_name(); // return like Laura
myCat.says(); // return meow

In above example we extended the mammal in cat and we inherited says function. But it also overridden the get_name function. if you want to call super object method you cannot do it. To be able to call the super object's method we first need to save its copy and then call it inside cat's get_name. Please see the example below.

var coolcat = function (specs) {
     specs.saying = specs.saying || 'meow';
     var that = mammal(specs);
    
     var super_get_name = that['get_name']; // get reference of the mammal's get name and then override.

     that.get_name = function () {
         return 'like ' + super_get_name();
     }
    
     var purr = function () {
         return 'purr';
     }
     that.purr = purr;
     return that;
