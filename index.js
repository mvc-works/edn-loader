


export default function(source) {
  const options = getOptions(this);

  validateOptions(schema, options, 'Example Loader');

  // Apply some transformations to the source...

  return `export default ${ JSON.stringify(source) }`;
}
