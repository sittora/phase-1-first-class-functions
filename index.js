function isAFunction() {
    console.log('i am a function');
  }
  
  function receivesAFunction(isAFunction) {
    console.log('youre calling receives')
    isAFunction();
  }
  
  receivesAFunction(saySomething);

  
  function returnsANamedFunction() {
    return function namedFunction() {
        console.log('hello')
    }
}

returnsAnAnonymousFunction();

  function returnsAnAnonymousFunction() {
    return function() {
        console.log('hello')
    }
}

returnsAnAnonymousFunction();