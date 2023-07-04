function formatted_string(padstring, padtext, position){
    let res1 = padtext.toString();
    let heyheytrick = parseInt(position, 10);
    console.log(res1);
    let outputres = padstring.substring(0, 1) + res1;
    return outputres;

}

console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"
