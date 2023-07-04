function humanize_format(input){
    var res = 'th';
    var lastwo = input % 100;
  if((lastwo % 10 == 1)){
    res = input + "st";
  }
  else if(lastwo % 10 == 2){
    res = input + "nd";
  }
  else if(lastwo % 10 == 3){
    res = input + "rd";
  }
  else{
    res = input + "th";
  }
  return res;
    
}



console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd