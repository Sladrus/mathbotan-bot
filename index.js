require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mathbotanBot = require('./bot');
const router = require('./server/router');
const errorMiddleware = require('./server/middleware/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ extended: false }));
app.use(cors({ origin: true }));
app.use('/api', router);
app.use(errorMiddleware);

try {
  mathbotanBot.init();
  app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
} catch (e) {
  console.log('Server not started. Error:\n', e);
}
