var rework = require('rework')
  , defaultUnit = require('..')
  , read = require('fs').readFileSync

var input = read(__dirname + '/fixture/input.css', 'utf8')
  , px = read(__dirname + '/fixture/px.css', 'utf8')
  , em = read(__dirname + '/fixture/em.css', 'utf8')

describe('defaultUnit', function() {

  it('should add px by default', function(){
    var css = rework(input)
      .use(defaultUnit)
      .toString().trim()

    css.should.equal(px.trim())
  })

  it('should add em', function(){
    var css = rework(input)
      .use(defaultUnit('em'))
      .toString().trim()

    css.should.equal(em.trim())
  })

})
