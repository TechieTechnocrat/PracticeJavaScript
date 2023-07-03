function protect_email(input){
    let res = input.trim().split("@");
    if( res.length > 2) { return "invalid email" }

    let part1 = res[0]; let part2= res[1];
    avg = part1.length/2;
    part1 = part1.substring(0, (part1.length - avg));
    return part1 + "...@" + part2;


}

console.log(protect_email("sonal.kumar2019@vitbhopal.ac.in"));
console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("robin@singh@example.com"));
