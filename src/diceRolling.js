require('dotenv').config();


console.log("Current node environment is: \n" + process.env.NODE_ENV);
console.log("Cool message is \n" + process.env.COOL_MESSAGE);

function rollDice(diceSize = 6) {

    // Math.floor always round down, so diceSzie of 6 would be 0-5
    // Add 1 to guarantee that it stats within sensible range,
    // eg. diceSize of 6 means possible results are 1-6

    let diceTotal = Math.floor(Math.random() * diceSize) + 1; 

    return diceTotal;
}

function rollDiceWithDisadvantage(diceSize = 6){
	let result = {
		finalResult: null,
		rolls: []
	}

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];
    //let someArray = [1, 2, 3, 4]


    // Copy result.Rolls into a new array that only exists for Math.min() to analyze
    result.finalResult = Math.min(...result.rolls);


	return result;
}

function rollDiceWithAdvantage(diceSize = 6){
	let result = {
		finalResult: null,
		rolls: []
	}

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];
    //let someArray = [1, 2, 3, 4]


    // Copy result.Rolls into a new array that only exists for Math.max() to analyze
    result.finalResult = Math.max(...result.rolls);


	return result;
}

module.exports = {
    rollDice,
    rollDiceWithDisadvantage,
    rollDiceWithAdvantage
}