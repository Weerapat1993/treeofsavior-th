/**
 * Random Number (min, max)
 * @param {integer} min
 * @param {integer} max
 * @return {integer} number
 */
export const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min

/**
 * Random Array (array.length)
 * @param {integer} array.length
 * @return {integer} number
 */
export const randArray = (max) => Math.floor(Math.random() * (max - 1))

/**
 * Random Boolean
 * @param {integer} array.length
 * @return {integer} number
 */
export const randBoolean = () => {
  const rand = Math.random();
  if(rand > 0.5) {
    return true;
  } else {
    return false;
  }
}

/**
 * Random String (length)
 * @param {integer} length
 * @return {string} string
 */
export const randStr = (len) => {
  let text = null;
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  for( var i = 0; i < len; i++ ){
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
}
