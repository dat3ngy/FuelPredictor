const calc = require('./login')


test('test gallonCal', () => {

    expect(calc(2,'2','+')).toBe(null)
    expect(calc(3,5,'+')).toBe(8)
    expect(calc(3,5,'-')).toBe(-2)   
})

