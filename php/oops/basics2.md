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




