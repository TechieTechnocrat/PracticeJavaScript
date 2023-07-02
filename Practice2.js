// Write a JavaScript function to check whether an 'input' is a string or not.

function is_String(takeinputna){
    if(typeof takeinputna === 'string')
    return true;
    else return false;
}

console.log(is_String(89));
console.log(is_String("89abc"));
