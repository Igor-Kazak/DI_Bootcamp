{
var alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var str1 = 'The quick brown fox jumps over the lazy dog';
var str2 = 'We promptly judged antique ivory buckles for the prize';
var found = false;
var count = 0;

console.log(pangram(str1));
console.log(pangram(str2));

function pangram(str) {
    for (var i = 0; i < alphabet.length; i++) {
        found = false;
        for (var j = 0; j < str.length; j++) {
            if (alphabet[i] == str[j].toLowerCase()) {
                found = true;
            }
        }
        if (found == true) {
            count++;
        }
        else {
            return 'it is not a pangram';
        }
    }
    return 'it is a pangram';
}
}