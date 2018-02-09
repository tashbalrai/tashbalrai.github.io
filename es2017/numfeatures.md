###### *[Home](https://tashbalrai.github.io)*, **ES2015 Numbers**

## New Integer Literals
ECMAScript 5 already have hexadecimal numbers but ECMAScript 6 have introduced Binary and Octal numbers. 

Binary number literals can be defined using 0b or 0B prefix to the number. 
```javascript
let bnum = 0b11;
console.log(bnum); //this will print 3 because it will be converted to decimal before rendering on the screen.
```

Octal number literals can be defined using 0o or 0O prefix to the number.
```javascript
let onum = 0o755;
console.log(onum); it will print 493 decimal equivalent of 755 octal number
```

If you want to display the number other than decimal on the screen you can use the ```toString(radix)``` method on any decimal number.
```javascript
15..toString(2); //convert to the binary number; output is "1111"

15..toString(16); //converts to hexadecimal number; output is "f"

15..toString(8); //converts to octal; output is "17"
```

## Number
**Number.parseInt(string, radix)** can parse the input to a number value based on the radix passed as a parameter. As a special provision only hexadecimal numbers can be parsed directly without specifying the radix. Otherwise, for all other numbers a number value till the non-numeric character will be returned.

For example:
```javascript
Number.parseInt('0xF'); // result 15
Number.parseInt('0xF', 0); // result 15
Number.parseInt('0xF', 16); // result 15
```

If you give any other base/radix to parseInt using hexadecimal literals it would result in zero (0). Consider the below examples:
```javascript
Number.parseInt('0xF',8); //result 0
Number.parseInt('0xF',10); //result 0
Number.parseInt('0xF',2); //result 0
```

If you want to parse the binary, octal or hexadecimal literals then you should use ```Number``` constructor.
```javascript
Number('0xF'); // result 15 with parseInt result would be same 15
Number('0b11'); // result 3 with parseInt result would be 0
Number('0o10'); // result 8 with parseInt result would be 0
```

### "Number" Static Property
Previously defined global functions are now added to the Number as a method such as parseInt, isFinite, isNaN and parseFloat. Their working is same as globally defined counterparts of these functions except that isNaN and isFinite doesn't force the string to be converted to number first and then tested.

#### Number.EPSILON
Gives precise round off error. It is very useful in comparing the float values. For example, consider the below code.

```javascript
function epsEqu(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
console.log(epsEqu(0.1+0.2, 0.3)); // true
```

#### Number.isInteger(number)
Returns ```true``` if number have decimal point.

#### Number.isSafeInteger(number)
Returns true if the number lies in the sage integer range of JavaScript. Safe integer range in JS is -2^53 to + 2^53.

#### Number.MIN_SAFE_INTEGER
Its value is minimum safe integer possible in JavaScript.

#### Number.MAX_SAFE_INTEGER
Its value is the maximum safe integer in JavaScript.
```javascript
Number.MAX_SAFE_INTEGER = Math.pow(2, 53)-1;
```
