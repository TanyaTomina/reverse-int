module.exports = function reverse (n) {
  if (n >= 0) {
      return n.toString().split('').reverse().join('');
  } else {
      n = n.toString().split('');
      let removed = n.shift();
      n = n.reverse().join('');
      return n;
  }
}
