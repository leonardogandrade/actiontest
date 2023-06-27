function sumTwoNumber(a, b) {
    return a + b
}

function max(array) {
    if (array.every(value => typeof (value) === 'number'))
        return Math.max.apply(null, array)
    throw new TypeError('one or more itens are not numbers.')
}


module.exports = {
    sumTwoNumber,
    max
}