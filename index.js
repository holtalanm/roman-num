var numerals = {
  'nulla': 0,
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

var nums = {
  0: 'nulla',
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

function takeLargest(num) {
  var result = 0
  for(var numeral in numerals) {
    var numeralNum = numerals[numeral]
    if(numeralNum <= num && numeralNum > result)
      result = numeralNum
  }
  return result
}

function toNumeral(num) {
  var result = '', curr = 0;
  while(num != 0) {
    curr = takeLargest(num)
    result = result + nums[curr]
    num = num - curr
  }
  if(result == '') return nums[0]
  else return result
}

exports.toNumeral = toNumeral