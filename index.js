const coin = (params) => {
    // Validation
    if (!Number.isInteger(params.total)) {
        return 'Error params.total must be integer!'
    }
    if (params.coins.some(isNaN)) {
        return 'Error params.coins must be array of integers!'
    }
    if (!params.coins.includes(1)) {
        return 'Element 1 is required!'
    }
    // Sorting
    params.coins = params.coins.sort((a, b) => b - a);
    let rest = params.total;
    let result = '';
    params.coins.forEach(function callback(currentValue) {
        if (rest === 0) {
            return;
        }
        // Calculation of rest
        let currentCoinNumber = Math.trunc(rest / currentValue);
        if (currentCoinNumber) {
            rest -= currentCoinNumber * currentValue;
            for (let i = 0; i < currentCoinNumber; i++) {
                result += currentValue + ',';
            }
        }
    });
    if (rest > 0) {
        return 'Rest cannot be issued!'
    }
    return result.substring(0, result.length - 1);
}
module.exports.coin = coin;

