# make-cancelable
make promise cancelable

code from https://github.com/facebook/react/issues/5465#issuecomment-157888325

### How to use

var CP=require('make-cancelable');

var p1 = Promise.resolve(3);
var cp=CP(p1);

cp.cancel(); //cancel the promise
cp.then(...); //cp will be rejected with {isCanceled: true}
