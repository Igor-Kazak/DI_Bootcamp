//Exercise 1
let landscape = function () {

    let result = "";

    let flat = function (x) {
        for (let count = 0; count < x; count++) {
            result = result + "_";
        }
    }

    let mountain = function (x) {
        result = result + "/"
        for (let counter = 0; counter < x; counter++) {
            result = result + "'"
        }
        result = result + "\\"      // one \ is screening second \
    }

    flat(4);                        // ____
    mountain(4);                    // ____/''''\
    flat(4)                         // ____/''''\____
    return result;
}

console.log(landscape());       // ____/''''\____
