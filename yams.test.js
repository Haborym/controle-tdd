const generateDiceRolls = require('./dices')
const yams = require('./yams')

test('Should return 0', () => {

    expect(yams(generateDiceRolls())).toBe(0);
});