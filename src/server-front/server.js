var express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/data', (req, res) => {
  console.log('caught a get on /data');
  res.send({
    'name': 'light',
    'data': {
        label: 'light',
        data: [
            100,
            90,
            80,
            70,
            60,
            50,
            40
        ]
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.listen(3000, () => {
  console.log('listen on port 3000');
});
