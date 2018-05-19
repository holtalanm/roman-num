var should = require('chai').should()
var roman = require('./index')

describe('number', function() {
  it('should convert to a roman numeral', function() {
    var result = roman.toNumeral(3)
    result.should.be.equal('III')

    result = roman.toNumeral(5)
    result.should.be.equal('V')

    result = roman.toNumeral(10)
    result.should.be.equal('X')

    result = roman.toNumeral(7)
    result.should.be.equal('VII')
  })
})