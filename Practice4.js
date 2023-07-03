function abbrev_last_name(input){
    let res = input.trim().split(" ");

    if (res.length > 1) {
        let lastName = res[res.length - 1];
        let output = res.slice(0, res.length - 1).join(" ") + " " + lastName.charAt(0) + ".";
        return output;
      }
      
      return input;

}

console.log(abbrev_last_name("Robin Singh Nalla Berozgar"));