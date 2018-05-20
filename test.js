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
    {numeral: 'hello world', val: 0}
  ]

  tests.forEach(function(test) {
    it('should convert ' + test.numeral + ' to a number ' + test.val, function() {
      var result = roman.toNumber(test.numeral)
      result.should.be.equal(test.val)
    })
  })
})