const { default: axios } = require('axios');

const API_TOKEN = process.env.API_TOKEN;
const API_URL = process.env.API_URL;

const mBotanApi = axios.create({
  baseURL: API_URL,
  headers: { 'x-api-key': `${API_TOKEN}` },
});

module.exports = { mBotanApi };
