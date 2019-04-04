const sum = require('./components/sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  function mul(a,b){return a+b}
test('adds 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(3);
  });