###### *[Home](https://tashbalrai.github.io)*, [Basics](https://tashbalrai.github.io/php/basics.html), [OOPs - 1](https://tashbalrai.github.io/php/oops/basics.html), [OOPs - 2](https://tashbalrai.github.io/php/oops/basics2.html), **OOPs - Traits**, [OOPs - Advanced](https://tashbalrai.github.io/php/oops/advanced.html), [Autoloading](https://tashbalrai.github.io/php/oops/autoloading.html)

## Traits
Traits added in PHP 5.4.0

Code reusability, in classes and virtually adds multiple inheritance.

Cannot be initiated of its own.

Presedence
  - Current class method overrides traits method
  - Traits override inherited class method.

Multiple traits can be inserted with ```use``` keyword separated by comma;

Multiple traits insert same method results in fatal error.

```insteadof``` operator to resove conflict by choosing one method.

```php
class Talker {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
    }
}
```

```as``` to rename the method to resolve the conflict.

```php
class Aliased_Talker {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
        B::bigTalk as talk;
    }
}
```

Visibility can be changed with ```as```
```php
class MyClass1 {
    use HelloWorld { sayHello as protected; }
}

class MyClass2 {
    use HelloWorld { sayHello as private myPrivateHello; }
}
```

Other traits can also use traits inside them.
```php
trait MyFirstTrait {
  public function sayHello() {
    echo 'Hello';
  }
}

trait MySecondTrait {
  public function sayGoodBye() {
    echo 'Good Bye';
  }
  
  use MyFirstTrait;
}
```

Traits can have abstract methods; Classes must define them.

Can have static members and methods.

Can have properties defined. If defined class has to define the same property with same value otherwise fatal error.
