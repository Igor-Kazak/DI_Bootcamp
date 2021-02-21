let budget = 15;
let keyboards = [3, 1];
let drives = [5, 2, 8];

function spendAllMoney(budget, keyboards, drives) {
    let max = 0;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= budget) {
                max = keyboards[i] + drives[j];
            }
        }
    }
    return max;
}
console.log(spendAllMoney(budget, keyboards, drives));