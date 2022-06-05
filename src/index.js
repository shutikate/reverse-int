module.exports = function reverse (n) {
  let number = n.toString();
  if (number[0] !== '-') {
    return number.split('').reverse().join('');
  } else return number.slice(1).split('').reverse().join('');
}
