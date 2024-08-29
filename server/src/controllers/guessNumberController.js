const store = require('../core/store');

const handleGuess = (req, res) => {
    const userGuess = parseInt(req.body.number, 10);

    if (userGuess < store.secretNumber) {
        res.send({ result: 'The secret number is greater', end: false });
    } else if (userGuess > store.secretNumber) {
        res.send({ result: 'The secret number is smaller', end: false });
    } else {
        res.send({ result: 'Number guessed correctly', end: true });
    }
}

module.exports = handleGuess;