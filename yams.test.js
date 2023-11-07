const generateDiceRolls = require('./dices')
const yams = require('./yams')

test('Yams = 50', () => {
    expect(yams([[1,1,1,1,1]])).toBe(50);
});

test('Grande suite = 40', () => {
    expect(yams([[2,3,4,5,6]])).toBe(40);
});

test('Yams + Grande suite = 90', () => {
    expect(yams([[1,1,1,1,1],[2,3,4,5,6]])).toBe(90);
});

test('Petite suite = 35', () => {
    expect(yams([[1,1,1,1,2]])).toBe(35);
});

test('Petite suite invert = 35', () => {
    expect(yams([[1,3,3,3,3]])).toBe(35);
});

test('Yams + Petite suite = 85', () => {
    expect(yams([[1,1,1,1,1],[4,5,5,5,5]])).toBe(85);
});

test('Brelan = 30', () => {
    expect(yams([[1,1,3,3,3]])).toBe(30);
});
