function insert(stringinput, addinput, position) {
    var outputres = stringinput.slice(0, position) + addinput + stringinput.slice(position);
    return outputres;
  }
  


console.log(insert('We are doing some exercises.','JavaScript ',18));
