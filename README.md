# make-cancelable
make promise cancelable

code from https://github.com/facebook/react/issues/5465#issuecomment-157888325

### How to use

```
var mc=require('make-cancelable');

var p1 = Promise.resolve(3);
var cancelablePromise=mc(p1);

cancelablePromise.cancel(); //cancel the promise
cancelablePromise.then(...); //cp will be rejected with {isCanceled: true}
```
