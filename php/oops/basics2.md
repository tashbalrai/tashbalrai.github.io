## Constructor
Suitable for class initialization code.

```__construct()``` function for constructor.

For backward compatibility, constructor with the same name are allowed, depricate in PHP 7.0. Not Recommended.

Base class constructors are not called automatically.

```parent::__construct()``` to call parent constructor. 

## Destructor
```__destructor()``` function defines destructor.

Called when no reference to the object remain Or in any order during shutdown sequence.

Base class destructor are not called automatically.

```parent::__destruct()``` calls the parent destructor.

Destructor will be called even if exit() is called.

```exit()``` inside destructor stop pending shutdown routines.

throwing exception in destructor raises fatal error.

Working directory could be different in some SAPI in shutdown process.

## Visibility
```var``` properties are public

public = accessible everywhere, protected = accessible in drived + own class, private =  only accessible self.

Constants can also have access limits, as of PHP 7.1.0

Same type objects can access each other private and protected members.

## Scope Resolution Operator
Double colon :: called scope resolution operator can access the static properties, methods, constants and overridden methods using class name.

You can reference a class name using variable, as of PHP 5.3.0.

## ```static``` Keyword
```static``` keyword makes properties and methods static.

Static properties and methods can be accessed without object using class name only.

```$this``` is not available inside static method and give exception

Static properties cannot be initialized using expression except constant expression that are evaluated at compile time.

## Abstract Class
Cannot be initiated directly.

Methods defined abstract simply have method signatures only.

All abstract methods must be defined in the derived class.

Derived class must have the same visibility.

Derived class must have the same typehints and number of REQUIRED arguments NOT optional.

## Interfaces
Defined using the ```interface``` keyword and can be extended using ```extends```.

Only declare methods that a class must define.

All method declared in interface must be public.

Constructor declaration in interface is possible; May be useful for factories.

```implements``` keyword is used to implement an interface on class.

All methods of interface must be defined by a class otherwise fatal error.

Two or more interfaces having same name of method cannot be implemented.

Latest PHP allow same name method provided they have same signature.

Can have constants; treats as class constant; cannot be overridden.






