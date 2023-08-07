const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(req.ip);
});

app.listen(3000, () => {
  console.log('the server is running');
});
