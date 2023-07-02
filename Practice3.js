function truncateString(input, pos){
    if (input.constructor === String){
        let res = input.slice(0, pos);
        //use slice, substring or substr
        //substr however is deprecated
        return res;
    }
    else return -1;

}


console.log(truncateString("Robin Singh",4));