import { getSeconds, getMinutes } from './Time';

test('getMinutes', () => {
  test('returns correct minutes', () => {
    const seconds = 62;
    expect(getMinutes(seconds)).to.equal(1);
  });
});

test('getSeconds', () => {
  test('returns correct seconds > 10', () => {
    const seconds = 60;
    expect(getSeconds(seconds)).to.equal('60');
  });

  test('returns correct seconds < 10', () => {
    const seconds = 4;
    expect(getSeconds(seconds)).to.equal('04');
  });
});
