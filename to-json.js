
let jsedn = require('jsedn')
let collections = require('jsedn/lib/collections')
let atoms = require('jsedn/lib/atoms')
let assert = require('assert');

exports.toJson = function toJson(ednObj) {
  // console.log("Data to convert", ednObj)

  if (ednObj instanceof atoms.Keyword) {
    return ednObj.val.slice(1)
  }

  if (typeof ednObj === 'number') {
    return ednObj
  }

  if (typeof ednObj === 'string') {
    return ednObj
  }

  if (ednObj instanceof collections.Map) {
    let ret = {}
    ednObj.keys.forEach((k, idx) => {
      let key = toJson(k)
      assert(typeof key === 'string', "Key for an object should be a string!")
      ret[key] = toJson(ednObj.vals[idx])
    })
    return ret
  }

  if (ednObj instanceof collections.Set) {
    return ednObj.val.map(toJson)
  }

  if (ednObj instanceof collections.Vector) {
    return ednObj.val.map(toJson)
  }

  if (ednObj instanceof collections.List) {
    return ednObj.val.map(toJson)
  }

  if (ednObj instanceof atoms.Symbol) {
    throw new Error('Symbol not supported')
  }

  if (ednObj == null) {
    return null
  }

  if (ednObj === true) {
    return true
  }

  if (ednObj === false) {
    return false
  }

  console.error('Unkown data:', ednObj, 'in type:', typeof ednObj)
  throw new Error('Not known how to convert')
}
