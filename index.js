
let jsedn = require('jsedn')
let {toJson} = require('./to-json')

export default function(source) {
  // const options = getOptions(this);
  // validateOptions(schema, options, 'Example Loader');

  let ednData = jsedn.parse(source)
  let jsData = toJson(ednData)

  return `mobule.exports = ${JSON.stringify(jsData)};`;
}
