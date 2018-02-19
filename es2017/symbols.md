###### *[Home](https://tashbalrai.github.io)*, **Symbols**

## Symbol
Symbol is new primitive type in JavaScript. A unique primitive type among other JavaScript primitive types because it do not have any literal form like ```ture``` or ```false``` for boolean and ```113``` for numbers etc.

Each symbol is unique value. A symbol can be create with ```Symbol()``` function and you cannot use new Symbol() because its a primitive value.

```javascript
let fname = Symbol();
let obj = {};
obj[fname] = "Harry";
console.log(obj[fname]);  
```

In the above example, symbol is used as a key for the obj property. It must be noted that the same symbol is required to access the same property. Symbols are unique values. No two symbols can be same.

It is a good practice to provide description to your symbol. You can assign description to the symbol by passing the string parameter to ```Symbol()``` function upon creating the function. This description is stored internally in [[description]] property of the symbol which cannot be access via code. This property is read whenever toString() on symbol is called.

```javascript
let fname = Symbol('first name');
console.log(fname); // Symbol(first name)
```

```typeof``` operator can be used to define identity the symbol.

```javascript
let lname = Symbol('Last Name');
console.log(typeof lname); // "symbol"
```

```Symbol()``` function always create a new symbol even for the same description.

```javascript
console.log((Symbol('mytag') === Symbol('mytag'))); // false.
```

Above code produces the false result because both of these symbols are unique even if the description passed is same.

Now, if you want to create a symbol and then reuse the same symbol somewhere else. You will have to create the symbol using ```Symbol.for()``` method. ```Symbol.for()``` creates a new symbol if that same symbol has not been created in the **global symbol registry** already otherwise return the previously created symbol.

```javascript
console.log((Symbol.for('newsym') === Symbol.for('newsym'))) // true
```

First ```Symbol.for('newsym')``` statement create the symbol and the second statement fetch the same symbol and returns the symbol. That is why output is ```true``` because both of the symbols are same.

```Symbol.keyFor(symbol)``` returns the associated description (key) of the symbol. All symbols created with ```Symbol.for()``` are stored in global symbol storage. It is a best practice to namespace your keys so that they do not collid with each other.

### Coerce Symbol to Other Types.
Symbols cannot be coerced to any other type in JavaScript e.g. string or number. Whenever you try to use the symbol in context which tries to coerce the symbol type to something else you will get an error.

### Retrieve Symbol Properties.
```Object.keys()``` get all the properties of the enumberable properties and ```Object.getOwnPropertyNames()``` get all the properties irregard to their enumerability but can not get symbol properties.

```Object.getOwnPropertySymbols()``` in ECMAScript 6 returns an array of all the symbol properties. Consider the below example.

```javascript
const data = {
  [Symbol('firstName')]: "Harry",
  [Symbol('lastName')]: "Poter"
};

const syms = Object.getOwnPropertySymbols(data);
console.log(data[syms[0]], data[syms[1]]);
```

