const extractNumber = nopol => {
  const getNumber = nopol.split(' ')
  return getNumber[1]
}

const isOdd = number => {
  if (number % 2 !== 0) return true
  else return false
}

const isEven = number => {
  if (number % 2 === 0) return true
  else return false
}

module.exports = {
  extractNumber,
  isOdd,
  isEven
}
