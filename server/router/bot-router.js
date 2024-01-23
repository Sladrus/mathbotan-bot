const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware');
const BotController = require('../controllers/BotController');

router.get('/link/create/:user_id', authMiddleware, BotController.createLink);

module.exports = router;
