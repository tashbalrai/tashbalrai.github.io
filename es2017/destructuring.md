###### *[Home](https://tashbalrai.github.io)*, **Destructuring**

## Destructuring
Extract the values from a nested objects or arrays. Destructuring can be used in variable declarations, assignements, function calls, function return values, for-of loops etc.

To construct data, we keep variable on left handside of the assignment operator. For example:

```javascript
let obj = {first: "vince" , last: "jhonson"};
```

To extract the data now from already assigned variable whether its value is array or object, we reverse it. We keep structural pattern on the left side and variable on rigth side of the assignment operator. For example:

```javascript
let {first:f, last:l} = obj;
```

In ES2015, we can do the above and in fact, this is what is called destructuring.

## Patterns for Destructuring
Two parties are involved in destructuring:

**1. Destructuring source:** the data to be destructured e.g. a variable holding array or object.

**2. Destructuring target:** the pattern used for destructuring.

