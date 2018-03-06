###### *[Home](https://tashbalrai.github.io)*, **Promises**

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

### Promise.resolve()
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



