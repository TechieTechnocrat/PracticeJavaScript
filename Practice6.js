function parametrize_string(input){
    let res = input.toLowerCase().replace(/\./g, '');
    let newres = res.trim().split(" ");
    let output = newres.join("-");
    return output;

}

console.log(parametrize_string("Robin Singh from USA."));
