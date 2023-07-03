// function camelize(input){
//     return input.replace(/\w\S*/g, function(match, chr){
//       return chr = match.charAt(0).toUpperCase() + match.substring(1).toLowerCase();
//     })
//   }
  

function camelize(input) {
    return input.replace(/\s+(\w)/g, function(chr) {
      return chr.toUpperCase();
    });
  }
    
    
  console.log(camelize('Hello World JavaScipt Exercise new only')); // Output: 'hELLO wORLD'
  

