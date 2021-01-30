import sum from './sum';

describe('sum', () => {
  it('sums up two values', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
  });
});
