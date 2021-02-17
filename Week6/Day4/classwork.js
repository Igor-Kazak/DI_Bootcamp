function compareV1(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}

function compareV2(arr1, arr2) {
    let result = [];
    let arr3 = arr1.concat(arr2);
    for (let i = 0; i < arr3.length; i++) {
        if (!arr2.includes(arr3[i]) || !arr1.includes(arr3[i])) {
            result.push(arr3[i]);
        }
    }

    return result;
}

console.log(compareV1([1, 2, 3, 4], [3, 4, 5]));
console.log(compareV2([1, 2, 3, 4], [3, 4, 5]));