const store = require('../core/store');

const handleStartGame = (req, res) => {
    store.secretNumber = Math.floor(Math.random() * 100) + 1;

    res.send({ message: 'Game started!' });
}

module.exports = handleStartGame;