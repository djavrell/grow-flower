var express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.listen(3000, () => {
  console.log('listen on port 3000');
});
