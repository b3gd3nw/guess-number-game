const gameRoutes = require("./game.route");

const appRoutes = (app) => {

    app.use('/api', gameRoutes());

}

module.exports = appRoutes;