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