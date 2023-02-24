const toFunction = string => Function.call(null, `return ${string}`)();
const deserialize = body =>
  Object.keys(body).reduce((packet, key) => ({...packet, [key]: toFunction(body[key])}), {});

export default deserialize;
