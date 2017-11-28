const { extractNumber, isOdd, isEven } = require('./index')

test('extract number from nopol', () => {
  const nopol = 'B 123 AC'
  expect(extractNumber(nopol)).toEqual(123)
})

test('check if 123 is odd number', () => {
  expect(isOdd(123)).toBeTruthy()
})

test('check if 123 is not even number', () => {
  expect(isEven(123)).toBeFalsy()
})

test('check if 246 is even number', () => {
  expect(isEven(246)).toBeTruthy()
})
