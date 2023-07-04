function string_chop(input, position){
    let newstr;
    let outputres = [];
    if(position == undefined){
        return input.split(input.length - 1);
    }

    else {
        for( i = 0; i < input.length ; i = i + position){
           newstr = input.slice(i, i+position);
           outputres.push(newstr);
          
        }
        return outputres;

    }
}




console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]