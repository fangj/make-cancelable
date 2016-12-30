var CP=require('./index.js');

var p1 = Promise.resolve(3);
var p2 = Promise.resolve(3);

var cp1=CP(p1);
var cp2=CP(p2);

cp1.then(function(x){console.log("cp1 then:",x)})
.catch(function(x){console.log("cp1 catch:",x)}); //cp will be rejected with {isCanceled: true}

cp2.then(function(x){console.log("cp2 then:",x)})
.catch(function(x){console.log("cp2 catch:",x)}); //cp will be rejected with {isCanceled: true}

cp1.cancel(); //cancel the promise
