function generateDiceRolls() {
    return [...Array(5)].map(_=>(([...Array(5)].map(_=>Math.ceil(Math.random()*5)+1))))
}

module.exports = generateDiceRolls;