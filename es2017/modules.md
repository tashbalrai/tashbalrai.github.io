###### *[Home](https://tashbalrai.github.io)*, [Block Level Scoping](https://tashbalrai.github.io/es2017/index.html), [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), [String Features](https://tashbalrai.github.io/es2017/string.html), [Unicode](https://tashbalrai.github.io/es2017/unicode.html), [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), [Destructuring](https://tashbalrai.github.io/es2017/destructuring.html), [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), [Promises](https://tashbalrai.github.io/es2017/promises.html), [Classes](https://tashbalrai.github.io/es2017/class.html), **Modules**

## Modules
Before modules, all JavaScript were run into a single scope called global scope. Modules provide us a mechanism to package the related code and bound them to local scopes.

## Exporting Modules
You can export the bindings in the module so that they become visible to the outside world. Otherwise function, classes, variables etc. are only scoped to its containing module only.

### Basic Export
In the bare minimum you can export any function, variable, class etc by just prefixing ```export``` keyword to it. Export cannot be dynamic and you cannot conditionally export something. Anonymous functions or classes can only be exported with ```default``` keyword.

Lets assume that the below code is placed in side module.js file.
```javascript
export let rate = 10.15;
export const LIMIT = 10;
export var name = 'Harry';

export function add(a, b) {
  // statements
}

export class Employee {
  // statements
}

function changeName(n) {
  name = n;
}

export {changeName};
```

### Basic Import
```import``` keyword is used to import the bindings in the present scope from the module. The imported bindings are always treated as ```const``` binding and are readonly. But you can change the import binding from within the module you imported.

All import statements has to be on top level of your code not after any other statement.

```javascript
import {name, changeName} from './module.js'; // import the module

name = 'Bla'; // Error, you cannot change the readonly binding

console.log(name); // prints Harry

changeName('Potter'); // calls the imported function defined in module

console.log(name); // prints Potter;
```

You can import single binding, multiple bindings and the whole modules. When you import a module, it is only loaded and executed once. All references afterward do not execute and load the module again.

```javascript
import * as mod from './module.js';

console.log(mod.LIMIT); // prints 10
```

You can also import without binding anything.

```javascript
import './module.js';
```

In the above example, it will execute the module code only without any bindings. It is mostly done for pollyfills and shims. 

### Renaming Export and Import Bindings
You can rename the bindings with ```as``` keyword.

Filename: 'module2.js'
```javascript
function add(a, b) {
  // statements
}

export {add as plus} // renamed the add to plus
```

```javascript
import {plus as sum} from './module2.js'; // renamed the plus to sum

sum(5,5);
```

### default exports and imports
You can use the ```default``` keyword to export default variables, functions or classes from a module. You can have only one default export per module.

```javascript
export default function() {
  // statements.
}
```

You can default export the identifiers as well.

```javascript
function add(a, b) {
  // statements
}

export default add; // exports function add as default value.
```

Another way to export an identifier as default is using curly '{}' braces with ```as``` keyword.
```javascript
export class Employee{}

function add(a, b) {}

export {add as default}
```

Default values are imported without using the curly braces.

E.g.:
```javascript
import add from './module.js'; // import the default binding from module.
```

You can also import the default binding along with other export bindings.
```javascript
import add, {Employee} from './module.js';
```

In the above code, ```add``` the default binding, came first without curly braces and then the other bindings. You can also import the default binding with curly brace along with other bindings as well. But still you will have to keep the default one before every other binding.

```javascript
import {default as add, Employee} from './module.js';
```

### Re-exporting a binding
You can re-export a binding in following ways.
```javascript
import {Employee} from './module.js';

export {Employee};
```

```javascript
export {Employee} from './module.js';
```

You can rename re-export as well and export all of the bindings.
```javascript
export {Employee as Emp} from './module.js'; // rename
export * from './module2.js'; // export all of bindinds
```

### Browser Handling of Modules
```<script>``` tag has a ```type``` attribute. To use the script as a module you need to assign "module" as a value to the ```type``` attribute. When script is loaded as a module then variables are not sent to the global scope they are bound to the module itself.



