function swapcase(input){
  return input.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr){
    return chr ? match.toUpperCase() : match.toLowerCase();
  })
}

  
  
console.log(swapcase('Hello World')); // Output: 'hELLO wORLD'
