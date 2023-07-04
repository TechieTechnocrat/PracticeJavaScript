function uncamelize(input, joiner){
    return input.replace(/[A-Z]/g, function(match, chr) {
        if(joiner == undefined ){
            let res = " ";
            return res+match.toLowerCase();
        }
        return joiner+match.toLowerCase();
      });
}


console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));


// "hello world"
// "hello-world"
// "hello_world"