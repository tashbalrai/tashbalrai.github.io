---
slug: angular/basic-typescript-types
title: AngularJS - Basics of Typescript types
excerpt: An introduction to typescripts types.
category: Javascript
tags: [angular, frontend, framework, javascript]
seoTitle: Introduction to Angular, a Javascript framework for frontend development
seoKeywords: angular js, frontend javascript framework, javascript software development
seoDescription: Introduction to Angular, a Javascript framework for frontend development
publishedAt: "2017-02-16"
---

## Types

**`Boolean`** = true or false

```typescript
let isDone: boolean = false; // Boolean
```

**`Numbers`** = all floating point values.

```typescript
let decimal: number = 6; // Decimal
let hex: number = 0xf00d; // Hexadecimal prefix 0x
let binary: number = 0b1010; // Binary prefix 0b
let octal: number = 0o744; // Octal prefix 0o
```

**`String`** = textual datatype; single, double quote and template strings.

```typescript
let color: string = "Red"; // double quotes

let fullName: string = `Bob Bobbington`; // single quotes

let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`; // template strings
```

**`Arrays`** = single type array; [] brackets prefixed with data type e.g. `number[]`

```typescript
let list: number[] = [1, 2, 3, 4];
```

Other way `Array<type>` e.g. `Array<number>`

```typescript
let list: Array<number> = [1, 2, 3, 4];
```

**`Tuple`** = set of 2 different or same type values. e.g. `[string, number]`;

Special declaration

```typescript
let x: [string, number]; // OK
x = ["Harry", 35];

let y = ["Harry", 35]; // Error
```

Known index set with known data type.

```typescript
console.log(x[0].substr[0]); // OK

console.log(x[1].substr[1]); // Error number doesn't have substr method.
```

Outside known index behave like union type. Element can be set one type out of the defined type.

```typescript
let x: [string, number]; // OK
x = ["Harry", 35];

x[2] = true; // Error String or number only.
x[3] = 20; // OK
x[4] = "Harry"; // OK
```

**`enum`** = Giving name to numeric value. Index starts from 0 by default.

```typescript
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Red;
```

Starting enum from custom number other than 0.

```typescript
enum Color {
    Red = 100,
    Green,
    Blue,
} // Red = 100, Green = 101, Blue = 102
```

You can assign custome numeric value to all elements in enum too.

```typescript
enum Color {
    Red = 100,
    Green = 200,
    Blue = 300,
}
```

Get enum string name from numeric value.

```typescript
enum Color {
    Red = 1,
    Green,
    Blue,
}
let colorName: string = Color[2];

alert(colorName); // Displays 'Green' as its value is 2 above
```

**`Any`** = Opt-out of type checking at will. Allow any type of value.

```tyepscript
let noType: any = 4;
noType = "Can be assigned string too";
noType = false; // Bool is okay too;
```

`Any` type array, to store multiple types in an array.

```typescript
let arr: any[] = [3, "Hello", "How are you"];
```

**`void`** = Absence of any type; Can store `undefined` or `null`; used as return type of functions to signify no value;

**`null` and `undefined`** = both are types in typescript; if enabled --stringNullChecks, null and undefined only assigneable to void.

**`never`** = no type even not void; good for functions that never return any value i.e. unreachable end points.

```typescript
function error(message: string): never {
    throw new Error(message);
}

function endless(): never {
    while (true) {}
}
```
