###### *[Home](https://tashbalrai.github.io)*, [Block Level Scoping](https://tashbalrai.github.io/es2017/index.html), [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), [String Features](https://tashbalrai.github.io/es2017/string.html), [Unicode](https://tashbalrai.github.io/es2017/unicode.html), [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), [Destructuring](https://tashbalrai.github.io/es2017/destructuring.html), [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), **Promises**, [Classes](https://tashbalrai.github.io/es2017/classes.html), [Modules](https://tashbalrai.github.io/es2017/modules.html)

## Promise
A promise provides a better mechanism to handle asynchronous task. A promise explicitly provide failure or success response and promises can be chained as well.

A promise have 3 states.
1. Pending: Executor function has not yet been completed.
2. Fulfilled: Promise resolved successfully.
3. Rejected: Promise resulted in an error.

A promise have internal property called [[PromiseState]] that is used to track the promise state. A ```then()``` is called automatically whenever a promise is fulfilled. ```then()``` method takes two optional function as arguments one for fulfilled state and another for rejected state. 

A ```catch()``` method can be used to track the rejection of a promise specifically. 

You can create a promise using a promise constructor. Consider the example below:

```javascript
let p1 = new Promise((resolve, reject) => {
  resolve(42); // fulfill the promise
  console.log('after resolve');
});

p1.then((value) => {
  console.log(value);
}, (err) => {
  console.log(err);
});
```

The first function to the ```then()``` handler gets the value from ```resolve()``` and the second function to the ```then()``` handler gets its value from ```reject()```. 

Instead of having both resolve and reject handler in one ```then()``` handler, you can have separate resolve and reject handler.

```javascript
let p1 = new Promise((resolve, reject) => {
  reject(new Error('This is custom error.'));  
});

p1.then((value) => {
  console.log(value);
});

p1.catch((err) => {
  console.log(err);
});
```

Promises give guarantee that fulfillment handler will execute and they gets executed even if the fulfillment handler is already settled. Consider below example.

```javascript
let p1 = new Promise((resolve, reject) => {
  resolve(50);
});

p1.then((value) => {
  console.log('First value: ', value);
});

setTimeout(() => {
  p1.then((value) => {
    console.log('Second value: ', value);
  });
}, 5000);

p1.catch((err) => {
  console.log(err);
});

// Output
// First value:  50
// After 5s
// Second value:  50
```
>NOTE: Each ```then()``` and ```catch()``` handler are queued in a job queue which are handled asychronously. However, this job queue is a separate job queue created for promises only.

### thenable
Any object having a ```then(resolve, reject)``` method is called a thenable. All promises are thenable but all thenables are not promises.

### Promise.resolve(value | thenable | promise)
```Promise.resolve()``` returns a promise object that accepts one arguments as a value, a promise or a thenable. 

1. When a value is passed that value is returned as parameter to the resolve handler.

```javascript
let p1 = Promise.resolve(78);
p1.then(result => {
  console.log(result); // 78
});
```
2. When a promise is passed then executor code is run and settled promise is returned.

```javascript
let p1 = Promise.resolve(new Promise((resolve, reject) => {
  console.log('Executor');
  resolve('I am resolved');
}));

p1.then(result => {
  console.log(result);
});

// Output
// Executor
// I am resolved
```
3. When a thenable non-promise is passed than the ```then()``` method is executed.

```javascript
let p1 = Promise.resolve({
  then: (resolve, reject) => {
    resolve('I am resolved');
  }
});
p1.then(result => {
  console.log(result); // I am resolved
});
```

### Promise.reject(reason)
Reject the promise with the given reason.

```javascript
let p1 = Promise.reject(new Error('I am reject reason'));

p1.catch(err => {
  console.log(err); // Error: I am reject reason
})
```

### Global Rejection Handling.

#### Node.js
```unhandledRejection``` event is emitted on ```process``` global object whenever an unhandled rejection occurs with ```reason``` and ```promise``` arguments.

