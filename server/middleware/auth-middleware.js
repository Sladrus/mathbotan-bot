require('dotenv').config();
const ApiError = require('../exceptions/api-error');

module.exports = function (req, res, next) {
  try {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_TOKEN) {
      return next(ApiError.ForbiddenError());
    }
    next();
  } catch (e) {
    return next(ApiError.ForbiddenError());
  }
};
