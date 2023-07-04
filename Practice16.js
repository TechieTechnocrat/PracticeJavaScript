function text_truncate(input, position, adddata) {
  let res;
  let x;
  if(adddata == undefined && position == undefined){
    return input;
  }
  if (adddata == undefined) {
    res = "...";
  } else {
    res = adddata;
  }
  
  x = position - res.length;
  var outputres = input.slice(0, x) + res;
  return outputres;
}

console.log(text_truncate("We are doing JS string exercises."));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
// ("We are doing JS string exercises.");
// ("We are doing JS ...");
// ("We are doing !!");
