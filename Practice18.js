function count(input, param) {
    let account;
    if(param.length <= 0) {
        return input.length + 1;
    }
    else {
        return input.match(new RegExp(param, 'gi')).length;
    }
    

}

console.log(count("The// quick brown fox jumps over the lazy dog", "the"));

console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));

//2
//1
