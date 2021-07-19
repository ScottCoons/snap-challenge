// 1. Write a function in JavaScript that converts weights to grams. The function should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit og weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and return it.

const convertToGrams = (weight, units) => {
    let grams
    switch (units) {
        case 'lbs':
            grams = weight * 454
            break
        case 'oz':
            grams = weight * 454 / 16
            break
        case 'kg':
            grams = weight * 1000
            break
        case 'g':
            grams = weight
            break
        case 'mg':
            grams = weight / 1000
            break
        default:
            grams = 'please provide units of "lbs", "oz", "kg", or "mg" '
    } //switch
    return grams
}

const coffeeWeight = convertToGrams (4, 'oz')
console.log(coffeeWeight)

