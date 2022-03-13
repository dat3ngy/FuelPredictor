const calc = require('./validations')
const string1 = require('./validations')
const hello = require('./validations')
const boolean = require('./validations')

test('bool', () => {

    expect(calc(2, 3)).toBe(false)
    expect(calc(6,5)).toBe(true)

})


test('string', () => {

    expect(hello()).toBe('Hello')
})

test('string', () => {

    expect(string1('h')).toBe('odd')
    expect(string1('he')).toBe('even') 
})


test('test gallonCal', () => {

    expect(calc(2,'2','+')).toBe(-1)
    expect(calc(3,5,'+')).toBe(8)
    expect(calc(3,5,'-')).toBe(-2)  
    expect(calc(6,3,'*')).toBe(18) 
    expect(calc(6,3,'/')).toBe(2) 
})



