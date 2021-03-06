
let jsedn = require('jsedn')
let {toJson} = require('@mvc-works/edn2json')

module.exports = function(source) {
  // const options = getOptions(this);
  // validateOptions(schema, options, 'Example Loader');

  let ednData = jsedn.parse(source)
  let jsData = toJson(ednData)

  return `module.exports = ${JSON.stringify(jsData)};`;
}
