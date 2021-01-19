var char = '* ';

for (let i = 0; i < 4; i++){
    for (let b = 0; b < i; b++){
        console.log(char);
        char += '* ';
    }
}