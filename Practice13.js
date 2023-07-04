function repeat(input, numr) {

    var res = input;
    for (i = 0; i < numr - 1; i++) {
       res += input;
    }
    return res;
  
}

console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"


// other alternative 
// repeat = function repeat(str, count) {
//     if(typeof(count) == "undefined") {
//     count =1;
//   }
//   return count < 1 ? '' : new Array(count + 1).join(str);
//     }