```rejectionHandled``` event is emitted on ```process``` global object whenever a rejection is handled after the one turn of the event loop. It accept one argument i.e. ```promise```

#### Browser
Browser have equivalent events defined on ```window``` object.

1. ```window.unhandledrejection```   
2. ```window.rejectionhandled```

These events are passed an event object containing the following properties:

1. ```type``` stores name of the event i.e. ```unhandledrejection``` or ```rejectionhandled```
2. ```promise``` object that was rejected.
3. ```reason``` of the rejection.

### Chaining Promises
You can chain the promise, in that case each chained ```then()``` will return a new promise on which the next ```then()``` will be handled.

E.g.:
```javascript
let p1 = Promise.resolve('Solved!!');

p1.then(value => {
  console.log(value); // Solved!!
})
.then(value => {
  console.log(value); // undefined
})
```

If you unchain the above promise, it will look like the below.

E.g.:

```javascript
let p1 = Promise.resolve('Solved!!');

let p2 = p1.then(value => {
  console.log(value); // Solved!!
});

p2.then(value => {
  console.log(value); // undefined
});
```

In the above code, statement ```p2.then()``` also returns a promise but this is just ignored and not utilized further. You should always have one ```catch()``` at the end of promise chain to make sure all errors inside promise executor and rejection cases are handled properly. 

If you do not handle the rejection case, all errors or rejections raised would be silently ignored without any warning etc.

#### returning from promises handler
When you return a non-promise value from a promise it will be fed to the next promise handler in the chain. When you return a promise from a promise a new promise is returned and the next chained handler is called on this returned promise.

E.g.:
```javascript
let p1 = new Promise((resolve, reject) => {
  resolve('Hello');
});

let p2 = p1.then(value => {
  console.log(value); // Hello
  return 'How are you?';
});

p2.then(value => {
  console.log(value); // How are you?
});

// Output
// Hello
// How are you?
```
When ```p1.then()``` returns a value, it is treated as a new settled promise ```p2``` whose value is the value returned. When ```p2.then()``` returns a value, it is a new settled promise with value set to the value returned from it.

When you return a promise from a ```then()``` handler a new resolved promise is returned whose value is the new promise generated. In this case, you skip by 2 promises.

```javascript
let p1 = Promise.resolve('Hello');

let p3 = p1.then(value => {
  console.log(value); // Hello
  
  return Promise.resolve('Harry');
});

p3.then(value => {
  console.log(value); // Harry
});
```

#### returning from catch handler
You can also return value from a catch handler, once you return a value or promise from a catch handler you can chain another ```then()``` handler next to it who will receive the value returned.

```javascript
let p1 = new Promise((resolve, reject) => {
  resolve('Hello');
});

let p2 = p1.then(value => {
  console.log(value); // Hello
  throw new Error('Delibrate error');
})
.catch(err => {
  console.log(err); // Error Delibrate error
  return 'New Rise';
})
.then(value => {
  console.log(value); // New Rise
});
```

### Promise.all(iterable)
```Promise.all``` accepts an iterable of promises and returns a promise which gets settled when all of the promises in the iterable passed are settled. If any of the promise gets rejected, rejection handler of the ```Promise.all``` is executed instead of a fulfilled handler.

```javascript
let 
  p1 = Promise.resolve(1),
  p2 = Promise.resolve(2),
  p3 = Promise.resolve(3);

let p4 = Promise.all([p1, p2, p3]);

p4.then(value => {
  console.log(value[0]); // 1
  console.log(value[1]); // 2
  console.log(value[3]); // 3
});
```

### Promise.race(iterable)
```Promise.race(iterable)``` also accept an iterable of promises but it executes its fulfilled or rejection handler as soon as any of the promise gets fulfilled or rejected. So, it basically checks for the race condition among the promises present in the iterable passed to it as an argument.
