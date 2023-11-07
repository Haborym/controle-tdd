function yams(dices_roll) {
    let total_sum = 0;

    dices_roll.forEach(rolls => {
        rolls.sort();

        if(rolls.every(dice => dice == rolls[0])) {
            total_sum += 50;
            return;
        }

        // total_sum += rolls.reduce((a, b) => a + b, 0);
    });

    return total_sum;
}

module.exports = yams;