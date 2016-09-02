'use strict'

const expect = require('code').expect
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const LevenshteinMap = require('./levenshtein-map')

lab.test ('Exact match returns the expected object', (done) => {
  let levenshtein = new LevenshteinMap()
  levenshtein.put('test', 'test')
  expect(levenshtein.get('test')).to.equal('test')
  done()
})

lab.test('Default returns a value even if it is not close in distance', (done) => {
  let levenshtein = new LevenshteinMap()
  levenshtein.put('test', 'test')
  expect(levenshtein.get('unexpected')).to.equal('test')
  done()
})

lab.test('Returns the closest to the key', (done) => {
  let levenshtein = new LevenshteinMap()
  levenshtein.put('test', 'test')
  levenshtein.put('unicorn', 'weeeeee')
  expect(levenshtein.get('unexpected')).to.equal('weeeeee')
  expect(levenshtein.get('testarama')).to.equal('test')
  done()
})
