###### *[Home](https://tashbalrai.github.io)*, [Overview](/js/index.html), **Types**, [Functions](/js/functions.html), [Arrays](/js/arrays.html), [Object](/js/object.html), [Prototype](/js/proto.html), [Inheritance](/js/inheritance.html), [Awful Parts](/js/awful.html),

## JavaScript Types

In JavaScript everything is an object including Number, String, Boolean etc. There are two special types called ```undefined``` and ```null```.

#### Primitive Types
1. Number
2. Boolean
3. null
4. undefined
5. String
6. Symbol (ES6+)

#### Complex Types
1. [Function](/js/functions.html)
2. [Array](/js/arrays.html)
3. Error (In-built object)
4. Math (In-built object)
5. Date (In-built object)
6. RegExp (In-built object)
7. Promise (ES6+)
8. Reflect (ES6+)
9. Proxy (ES6+)

#### Number
Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values". There are no integers in JavaScript. Integers in JavaScript are formatted representation of floating points. Integers can only express 32bit integers.

**Conversion string to integer or float.**

```parseInt``` = string to integer. Accepts two parameters string value and radix.

If the input string begins with "0x" or "0X", radix is 16 (hexadecimal) and the remainder of the string is parsed.

If the input string begins with "0", radix is eight (octal) or 10 (decimal).  Exactly which radix is chosen is implementation-dependent.  ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason always specify a radix when using ```parseInt```.

If the input string begins with any other value, the radix is 10 (decimal).

```parseFloat``` = string to Float. Accepts only 1 parameter i.e. string.

```+ (operator)``` = used to convert the string to integer or float but if non numeric character is there return ```NaN```. ```parseInt``` and ```parseFloat``` doesn't behave like this.

```NaN``` is toxic: if you provide it as an input to any mathematical operation the result will also be NaN.
e.g.: ```NaN + 5 // = NaN```

JavaScript also have special values ```-Infinity``` and ```Infinity```

```javascript
1 / 0 // = Infinite
-1 / 0 // = -Infinite
(1/0) === Infinity // = true
(-1/0) === -Infinity // = true
```

```isFinite()``` can check for ```Infinity```, ```-Infinity``` and ```NaN``` cases.
```javascript
isFinite(Infinity) // = false
isFinite(-Infinity) // = false
isFinite(NaN) // = false
```
#### Strings
Strings in JavaScript are Unicode characters indeed *UTF-16*. More accurately, they are sequences of *UTF-16* code units; each code unit is represented by a 16-bit number. Each Unicode character is represented by either 1 or 2 code units.

If you add number to string everything is converted to string and concatenation is performed.
e.g.: 
```javascript
"3" + 4 + 5 // = 345
3 + 4 + "5" // = 75
```

String's individual characters can be accessed using ```Array``` like syntax or using function ```charAt()```.
e.g.:
```javascript
'abcd'[1] // returns 'b'
'abcd'.charAt(1) // returns 'b'
```

Though, you can access characters using brackets '[]' array like syntax, but you cannot modify the original string.
e.g.:
```javascript
s = 'abcd';
s[1] = 'E'; //cannot be done. NO ERROR, NO EXCEPTION is raised
```

Best practice is to always using ```charAt()``` because it's much readable and you are not tempted to set the value using this function.

#### Other Types
```null``` and ```undefined``` has different meaning in JavaScript. ```null``` represents *no value* and ```undefined``` represents *no existence*.

```undefined``` is a constant.

```Boolean``` type have possible values ```true``` and ```false```. ```true``` and ```false``` are keywords in JavaScript. Any value can be converted to Boolean according to the following rule.
1. false, 0, empty string(""), undefined, null and NaN becomes false.
2. all other values becomes true.

You can convert these values using a ```Boolean()``` function.
```javascript
Boolean("") // = false
```
Complex types would be dicussed in their respective sections and articles because these are lengthy topics.

[Prev - Types](/js/types.html), [Next - Functions](/js/functions.html)
