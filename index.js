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
  {ro: 'M', val: 1000}
]

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

exports.toNumeral = toNumeral
exports.toNumber = toNumber