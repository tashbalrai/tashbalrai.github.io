###### *[Home](https://tashbalrai.github.io)*, [Basics](https://tashbalrai.github.io/php/basics.html), [OOPs - 1](https://tashbalrai.github.io/php/oops/basics.html), [OOPs - 2](https://tashbalrai.github.io/php/oops/basics2.html), [OOPs - Traits](https://tashbalrai.github.io/php/oops/traits.html), [Advanced], [Autoloading](https://tashbalrai.github.io/php/oops/autoloading.html)

## Anonymous Class

Are classes without name.

PHP internally assign class names but are not suitable for usage in code.

Useful for creating one-off objects.

Can pass arguments to constructor, extend them, use traits and implement interfaces.

```php
class SomeClass {}
interface SomeInterface {}
trait SomeTrait {}

var_dump(new class(10) extends SomeClass implements SomeInterface {
    private $num;

    public function __construct($num)
    {
        $this->num = $num;
    }

    use SomeTrait;
}); 
```

You can have nested classes. Inner class cannot have access to private and protected members of the outer class.

Inner class can extend the outer class to access protected members.

Private members can be passed to inner class as arguments to constructor.

Instances created from a same anonymous class are instances of the same class.
```php
function anonymous_class()
{
    return new class {};
}

if (get_class(anonymous_class()) === get_class(anonymous_class())) {
    echo 'same class';
} else {
    echo 'different class';
}

// output
// same class
```

## Overloading
PHP doesn't support overloading as in traditional OOPs language where same name functions with different paramters can be defined.

PHP gives error that cannot redeclare function again.

PHP support overloading with magic methods. These magic methods has to be defined publically.

Inaccessible properties/methods = not declared or not visible in the current scope.

Works only for inaccessible properties or methods.

Arguments to these magic methods cannot be passed by reference.

### Property Overloading.
Only works in object context not in static context. Therefore cannot be declared static.

```php
public void __set ( string $name , mixed $value )
```
\__set() is run when writing data to inaccessible properties.

```php
public mixed __get ( string $name )
```
\__get() is utilized for reading data from inaccessible properties.

```php
public bool __isset ( string $name )
```
\__isset() is triggered by calling isset() or empty() on inaccessible properties. 

```php
public void __unset ( string $name )
```
\__unset() is invoked when unset() is used on inaccessible properties. 

### Method Overloading
