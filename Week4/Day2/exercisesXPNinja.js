const mergeCarr = (string) => (nextString) => 
    nextString === undefined ? string : mergeCarr(string + ' ' + nextString);

console.log(mergeCarr('There')('is')('no')('spoon.')());