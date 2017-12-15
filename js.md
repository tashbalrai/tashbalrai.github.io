###### *[#home](http://tashbalrai.github.io)*, #PHP, # HTTP, # Node.JS, # Python

## JavaScript Types

In JavaScript everything is an object including Number, String, Boolean etc. There are two special types called ```undefined``` and ```null```.

### Primitive Types
1. Number
2. Boolean
3. null
4. undefined
5. String

##### Number
Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values". There are no integers in JavaScript. Integers in JavaScript are formatted representation of floating points. Integers can only express 32bit integers.

**Conversion string to integer or float.**

```parseInt``` = string to integer. Accepts two parameters string value and radix.

If the input string begins with "0x" or "0X", radix is 16 (hexadecimal) and the remainder of the string is parsed.

If the input string begins with "0", radix is eight (octal) or 10 (decimal).  Exactly which radix is chosen is implementation-dependent.  ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason always specify a radix when using ```parseInt```.

If the input string begins with any other value, the radix is 10 (decimal).

```parseFloat``` = string to Float. Accepts only 1 parameter i.e. string.

```+ (operator)``` = used to convert the string to integer or float but if non numeric character is there return ```NaN```. ```parseInt``` and ```parseFloat``` doesn't behave like this.

```NaN``` is toxic: if you provide it as an input to any mathematical operation the result will also be NaN.
e.g.: NaN + 5 // = NaN

### Complex Types
1. Function
2. Array
3. Symbol (ES6+)
4. Error (In-built object)
5. Math (In-built object)
6. Date (In-built object)
7. RegExp (In-built object)
8. Promise (ES6+)
9. Reflect (ES6+)
10. Proxy (ES6+)

