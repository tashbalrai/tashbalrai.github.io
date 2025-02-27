###### *[Home](https://tashbalrai.github.io)*, [Unicode](https://tashbalrai.github.io/common/unicode.html), **JS Internal and External Code Handling**

## Unicode in JavaScript
JavaScript uses the unicode to support the source code. It uses UTF-16 encoding for handling text (code) in two ways, first one while parsing the source code internally and second when a JavaScript code is loaded externally from a file for example loading of the JavaScript file from http within a HTML page.

### During Parsing
Internally, JavaScript source code is treated as a sequence of UTF-16 code units. In identifiers, string literals, and regular expression literals any code unit can be expressed as a unicode escape sequence i.e. '\uHHHH'. 'HHHH' here represents the hexadecimal digits.

For example:

```javascript
var bar = 'hello';

console.log(\u0062\u0061\u0072); // this will print hello
```

This means that you can use the unicode code in variable names and string literals. 

In string literals, you can also use the hexadecimal escape sequence i.e. \xHH but you cannot use them in identifiers.

### Loading of Scripts Externally
Internally, JS stores source code in UTF-16 encoding but the script code save in file could be in different encoding. The encoding of the externally loaded files are determined as follow:

1. If first character of the file data is BOM then the file is unicode and the encoding is used as per the BOM.
2. If the file is loaded via HTTP(S), then the ```Content-Type``` header can specify an encoding, via the charset parameter.
3. If the ```<script>``` tag has the attribute charset, then that encoding is used.
4. The encoding of the document is used, in which the ```<script>``` tag resides.

Specifying an encoding is highly recommended. If you don’t specify it, a locale-specific default encoding is used. Which means people  from different countries will see the file differently. Only the lower 7 bit characters (ASCII) are compatible cross encoding.

Follow is the good practice to follow:

1. HTML page must specify HTML encoding as UTF-8.
2. For libraries, ASCII (7 bit) code range must be used to release them publically. 

### JavaScript Strings
JavaScript strings are stored as UTF-16 encoding sequence of characters. String length is not correctly returned via ```String.length``` code if there is a supplymental/astral plane symbol or code point that require two code units (surrogate pair) to represent it. One astral code point is calculated as two characters because 2 code units are used to represent a higher code point in astral plane of unicode.
