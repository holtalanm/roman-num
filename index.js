var numerals = [
  {ro: 'nulla', val: 0},
  {ro: 'I', val: 1},
  {ro: 'IV', val: 4},
  {ro: 'V', val: 5},
  {ro: 'IX', val: 9},
  {ro: 'X', val: 10},
  {ro: 'XL', val: 40},
  {ro: 'L', val: 50},
  {ro: 'XC', val: 90},
  {ro: 'C', val: 100},
  {ro: 'CD', val: 400},
  {ro: 'D', val: 500},
  {ro: 'CM', val: 900},
  {ro: 'M', val: 1000},
  {ro: 'MV̅', val: 4000},
  {ro: 'V̅', val: 5000},
  {ro: 'V̅X̅', val: 9000},
  {ro: 'X̅', val: 10000},
  {ro: 'X̅L̅', val: 40000},
  {ro: 'L̅', val: 50000},
  {ro: 'L̅C̅', val: 90000},
  {ro: 'C̅', val: 100000},
  {ro: 'C̅D̅', val: 400000},
  {ro: 'D̅', val: 500000},
  {ro: 'D̅M̅', val: 900000},
  {ro: 'M̅', val: 1000000},
]

var operators = {
  '+': function(val1, val2) {
    return val1 + val2
  },
  '-': function(val1, val2) {
    return val1 - val2
  },
  '/': function(val1, val2) {
    return val1 / val2
  },
  '*': function(val1, val2) {
    return val1 * val2
  }
}

function takeLargest(num) {
  var result = numerals[0]
  numerals.forEach(function(numeral) {
    if(numeral.val <= num && numeral.val > result.val) {
      result = numeral
    }
  })
  return result
}

function toNumeral(num) {
  num = Number(num)
  var result = '', curr = numerals[0];
  while(num != 0) {
    curr = takeLargest(num)
    if(curr.val == 0) return numerals[0].ro
    result = result + curr.ro
    num = num - curr.val
  }
  if(result == '') return numerals[0].ro
  else return result
}

function getMatch(numeral) {
  numeral = '' + numeral
  var result = numerals[0]
  numerals.forEach(function(num) {
    if(numeral.length >= num.ro.length
      && numeral.slice(0, num.ro.length) == num.ro && num.val > result.val) {
        result = num
      }
  })
  return result
}

function toNumber(numeral) {
  var result = 0, curr = numerals[0];
  numeral = '' + numeral
  while(numeral.length > 0) {
    curr = getMatch(numeral)
    if(curr.val == 0) return numerals[0].val
    result += curr.val
    numeral = numeral.slice(curr.ro.length)
  }
  return result
}

function operate(operator, val1, val2) {
  return operators[operator](val1, val2)
}

function performOperation(operator, values) {
  var start = 0
  if(values.length > 0) {
    if(Array.isArray(values[0]))
      start = toNumber(performOperation(operator, values[0]))
    else
      start = toNumber(values[0])
  }
  return toNumeral(values.slice(1).reduce(function(curr, next) {
    if(Array.isArray(next)) {
      return operate(operator, curr, toNumber(performOperation(operator, next)))
    } else {
      return operate(operator, curr, toNumber(next))
    }
  }, start))
}

function plus(...values) {
  return performOperation('+', values)
}

function minus(...values) {
  return performOperation('-', values)
}

function divide(...values) {
  return performOperation('/', values)
}

function multiply(...values) {
  return performOperation('*', values)
}

exports.toNumeral = toNumeral
exports.toNumber = toNumber
exports.plus = plus
exports.minus = minus
exports.divide = divide
exports.multiply = multiply
