var should = require('chai').should()
var roman = require('./index')

describe('number', function() {
  var tests = [
    {num: 0, val: 'nulla'},
    {num: 3, val: 'III'},
    {num: 5, val: 'V'},
    {num: 10, val: 'X'},
    {num: 7, val: 'VII'},
    {num: 9, val: 'IX'},
    {num: 4, val: 'IV'},
    {num: 99, val: 'XCIX'},
    {num: 98, val: 'XCVIII'},
    {num: 478432, val: 'C̅D̅L̅X̅X̅V̅MMMCDXXXII'},
    {num: 'hello world', val: 'nulla'}
  ]

  tests.forEach(function(test) {
    it('should convert ' + test.num + ' to a roman numeral ' + test.val, function() {
      var result = roman.toNumeral(test.num)
      result.should.be.equal(test.val)
    })
  })
})

describe('numeral', function() {
  var tests = [
    {numeral: 'nulla', val: 0},
    {numeral: 'III', val: 3},
    {numeral: 'V', val: 5},
    {numeral: 'X', val: 10},
    {numeral: 'VII', val: 7},
    {numeral: 'IX', val: 9},
    {numeral: 'IV', val: 4},
    {numeral: 'XCIX', val: 99},
    {numeral: 'XCVIII', val: 98},
    {numeral: 'C̅D̅L̅X̅X̅V̅MMMCDXXXII', val: 478432},
    {numeral: 'hello world', val: 0}
  ]

  tests.forEach(function(test) {
    it('should convert ' + test.numeral + ' to a number ' + test.val, function() {
      var result = roman.toNumber(test.numeral)
      result.should.be.equal(test.val)
    })
  })
})

describe('addition', function() {
  var tests = [
    {numerals: [], val: 'nulla'},
    {numerals: ['I'], val: 'I'},
    {numerals: ['IV', 'V'], val: 'IX'},
    {numerals: ['I', 'IX'], val: 'X'},
    {numerals: ['III', 'VIII'], val: 'XI'},
    {numerals: ['IX', 'C', 'X'], val: 'CXIX'},
    {numerals: ['C', ['X', 'II'], 'L'], val: 'CLXII'},
    {numerals: ['D̅', 'X', 'V̅'], val: 'D̅V̅X'},
  ]

  tests.forEach(function(test) {
    it('should add ' + JSON.stringify(test.numerals) + ' to result ' + test.val, function() {
      var result = roman.plus(test.numerals)
      result.should.be.equal(test.val)
    })
  })
})

describe('subtraction', function() {
  var tests = [
    {numerals: [], val: 'nulla'},
    {numerals: ['I'], val: 'I'},
    {numerals: ['I', 'I'], val: 'nulla'},
    {numerals: ['V', 'I'], val: 'IV'},
    {numerals: ['IX', 'II', 'V'], val: 'II'},
    {numerals: ['C', ['X', 'II'], 'IX'], val: 'LXXXIII'},
    {numerals: ['D̅', 'V̅'], val: 'C̅D̅L̅C̅V̅'}, // 495000
  ]

  tests.forEach(function(test) {
    it('should subtract ' + JSON.stringify(test.numerals) + ' to result ' + test.val, function() {
      var result = roman.minus(test.numerals)
      result.should.be.equal(test.val)
    })
  })
})

describe('division', function() {
  var tests = [
    {numerals: [], val: 'nulla'},
    {numerals: ['I'], val: 'I'},
    {numerals: ['I', 'I'], val: 'I'},
    {numerals: ['II', 'II'], val: 'I'},
    {numerals: ['X', 'II'], val: 'V'},
    {numerals: ['C', 'V'], val: 'XX'},
    {numerals: ['C', ['X', 'V'], 'V'], val: 'X'},
  ]

  tests.forEach(function(test) {
    it('should divide ' + JSON.stringify(test.numerals) + ' to result ' + test.val, function() {
      var result = roman.divide(test.numerals)
      result.should.be.equal(test.val)
    })
  })
})

describe('multiplication', function() {
  var tests = [
    {numerals: [], val: 'nulla'},
    {numerals: ['I'], val: 'I'},
    {numerals: ['I', 'I'], val: 'I'},
    {numerals: ['III', 'II'], val: 'VI'},
    {numerals: ['V', 'X'], val: 'L'},
    {numerals: [['II', 'X'], 'V'], val: 'C'},
    {numerals: ['C', ['L', 'X'], 'nulla'], val: 'nulla'},
    {numerals: ['M', 'M'], val: 'M̅'},
  ]

  tests.forEach(function(test) {
    it('should multiply ' + JSON.stringify(test.numerals) + ' to result ' + test.val, function() {
      var result = roman.multiply(test.numerals)
      result.should.be.equal(test.val)
    })
  })
})
