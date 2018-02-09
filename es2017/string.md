###### *[Home](https://tashbalrai.github.io)*, **ES2015 Numbers**

## New Methods

### String.startsWith(search_key)
This method checks if a string starts with the string passed in as a parameter.

```javascript
console.log('hello'.startsWith('hel')); // outputs true
```

### String.endsWith(search_key)
This method checks if a string ends with the string passed in as a parameter.

```javascript
console.log('hello'.endsWith('hel')); // outputs true
```

### String.repeat(times)
This method repeat the string for a fixed number of times as passed by number as a parameter.

```javascript
console.log('doo '.repeat(3)); // outputs 'doo doo doo '
```

### String.includes(search_key, position)
This method find the search_key from the index position specified and returns true/false.

```javascript
'hello'.includes('ell', 1); // return true
'hello'.includes('ell', 2); //return false
```

## Template Literals
A new kind of string literals that allow variable interpolation and multiline strings. It uses backtick character to define the string literal.

```javascript
const name = 'Vince';
const str = `Hello
${name}
Welcome
Adobe`;
console.log(str);
```

## Tagged Template Literals
A tagged template literal is similar to the template literal except that it starts with a function.

tagFunction`Hello ${name} welcome back!`

It is not necessary for a tagged function to return a string. It could return any type.

Additionally, tag functions get two versions of each template string:
1. "raw" string, where backslashes are not interpreted. e.g. '\n' becomes '\\n'
2. "cooked" string interpreted string.

### Use Cases of Tagged Templates

#### HTTP Requests
```javascript
// String interpolation
const name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

