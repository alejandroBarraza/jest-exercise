const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9)

    expect(total).toBe(23)
})

test('One Dollar should be 150 yen ', () => {

    const yen = fromDollarToYen(2)

    const mock = 150 * 2

    expect(yen).toBe(mock)


})

test('One Euro should be 1.07 dollar', () => {
    const dollar = fromEuroToDollar(3)

    const mock = 3 * 1.07

    expect(dollar).toBe(mock)
})


test("One Pound should be 0.0055 Yen", ()=> {
    const pound = fromYenToPound(10)
    
    const mock = 10 * 0.0055

    expect(pound).toBe(mock)
})