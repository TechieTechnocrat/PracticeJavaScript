function capitalize(input){
    let res = input.charAt(0);
    let output = res.toUpperCase();
    return output+ input.substring(1, input.length-1);
}
console.log(capitalize('js string exercises'));