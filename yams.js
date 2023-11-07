function yams(dices_roll) {
    let total_sum = 0;

    dices_roll.forEach(rolls => {
        rolls.sort();

        if(rolls.every(dice => dice == rolls[0])) {
            total_sum += 50;
            return;
        }

        if(
            rolls[0]+1 == rolls[1]
            && rolls[1]+1 == rolls[2]
            && rolls[2]+1 == rolls[3]
            && rolls[3]+1 == rolls[4]
            ) {
                total_sum += 40;
                return;
        }

        if(
            (
                rolls[0] == rolls[1]
                && rolls[1] == rolls[2]
                && rolls[2] == rolls[3]
                && rolls[3] != rolls[4]
            ) ||
            (
                rolls[0] != rolls[1]
                && rolls[1] == rolls[2]
                && rolls[2] == rolls[3]
                && rolls[3] == rolls[4]
            )
        ) {
            total_sum += 35;
            return;
        }

        if(
            (
                rolls[0] == rolls[1]
                && rolls[1] == rolls[2]
                && rolls[2] == rolls[3]
                && rolls[3] != rolls[4]
                && rolls[4] == rolls[5]
            ) ||
            (
                rolls[0] == rolls[1]
                && rolls[1] != rolls[2]
                && rolls[2] == rolls[3]
                && rolls[3] == rolls[4]
                && rolls[4] == rolls[5]
            )
        ) {
            total_sum += 30;
            return;
        }

        total_sum += rolls.reduce((a, b) => a + b, 0);
    });

    return total_sum;
}

module.exports = yams;