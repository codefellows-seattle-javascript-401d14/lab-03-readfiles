### Using done in Mocha callbacks
Callback functions are used as a sort of flag to signal to Mocha that the test is complete. The word 'done' is just convention since the name of the callback function can be anything, the important point is that Mocha will wait for it to be called.

- For cases when an error is thrown, the done callback accepts an error so that the test can end.
```javascript
var message = 'hello';
describe('test print module', function(){
  it('should log hello', function(done){
    print(message, function(err){
      if (err) done (err);
      done();
    });
  });
});
```
