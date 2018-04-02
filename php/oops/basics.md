## Introductions to PHP OOPs
Rewritten entire object model in PHP 5.

PHP 5 brought visibility, abstract and final classes and methods, magic methods, interfaces, clonning and typehinting.

Variables contain references to Objects not copies.

Class name cannot be PHP reserve word. Can start with underscore or a letter followed by letter, numbers or underscores.

Class constant and variables are called properties and functions called methods.

```$this``` refers to callee object. Using ```$this``` in static context gives exception.

Calling non-static methods statically is depricated in latest PHP 5.6.

```new``` is used to create the instance of the class.

```php
<?php
class Test {
  public $name = "TestClass";
  
  public function getName() {
    var_dump($this);
  }
}

$t = new Test; // without Paranthesis

$t1 = new Test();
?>
```

Variable holding class name can create new instance with ```new``` keyword.

```php
$a = new SimpleClass();

$className = "SimpleClass";
$a1 = new $className();
```

