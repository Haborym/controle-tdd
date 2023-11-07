const generateDiceRolls = require('./dices')
const yams = require('./yams')

test('Yams = 50', () => {
    expect(yams([[1,1,1,1,1]])).toBe(50);
});

