var should = require('chai').should()
var roman = require('./index')

describe('number', function() {
  var tests = [
    {num: 3, val: 'III'},
    {num: 5, val: 'V'},
    {num: 10, val: 'X'},
    {num: 7, val: 'VII'},
    {num: 9, val: 'IX'},
    {num: 4, val: 'IV'},
    {num: 99, val: 'XCIX'},
    {num: 98, val: 'XCVIII'}
  ]

  tests.forEach(function(test) {
    it('should convert ' + test.num + ' to a roman numeral ' + test.val, function() {
      var result = roman.toNumeral(test.num)
      result.should.be.equal(test.val)
    })
  })
})