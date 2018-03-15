###### *[Home](https://tashbalrai.github.io)*, [Block Level Scoping](https://tashbalrai.github.io/es2017/index.html), [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), **String Features**, [Unicode](https://tashbalrai.github.io/es2017/unicode.html), [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), [Destructuring](https://tashbalrai.github.io/es2017/destructuring.html), [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), [Promises](https://tashbalrai.github.io/es2017/promises.html), [Classes](https://tashbalrai.github.io/es2017/classes.html), [Modules](https://tashbalrai.github.io/es2017/modules.html)

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

### Tagged Function
A tagged function receives 2 types of input.

1. Template string object holds the *raw* and *cooked* string parts excluding subsitutions.
2. one or more subsitution parameters for the template string.

For example, consider the below tagged function:

```javascript
function tagFunc(template, ...subs) {
     console.log(template, subs);
}

let name = "vince";
tagFunc`Hello ${name}, Welcome back!!`;
// Output: ["Hello ", ", Welcome back!!"] ["vince"]
// First array is the template string parts and second array is the subsitution parameters.

tagFunc`${name} Welcome back!!`;
// Output: ["", "Welcome back!!"] ["vince"]
// Notice the first element of the template string parts is empty string.
// This is because subsitution is first in the template literal.

tagFunc`Hello ${name}`;
// Output: ["Hello ", ""] ["vince"]
// This is because subsitution is last in the template literal.
```



