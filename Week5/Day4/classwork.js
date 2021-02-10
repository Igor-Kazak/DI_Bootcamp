//Exercise 1
{
function grow(height, cycles){
    if (cycles % 2 == 0) {
        for (let i=0; i<cycles/2; i++){
            height = spring(height);
            height = summer(height);
        }
    }
    else {
        for (let i=0; i<(cycles-1)/2; i++){
            height = spring(height);
            height = summer(height);
        }
        height = spring(height);
    }
    return height;
}

function spring(height){
    return height*2;
}

function summer(height){
    return height+1;
}

console.log(grow(1, 5));
}

