const { Router } = require("express");
const handleStartGame = require("../controllers/startGameController");
const handleGuess = require("../controllers/guessNumberController");

const router = Router();

const gameRoutes = () => {

    router.post('/start_game', handleStartGame);
    router.post('/guess', handleGuess);

    return router;
}

module.exports = gameRoutes;