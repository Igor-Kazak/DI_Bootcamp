exports.checkName = (string) => {
  try {
    for (let i = 0; i < string.length; i++){
      if ((string.charCodeAt(i)>90 && string.charCodeAt(i)<97) || string.charCodeAt(i)<65 || string.charCodeAt(i)>122){
        if (string.charCodeAt(i) != 32){
          return false;
        }
      }
    }
    let arr = string.split(' ');    
    if (arr.length != 2){
      return false;
    }
    if (arr[0][0] == arr[0][0].toLowerCase() || arr[1][0] == arr[1][0].toLowerCase()){
      return false;
    }
  } 
  catch (error) {
    return false;
  }
  return true;
}
