function capitalize_Words(input) {
    return input.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  
  
console.log(capitalize_Words('js string exercises'));
console.log(capitalize_Words("haina haina haina kuch samajh nahi aaya na?"));