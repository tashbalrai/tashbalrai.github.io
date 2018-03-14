###### *[Home](https://tashbalrai.github.io)*, **Modules**

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

### Renaming Export and Import Bindings
You can rename the bindings with ```as``` keyword.

Filename: 'module2.js'
```javascript
function add(a, b) {
  // statements
}

export {add as plus}
```

```javascript
import {plus as sum} from './module2.js';

sum(5,5);
```
