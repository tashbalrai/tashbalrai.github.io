###### *[Home](https://tashbalrai.github.io)*, [Basics](https://tashbalrai.github.io/php/basics.html), **OOPs - 1**, [OOPs - 2](https://tashbalrai.github.io/php/oops/basics2.html), [Traits](https://tashbalrai.github.io/php/oops/traits.html), [OOPs - Advanced](https://tashbalrai.github.io/php/oops/advanced.html), [Autoloading](https://tashbalrai.github.io/php/oops/autoloading.html)

## Introductions to PHP OOPs
Rewritten entire object model in PHP 5.

PHP 5 brought visibility, abstract and final classes and methods, magic methods, interfaces, clonning and typehinting.

Variables contain references to Objects not copies.

Class name cannot be PHP reserve word. Can start with underscore or a letter followed by letter, numbers or underscores.

Class constant and variables are called properties and functions called methods.

```$this``` refers to callee object. Using ```$this``` in static context gives exception.

Calling non-static methods statically is depricated in latest PHP 5.6.

## Creation/Assignment of Objects
```new``` is used to create the instance of the class.

```php
class Test {
  public $name = "TestClass";
  
  public function getName() {
    var_dump($this);
  }
}

$t = new Test; // without Paranthesis

$t1 = new Test();
```

Variable holding class name can create new instance with ```new``` keyword.

```php
$a = new SimpleClass();

$className = "SimpleClass";
$a1 = new $className();
```

```new self``` and ```new parent``` can create object of self and parent within class itself.

```php
class TestParent {
  public $name = "TestParentClass";
}

class Test extends TestParent {
  public $name = "TestClass";
  
  public function getParent() {
    var_dump(new parent);
  }
  
  public function getSelf() {
    var_dump(new self);
  }
}

$t = new Test();
$t->getParent();
$t->getSelf();

/* output
object(TestParent)#2 (1) {
  ["name"]=>
  string(15) "TestParentClass"
}
object(Test)#2 (1) {
  ["name"]=>
  string(9) "TestClass"
}
*/
```

Assigning object to variable assign location of the object to the new variable.
Assigning reference of object to variable assign reference not location. see difference below.
Copy of the object can be done using clonning it.

```php
class Test {
  public $name = "TestClass";
}

$a = new Test();
$b = $a;
$ref =& $a;

$a = null; // only sets $a and $ref to null $b still points to the original object.

var_dump($a); // NULL
var_dump($b); // object(Test)#1 (1) { ["name"]=> string(9) "TestClass" }
var_dump($ref); // NULL
```

Creating object from object; PHP 5.3 onwards
```php
$t1 = new Test();
$t2 = new $t1; // $t2 is a new object.
```

Using object with single expression; added PHP 5.4.
```php
var_dump((new Test())->name); // works in PHP5.4+
```

Class properties and methods live in separate namespace. Call to property or method is resolved at runtime using whether variable access or function call.

Anonymous function assigned to property cannot be executed directly. Assign to variable or use single expression PHP 7.0.0+.

```php
class Test {
  public $getName = 'Property';
  public $func;
  
  public function __construct() {
    $this->func = function() { 
          return 'Anonymous Function';
          
      };
  }
  
  public function getName() {
    return "Method";
  }
}

$t = new Test();
var_dump($t->getName); // Property
var_dump($t->getName()); // Method
$func = $t->func;
var_dump($func()); // Anonymous Function
var_dump(($t->func)()); // Anonymous Function
```

## Extends
```extends``` inherit only single base class.

Same name properties and methods are overridden. 

```parent::``` to access overridden members. 

```final``` methods cannot be overridden.

Get full qualified class name of the class with ```::class``` keyword.

Class names are cas-INsensitive.

## Properties
Properties are initialized with constant value only.

```Var``` keyword is still valid; Properties would be ```public``` by default using ```var```.

```HEREDOC``` and ```NOWDOC``` can be used for property initialization. ```HEREDOC``` with variables are invalid.

Uninitialized properties are NULL.

## Constants
Value must be constant value or constant expressions PHP 5.6.0.

Assinged to class on per class basis not per instance basis.

HEREDOC and NOWDOC constant initialization, as of PHP 5.3.0

Constant expression support uses scalar numeric, string and constants, as of PHP 5.6.0 

Visibility modifiers for class constants, as of PHP 7.1.0





