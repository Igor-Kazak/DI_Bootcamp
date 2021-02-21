exports.returnNumbers = (string) => {
  let digits = '';
  for (let i = 0; i < string.length; i++){
    if (!isNaN(string[i])){
      digits += string[i];
    }
  }
  return digits;
}
