'use strict'

const levenshtein = require('fast-levenshtein')
const _ = require('lodash')

class LevenshteinMap {

  get (key) {
    return this[key] || this._levenshtein(key)
  }

  put (key, value) {
    this[key] = value
  }

  _levenshtein(key) {
    let bestMatch = _.minBy(Object.keys(this), (objKey) => {
      return levenshtein.get(key, objKey)
    })
    return this[bestMatch]
  }
}

module.exports = LevenshteinMap
