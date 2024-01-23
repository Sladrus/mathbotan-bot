const Router = require('express').Router;
const botRouter = require('./bot-router');

const router = new Router();

router.use('/bot', botRouter);

module.exports = router;
