function camelize(input) {
    return input.replace(/\s+(\w)/g, function(chr) {
      return chr.toUpperCase();
    });
  }
    
    
  console.log(camelize('Hello World JavaScipt Exercise new only')); // Output: 'hELLO wORLD'
  

