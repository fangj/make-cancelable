var makeCancelable = (promise) => {
  var hasCanceled_ = false;

  var wrappedPromise = new Promise((resolve, reject) => {
    promise
      .then((val) =>
        hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
      )
      .catch((error) =>
        hasCanceled_ ? reject({isCanceled: true}) : reject(error)
      );
  });
  wrappedPromise.cancel=wrappedPromise.cancel||function(){
    hasCanceled_ = true;
  };
  return wrappedPromise;
};

module.exports=makeCancelable;