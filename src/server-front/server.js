var express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


const data = [
  {
    name: 'station 1',
    data: [
      {
        label: 'soil',
        data : [0, 1, 10, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        label: 'temp',
        data : [0, 1, 2, 3, 10, 5, 6, 7, 8, 9]
      },
      {
        label: 'light',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 10, 9]
      },
    ]
  },
  {
    name: 'station 2',
    data: [
      {
        label: 'soil',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        label: 'temp',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        label: 'light',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
    ]
  },
  {
    name: 'station 3',
    data: [
      {
        label: 'soil',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        label: 'temp',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        label: 'light',
        data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
    ]
  },
];

app.get('/data', (req, res) => {
  console.log('caught a get on /data');
  res.send(data);
});

app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.listen(3000, () => {
  console.log('listen on port 3000');
});
