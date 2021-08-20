Array.prototype.square = function(){
    return this.map(function(value){
      return value * value;
    });
  };
  
  Array.prototype.cube = function(){
    return this.map(function(value){
      return value * value * value;
    });
  };
  
  Array.prototype.average = function(){
    if ( 0 === this.length ) {
      return NaN;
    }
    return this.reduce(function( a, b ){
      return a + b;
    }) / this.length;
  };
  
  Array.prototype.sum = function(){
    return this.reduce(function( a, b ){
      return a + b;
    });
  };
  
  Array.prototype.even = function(){
    return this.filter(function(a){
      return 0 === a % 2;
    });
  };
  
  Array.prototype.odd = function(){
    return this.filter(function(a){
      return 0 !== a % 2;
    });
  };
  
  
  var testArray = [ 1, 2, 3, 4, 5, 56, 65 ];
  console.log( 'Original array: ' + testArray.toString() );
  console.log( 'Squared: ' + testArray.square() );
  console.log( 'Cubed: ' + testArray.cube() );
  console.log( 'Average: ' + testArray.average() );
  console.log( 'Average an empty array: ' + [].average() );
  console.log( 'Sum: ' + testArray.sum() );
  console.log( 'Evens: ' + testArray.even() );
  console.log( 'Odds: ' + testArray.odd() );