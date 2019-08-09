module.exports = function(a, b) {
    return Array.apply(null, Array(a + b)).map(
      function() {
        return '💩';
      }
    ).join('');
  };