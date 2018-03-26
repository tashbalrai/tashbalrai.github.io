## Types

**```Boolean```** = true or false
```typescript
let isDone: boolean = false; // Boolean
```

**```Numbers```** = all floating point values.
```typescript
let decimal: number = 6;  // Decimal
let hex: number = 0xf00d; // Hexadecimal prefix 0x
let binary: number = 0b1010; // Binary prefix 0b
let octal: number = 0o744; // Octal prefix 0o
```

**```String```** = textual datatype; single, double quote and template strings.
```typescript
let color: string = "Red"; // double quotes

let fullName: string = `Bob Bobbington`; // single quotes

let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`; // template strings
```

**```Arrays```** = single type array; [] brackets prefixed with data type e.g. ```number[]```
```typescript
let list: number[] = [1,2,3,4];
```
Other way ```Array<type>``` e.g. ```Array<number>```
```typescript
  let list: Array<number> = [1,2,3,4];
```

**```Tuple```** = set of 2 different or same type values. e.g. ```[string, number]```; 

Special declaration
```typescript
let x: [string, number]; // OK
x = ['Harry', 35];

let y = ['Harry', 35]; // Error
```

Known index set with known data type.
```typescript
console.log(x[0].substr[0]); // OK

console.log(x[1].substr[1]); // Error number doesn't have substr method.
```

Outside known index behave like union type. Element can be set one type out of the defined type.
```typescript
let x: [string, number]; // OK
x = ['Harry', 35];

x[2] = true; // Error String or number only.
x[3] = 20; // OK
x[4] = "Harry"; // OK
```

**```enum```** = Giving name to numeric value
