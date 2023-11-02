function sum(a,b) {
    return a + b
}
console.log(sum(7,3))

// currency convertion

function fromDollarToYen(usd) {
    return usd * 150
}

function fromEuroToDollar(euro){
    return euro * 1.07
}

function fromYenToPound(yen){
    return yen * 0.0055
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }