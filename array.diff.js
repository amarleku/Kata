function array_diff(a, b) {
    var result = [] ;
  
    a.forEach( function(item){
      if(!b.includes(item)) {
       result.push(item);
      }
    });
    
    return result;
  }